//1st Section
const showProducts1 = () => {
    const expandedPrducts = `
    <div class="productsHeading text-center">
    <h2>Electronics & Technology</h2>
</div>
    <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx1 p-3">
        <div class="iconCartDiscount">
        <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                <span>-40%</span>
            </div>
            <div class="bx1img text-center p-3">
                <img src="images/bx1-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>HAVIT HV-G92 Gamepad</p>
                <span id="orginalPrice" class="pe-3">$100</span><s>$160</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx2 p-3">
        <div class="iconCartDiscount">
        <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                <span>-30%</span>
            </div>
            <div class="bx2img text-center p-3">
                <img src="images/bx2-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>AK-900 Wired Keyboard</p>
                <span id="orginalPrice" class="pe-3">$160</span><s>$180</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx3 p-3">
        <div class="iconCartDiscount">
        <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                <span>-70%</span>
            </div>
            <div class="bx3img text-center p-3">
                <img src="images/bx3-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>IPS LCD Gaming Monitor</p>
                <span id="orginalPrice" class="pe-3">$60</span><s>$160</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx4 p-3">
        <div class="iconCartDiscount">
        <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                <span>-30%</span>
            </div>
            <div class="bx4img text-center p-3">
                <img src="images/bx4-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>ASUS FHD Gaming Laptop</p>
                <span id="orginalPrice" class="pe-3">$180</span><s>$200</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                    <div class="bx5 p-3">
                    <div class="iconCartDiscount">
                    <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                            <span>-30%</span>
                        </div>
                        <div class="bx4img text-center p-3">
                            <img src="images/bx5-img.png" alt="Loading...">
                        </div>
                        <div class="description">
                            <p>RGB liquid CPU Cooler</p>
                            <span id="orginalPrice" class="pe-3">$180</span><s>$200</s>
                            <br>
                            <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                    <div class="bx6 p-3">
                    <div class="iconCartDiscount">
                    <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                            <span>-30%</span>
                        </div>
                        <div class="bx4img text-center p-3">
                            <img src="images/bx6-img.png" alt="Loading...">
                        </div>
                        <div class="description">
                            <p>CANON EOS DSLR Camera</p>
                            <span id="orginalPrice" class="pe-3">$250</span><s>$270</s>
                            <br>
                            <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                    <div class="bx7 p-3">
                    <div class="iconCartDiscount">
                    <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                            <span>-30%</span>
                        </div>
                        <div class="bx4img text-center p-3">
                            <img src="images/bx7-img.png" alt="Loading...">
                        </div>
                        <div class="description">
                            <p>Kids Electric Car</p>
                            <span id="orginalPrice" class="pe-3">$140</span><s>$160</s>
                            <br>
                            <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                    <div class="bx8 p-3">
                    <div class="iconCartDiscount">
                    <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                            <span>-30%</span>
                        </div>
                        <div class="bx4img text-center p-3">
                            <img src="images/bx8-img.png" alt="Loading...">
                        </div>
                        <div class="description">
                            <p>GP11 Shooter USB Gamepad</p>
                            <span id="orginalPrice" class="pe-3">$200</span><s>$220</s>
                            <br>
                            <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i><i class="fa-solid fa-star"
                                    style="color: #000000;"></i></span>
                        </div>
                    </div>
                </div>
            </div>
`;
    const preProducts = `
    <div class="productsHeading text-center">
                    <h2>Electronics & Technology</h2>
                </div>
    <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx1 p-3">
        <div class="iconCartDiscount">
        <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                <span>-40%</span>
            </div>
            <div class="bx1img text-center p-3">
                <img src="images/bx1-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>HAVIT HV-G92 Gamepad</p>
                <span id="orginalPrice" class="pe-3">$100</span><s>$160</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx2 p-3">
        <div class="iconCartDiscount">
        <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                <span>-30%</span>
            </div>
            <div class="bx2img text-center p-3">
                <img src="images/bx2-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>AK-900 Wired Keyboard</p>
                <span id="orginalPrice" class="pe-3">$160</span><s>$180</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx3 p-3">
        <div class="iconCartDiscount">
        <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                <span>-70%</span>
            </div>
            <div class="bx3img text-center p-3">
                <img src="images/bx3-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>IPS LCD Gaming Monitor</p>
                <span id="orginalPrice" class="pe-3">$60</span><s>$160</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx4 p-3">
        <div class="iconCartDiscount">
        <i class="fa-solid fa-cart-plus" style="cursor: pointer;"></i>
                <span>-30%</span>
            </div>
            <div class="bx4img text-center p-3">
                <img src="images/bx4-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>ASUS FHD Gaming Laptop</p>
                <span id="orginalPrice" class="pe-3">$180</span><s>$200</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
</div>
`;
    const btn = document.getElementById('seeAllProductsElectronicsTechnologyBtn');
    if (btn.innerHTML === "More Products") {
        document.getElementById("prducts1").innerHTML = expandedPrducts;
        btn.innerHTML = "Less Products";
    } else {
        document.getElementById("prducts1").innerHTML = preProducts;
        btn.innerHTML = "More Products"
    }
}

//For Electronics&Technology
document.addEventListener("DOMContentLoaded", function () {
    const exploreLink = document.querySelector('.navbar a[href="#Electronics&Technology"]');
    if (exploreLink) {
        exploreLink.addEventListener('click', function (event) {
            event.preventDefault();
            const exploreSection = document.getElementById('Electronics&Technology');
            if (exploreSection) {
                // Scroll to the explore section smoothly
                exploreSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

seeAllProductsElectronicsTechnologyBtn.addEventListener('click', showProducts1);

//2nd Section

const showProducts2 = () => {
    const expandedPrducts = `
    <div class="productsHeading text-center">
                    <h2>Home & Lifestyle</h2>
                </div>
    <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="bx9 p-3">
                            <div class="icon">
                                <span>-30%</span>
                            </div>
                            <div class="bx9img text-center p-3">
                                <img src="images/bx9-img.png" alt="Loading...">
                            </div>
                            <div class="description">
                                <p>Jr. Zoom Soccer Cleats</p>
                                <span id="orginalPrice" class="pe-3">$120</span><s>$140</s>
                                <br>
                                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="bx10 p-3">
                            <div class="icon">
                                <span>-30%</span>
                            </div>
                            <div class="bx10img text-center p-3">
                                <img src="images/bx10-img.png" alt="Loading...">
                            </div>
                            <div class="description">
                                <p>Quilted Satin Jacket</p>
                                <span id="orginalPrice" class="pe-3">$160</span><s>$180</s>
                                <br>
                                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="bx11 p-3">
                            <div class="icon">
                                <span>-10%</span>
                            </div>
                            <div class="bx11img text-center p-3">
                                <img src="images/bx11-img.png" alt="Loading...">
                            </div>
                            <div class="description">
                                <p>Breed Dry Dog Food</p>
                                <span id="orginalPrice" class="pe-3">$60</span><s>$70</s>
                                <br>
                                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="bx12 p-3">
                            <div class="icon">
                                <span>-0%</span>
                            </div>
                            <div class="bx12img text-center p-3">
                                <img src="images/bx12-img.png" alt="Loading...">
                            </div>
                            <div class="description">
                                <p>Small BookSelf</p>
                                <span id="orginalPrice" class="pe-3">$180</span><s>$180</s>
                                <br>
                                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="bx13 p-3">
                            <div class="icon">
                                <span>-8%</span>
                            </div>
                            <div class="bx13img text-center p-3">
                                <img src="images/bx13-img.png" alt="Loading...">
                            </div>
                            <div class="description">
                                <p>Gucci duffle bag</p>
                                <span id="orginalPrice" class="pe-3">$180</span><s>$188</s>
                                <br>
                                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="bx14 p-3">
                            <div class="icon">
                                <span>-2%</span>
                            </div>
                            <div class="bx14img text-center p-3">
                                <img src="images/bx14-img.png" alt="Loading...">
                            </div>
                            <div class="description">
                                <p>Small BookSelf</p>
                                <span id="orginalPrice" class="pe-3">$180</span><s>$178</s>
                                <br>
                                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="bx15 p-3">
                            <div class="icon">
                                <span>-38%</span>
                            </div>
                            <div class="bx15img text-center p-3">
                                <img src="images/bx15-img.png" alt="Loading...">
                            </div>
                            <div class="description">
                                <p>The north coat</p>
                                <span id="orginalPrice" class="pe-3">$180</span><s>$218</s>
                                <br>
                                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="bx16 p-3">
                            <div class="icon">
                                <span>-40%</span>
                            </div>
                            <div class="bx16img text-center p-3">
                                <img src="images/bx16-img.png" alt="Loading...">
                            </div>
                            <div class="description">
                                <p>The north coat</p>
                                <span id="orginalPrice" class="pe-3">$150</span><s>$190</s>
                                <br>
                                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i><i class="fa-solid fa-star"
                                        style="color: #000000;"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
    
    
    `;

    const preProducts = `
    <div class="productsHeading text-center">
                    <h2>Home & Lifestyle</h2>
                </div>
    <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx9 p-3">
            <div class="icon">
                <span>-30%</span>
            </div>
            <div class="bx9img text-center p-3">
                <img src="images/bx9-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>Jr. Zoom Soccer Cleats</p>
                <span id="orginalPrice" class="pe-3">$120</span><s>$140</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx10 p-3">
            <div class="icon">
                <span>-30%</span>
            </div>
            <div class="bx10img text-center p-3">
                <img src="images/bx10-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>Quilted Satin Jacket</p>
                <span id="orginalPrice" class="pe-3">$160</span><s>$180</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx11 p-3">
            <div class="icon">
                <span>-10%</span>
            </div>
            <div class="bx11img text-center p-3">
                <img src="images/bx11-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>Breed Dry Dog Food</p>
                <span id="orginalPrice" class="pe-3">$60</span><s>$70</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="bx12 p-3">
            <div class="icon">
                <span>-0%</span>
            </div>
            <div class="bx12img text-center p-3">
                <img src="images/bx12-img.png" alt="Loading...">
            </div>
            <div class="description">
                <p>Small BookSelf</p>
                <span id="orginalPrice" class="pe-3">$180</span><s>$180</s>
                <br>
                <span><i class="fa-solid fa-star" style="color: #000000;"></i><i
                        class="fa-solid fa-star" style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i><i class="fa-solid fa-star"
                        style="color: #000000;"></i></span>
            </div>
        </div>
    </div>
</div>
    `;
    const btn = document.getElementById('seeAllProductsHomeLifestyleBtn');
    if (btn.innerHTML === "More Products") {
        document.getElementById("prducts2").innerHTML = expandedPrducts;
        btn.innerHTML = "Less Products";
    } else {
        document.getElementById("prducts2").innerHTML = preProducts;
        btn.innerHTML = "More Products"
    }

}

//For Electronics&Technology
document.addEventListener("DOMContentLoaded", function () {
    const exploreLink = document.querySelector('.navbar a[href="#Home&Lifestyle"]');
    if (exploreLink) {
        exploreLink.addEventListener('click', function (event) {
            event.preventDefault();
            const exploreSection = document.getElementById('Home&Lifestyle');
            if (exploreSection) {
                // Scroll to the explore section smoothly
                exploreSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

seeAllProductsHomeLifestyleBtn.addEventListener('click', showProducts2)





//Scrolling Up
document.addEventListener('DOMContentLoaded', function () {
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
