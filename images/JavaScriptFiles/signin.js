import { auth, signInWithEmailAndPassword } from "../firebase.js";

//Initialize
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
    "timeOut": "1000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

const authenticateUser = () => {
    const signInEmail = document.getElementById('signInEmail').value;
    const signInPassword = document.getElementById('signInPassword').value;
    if (signInEmail === "") {
        toastr.error("Please Enter email.");
    } else if (signInPassword === "") {
        toastr.error("Please enter Password.");
    } else {
        signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                toastr.success("LogIn Succcessfully.")
                setTimeout(() => {
                    window.location = "../htmlPages/profile.html";
                },1000);
                document.getElementById('signInEmail').value = "";
                document.getElementById('signInPassword').value = "";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toastr.error("Invalid Email or Passowrd.");
            });
    }
}
signInBtn.addEventListener('click', authenticateUser);