import {
    signOut, auth, onAuthStateChanged, sendEmailVerification, deleteUser, storage, ref, uploadBytes,
    uploadBytesResumable, getDownloadURL, doc, setDoc, db, onSnapshot, deleteDoc, deleteObject
} from "../firebase.js";

//Initialize Toaster
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

//Showing user Data
var userPhoto = document.getElementById("userPhoto");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userVerified = document.getElementById("userVerified");

onAuthStateChanged(auth, (user) => {
    loader.style.display = 'flex';
    if (user) {
        userName.innerHTML = user.displayName;
        userEmail.innerHTML = user.email;
        if (user.emailVerified === true) {
            userVerified.innerHTML = "You are verified.";
            emailVerificationBtn.style.display = "none";
            fileSelectBtn.style.display = 'block';
            logOutBtn.style.display = "block"
            userPhoto.style.display = 'block';
        } else {
            userVerified.innerHTML = "Please Verify your-self."
            emailVerificationBtn.style.display = "block";
            userPhoto.style.display = 'none';
        }
        if (user.photoURL === null) {
            userPhoto.src = "../images/default-img.png";
            userPhoto.style.width = '150px';
            userPhoto.style.cursor = 'pointer';
        } else {
            userPhoto.src = user.photoURL;
        }

    } else {
        notify.innerHTML = "Please Register Yourself!"
    }
    loader.style.display = 'none';
});

//Sending Email verification
const emailVerification = () => {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            toastr.success("Goto inbox and Verify your-self.");
        }).catch(() => {
            toastr.error("Try again.");
        })
}
emailVerificationBtn.addEventListener('click', emailVerification);

//Logout User
const logOutUser = () => {
    signOut(auth).then(() => {
        toastr.success("You have been logout successfully.");
        setTimeout(() => {
            window.location = "../index.html";
        }, 1000);
        console.log(auth)
    }).catch((error) => {
        toastr.error("Try again.");
    });
}
logOutBtn.addEventListener('click', logOutUser);

//Uploading file
fileSelectBtn.addEventListener('click', async () => {
    const file = document.getElementById('file').files[0];
    //Validating select file
    if (!file) {
        toastr.warning("Please select picture first.");
        return;
    }
    //File size validation
    if (file.size > 1572864) {
        toastr.warning("Picture must be less than 1.5Mb.");
        return;
    }

    //File type validation
    const fileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
    if (!fileTypes.includes(file.type)) {
        toastr.warning("Please select JPG,JPEG or PNG.");
        return;
    }
    const authCurrentUserUid = auth.currentUser.uid;
    const storageRef = ref(storage, `images/${authCurrentUserUid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    await uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            toastr.info(`Upload is ${progress} % done`);
        },
        (error) => {
            console.log("error", error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                    const imageUrl = downloadURL;
                    const authCurrentUserUid = auth.currentUser.uid;
                    setDoc(doc(db, "userImage", `${authCurrentUserUid}`), {
                        userImageUrl: `${imageUrl}`,
                    });
                })
                .catch(error => {
                    toastr.error("Try again.");
                })
        }
    )
});

//Updating Picture
onAuthStateChanged(auth, (user) => {
    if (user) {
        const authCurrentUserUid = auth.currentUser.uid;
        onSnapshot(doc(db, `userImage/${authCurrentUserUid}`), (doc) => {
            const image = doc.data().userImageUrl;
            userPhoto.src = image;
            toastr.success("Please wait. Your Picture has been updating.")
        });
    }
});