//1---- Start LOGIN
// Start Checkikng the user Have account or no
if (
  localStorage.getItem("UserName") === null &&
  localStorage.getItem("UserPass") === null
) {
  document.querySelector(".logo-form h3").innerHTML =
    "CREAT ACCOUNT AT FRIST TO LOGIN";
}
//  END Checkikng the user Have account or no

const username = document.querySelector(".login-form .input-box.user input"),
  password = document.querySelector(".login-form .input-box.pass input"),
  closeOverlay = document.querySelector(".login-form .login-btn"),
  overLay = document.querySelector(".over-lay");

// Start Check about the username and passowrd of admin
closeOverlay.addEventListener("click", () => {
  if (
    localStorage.UserName === username.value &&
    localStorage.UserPass === password.value
  ) {
    overLay.style.display = "none";
    localStorage.setItem("logedIn", "true");
  }
});

// Hide login Page if These found
if (localStorage.logedIn === "true") {
  overLay.style.display = "none";
} else {
  overLay.style.display = "flex";
}

const checkTheUserAndPass = (allFeilds) => {
  if (
    username.value.trim() !== localStorage.getItem("UserName") &&
    password.value.trim() !== localStorage.getItem("UserPass")
  ) {
    allFeilds.forEach((input) => {
      if (
        allFeilds[0].value.trim() !== "" &&
        allFeilds[1].value.trim() !== ""
      ) {
        let titleOfgetstarted = overLay.querySelector(".login-form h3");
        setTimeout(() => {
          titleOfgetstarted.innerHTML = "Get Started";
          titleOfgetstarted.style.color = "white";
        }, 1000);
        titleOfgetstarted.innerHTML = "Un correct User Or pass";
        titleOfgetstarted.style.color = "red";
        input.classList.remove("wrong-password");
        void input.offsetWidth; // Trigger reflow to restart the animation
        input.classList.add("wrong-password");
      }
    });
  }
};

// Cheeck the user validation
const checkEmpttyInputs = function (allFeilds) {
  allFeilds.forEach((input) => {
    console.log(input.value);
    if (input.value.trim() === "") {
      let titleOfgetstarted = overLay.querySelector(".login-form h3");
      setTimeout(() => {
        if (
          localStorage.getItem("UserName") === null &&
          localStorage.getItem("UserPass") === null
        ) {
          document.querySelector(".logo-form h3").innerHTML =
            "CREAT ACCOUNT AT FRIST TO LOGIN";
        } else {
          titleOfgetstarted.innerHTML = "Get Started";
        }
        titleOfgetstarted.style.color = "white";
      }, 1000);
      titleOfgetstarted.innerHTML = "fill allfields";
      titleOfgetstarted.style.color = "red";
      input.classList.remove("wrong-password");
      void input.offsetWidth; // Trigger reflow to restart the animation
      input.classList.add("wrong-password");
    }
  });
};

// Check Evrey One 24hours
// admin in setting wil but the time he want to check
setInterval(() => {
  overLay.style.display = "flex";
}, 3600000);
overLay.querySelector("button").addEventListener("click", () => {
  let allFeilds = overLay.querySelectorAll("input");
  checkEmpttyInputs(allFeilds);
  checkTheUserAndPass(allFeilds);
});
//End Check about the username and passowrd of admin

//1---- END LOGIN

//2---- Start Setting
let boxs = document.querySelectorAll(".settings .box");
// Add Active class When we click In Specifc Element in settings box
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    boxs.forEach((box) => {
      box.classList.remove("active");
    });
    box.classList.add("active");
  });
});

// Start Show more products Setting::
document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector(".settings .products"),
    showMore = document.querySelector(".settings .show-more-product");
  products.addEventListener("click", () => {
    products.classList.toggle("show-more");
    showMore.classList.toggle("uil-angle-up");
    showMore.classList.toggle("uil-angle-down");
  });
});

// Nav Bar width When clcik in Icon
let barFit = document.querySelector(".bars .uil-angle-left-b"),
  barFull = document.querySelector(".bars .uil-angle-right-b"),
  settings = document.querySelector(".settings");
barFull.style.display = "none";
barFit.addEventListener("click", () => {
  barFit.style.display = "none";
  barFull.style.display = "block";
  settings.classList.add("fit");
});
barFull.addEventListener("click", () => {
  barFit.style.display = "block";
  barFull.style.display = "none";
  settings.classList.remove("fit");
});
//2---- End Setting

// Start Dashboard Main Paage
let dashboard = document.querySelector(".box.create-dashboard");
dashboard.addEventListener("click", () => {
  landing.innerHTML = `   <div class="landing">
            <div class="dashboard welcom">
                <div class="title">
                    <h1>Welcome <span class="admin-name">Omar</span> To Your Dashboard</h1>
                </div>
                <div class="details">
                    <h3>Here You Have Acces In Your E-commerce </h3>
                    <ul>
                        <li>Add Proudct</li>
                        <li>Remove Product</li>
                        <li>See All proudcts</li>
                        <li>etc..</li>
                    </ul>
                </div>
            </div>
        </div>`;
  let viewBy = document.querySelector(".view-by");
  viewBy.style.display = "none";
});

let appendAdminName = document.querySelector(".dashboard h1 span");
console.log(appendAdminName);
appendAdminName.innerHTML = localStorage.adminName;
// End Dashboard Main Paage

//3----- 1----- Start Add products
let addProductbox = document.querySelector(".settings ul li.add-product");
addProductbox.addEventListener("click", () => {
  landing.innerHTML = `
    <div class="landing-page">
        <div class="products-landing ">
          <div class="products-container add-product">
          </div>
        </div>
    </div>`;

  let productsContainer = document.querySelector(".products-container");

  productsContainer.innerHTML = `
          <section class="add-product-container">
          <div class="info">
          <h1>Base Information</h1>

          <div class="title-descrtiption">
          <input id="title" type="text" placeholder="Title"/>
          <input id="description" type="text" placeholder="Description"/>
          </div>
          </div>

          <div class="picture-holder">
          <h1>Picture</h1>

          <div class="pictures">
          
          <h3>Picture Number 1</h3>
          <div class="picture one">
          <input id="img-product" type="file" class="add-img one"/>
          <i class="uil-image-plus"></i>
          </div>
          <h3>Picture Number 2</h3>
          <div class="picture tow">
          <input id="img-product" type="file" class="add-img tow"/>
          <i class="uil-image-plus"></i>
          </div>
          <h3>Picture Number 3</h3>
          <div class="picture three">
          <input id="img-product" type="file" class="add-img three"/>
          <i class="uil-image-plus"></i>
          </div>

          </div>
          </div>

          <div class="details">
          <h1>Details</h1>
          <div class="price-quantity">
          <input id="price" type="number" placeholder="Price"/>
          <input id="quantity" type="number" placeholder="Quantity"/>
          </div>
          </div>
          
          <div class="type-holder">
          <div class="type">
              <input id="category" type="text" placeholder="Category"/>
          </div>
          </div>

            <button id="creat-product">Creeat Proudct</button>
        </section>
  `;
  productsContainer.innerHTML += `
    <div class="product preview">
    <h1>Preview</h1>
                        <div class="product-wrapper">
                            <div class="product-img">
                                <div class="img-container">
                                                        <i class="uil-arrow-right"></i>
                        <i class="uil-arrow-left"></i>

                                    <div class="img-one">
                                    <img src="" alt="Image 1">
                                    </div>
                                    <div class="img-tow">
                                    <img src="" alt="Image 2">
                                    </div>
                                    <div class="img-three">
                                    <img src="" alt="Image 3">
                                    </div>
                                </div>
                            </div>
                            <div class="product-details">
                                <div class="product-title">
                                    <h1 class="product-category">
                                    Catergory
                                    </h1>
                                </div>
                                <div class="product-title">
                                    <h1 class="product-name">
                                    Proudct Title
                                    </h1>
                                    <div class="product-price"><span>$00,00</span></div>
                                </div>
                                <div class="product-description">
                                    <p>
                                    </p>
                                </div>
                                <div class="size">
                                    <p>Size</p>
                                    <div class="size-holder">
                                        <span>M</span>
                                        <span>L</span>
                                        <span>XL</span>
                                    </div>
                                </div>
                                <div class="ad-to-card">
                                  <button class="quantity">Quantity 00</button>
                                </div>
                            </div>
          </div>`;

  // Start swiper
  let holdesrParent = document.querySelectorAll(
    ".products-container .product-img"
  );
  holdesrParent.forEach((holderParent) => {
    let holder = holderParent.querySelector(".img-container");
    let swiperRight = holderParent.querySelector("i.uil-arrow-right");
    let SipweLeft = holderParent.querySelector("i.uil-arrow-left");
    console.log(swiperRight);
    let allImgs = holder.querySelectorAll("img");
    let stopSlider = (allImgs.length - 1) * -200;

    let stepRight = 0;

    swiperRight.addEventListener("click", () => {
      if (stepRight === stopSlider) {
        return;
      }
      stepRight += -200;
      holder.style.marginLeft = `${stepRight}%`;
    });

    SipweLeft.addEventListener("click", () => {
      console.log(stepRight);
      if (stepRight === 0) {
        return;
      }
      stepRight += 200;
      holder.style.marginLeft = `${stepRight}%`;
    });
    // setTimeout(() => {
    //   if (stepRight === stopSlider) {
    //     stepRight = 200;
    //   }
    //   stepRight += -200;
    //   holder.style.marginLeft = `${stepRight}%`;
    // }, 1000);
  });
  // End swiper

  const title = document.getElementById("title"),
    category = document.getElementById("category"),
    description = document.getElementById("description"),
    price = document.getElementById("price"),
    quantity = document.getElementById("quantity"),
    btnCreatProduct = document.getElementById("creat-product");

  let addProduct = JSON.parse(localStorage.getItem("Products")) || [];
  let i = addProduct.length; // THE LAST NUMBER OF THE LAST IDIN THE PRODUCTS

  productsContainer
    .querySelectorAll(".add-product-container input")
    .forEach((input) => {
      input.addEventListener("keyup", () => {
        productsContainer.querySelector(".product-category").textContent =
          category.value;
        productsContainer.querySelector(".product-name").textContent =
          title.value;
        productsContainer.querySelector(".product-description p ").textContent =
          description.value;
        productsContainer.querySelector(
          ".product-price span"
        ).textContent = `$${parseFloat(price.value).toFixed(2)}`;
        productsContainer.querySelector(
          ".quantity"
        ).textContent = `Quantity ${quantity.value}`;
      });
    });

  // Add the Imgs to Product Preview
  const addImgOne = productsContainer.querySelector(".add-img.one");
  const addImgTow = productsContainer.querySelector(".add-img.tow");
  const addImgThree = productsContainer.querySelector(".add-img.three");
  let imgOneSrc;
  let imgTowSrc;
  let imgThreeSrc;

  const imageAddedSuccesfully = (index) => {
    let h3Msg = productsContainer.querySelectorAll(".pictures h3")[index];
    h3Msg.innerHTML = `Image (${index + 1
      }) added Succesfully <br> <span>Chosse Again if U Wanna Cahnge</span>`;
    h3Msg.querySelector("span").style.fontSize = "12px";
    h3Msg.querySelector("span").style.color = "#8e9eb8";
    h3Msg.style.color = "#fea300";
  };
  addImgOne.addEventListener("change", () => {
    const file = addImgOne.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.addEventListener("load", () => {
      const url = fr.result;
      let imgOne = productsContainer.querySelector(
        ".product-img .img-container .img-one img"
      );
      imgOne.src = url;
      imgOneSrc = url;
      imageAddedSuccesfully(0);
    });
  });
  addImgTow.addEventListener("change", () => {
    const file = addImgTow.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.addEventListener("load", () => {
      const url = fr.result;
      let imgTow = productsContainer.querySelector(
        ".product-img .img-container .img-tow img"
      );
      imgTow.src = url;
      imgTowSrc = url;
      imageAddedSuccesfully(1);
    });
  });
  addImgThree.addEventListener("change", () => {
    const file = addImgThree.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.addEventListener("load", () => {
      const url = fr.result;
      let imgThree = productsContainer.querySelector(
        ".product-img .img-container .img-three img"
      );
      imgThree.src = url;
      imgThreeSrc = url;
      imageAddedSuccesfully(2);
    });
  });

  // End add image for product
  const creatProduct = () => {
    const singleProduct = {
      // We made that to make the counter of the element on the fetch are te same
      id: i,
      name: title.value,
      description: description.value,
      price: parseFloat(price.value).toFixed(2),
      quantity: quantity.value,
      category: category.value,
      images: [imgOneSrc, imgTowSrc, imgThreeSrc],
    };
    addProduct.push(singleProduct);

    // Catch any error to Tell the user
    try {
      // Attempt to store the product data in localStorage
      localStorage.setItem("Products", JSON.stringify(addProduct));
      btnCreatProduct.textContent = "Created Succesfully";
      btnCreatProduct.style.backgroundColor = "green";
      setTimeout(() => {
        btnCreatProduct.style.backgroundColor = "#244eef";
        btnCreatProduct.textContent = "Creat Product";
        productsContainer
          .querySelectorAll(".add-product-container input")
          .forEach((input) => {
            input.value = "";
          });
      }, 1500);
    } catch (e) {
      if (
        e.name === "QuotaExceededError" ||
        e.message.includes("exceeded the quota")
      ) {
        btnCreatProduct.style.backgroundColor = "red";
        alert(
          "No enough Storage Try delete any Product or Choose Compress imgs"
        );
      } else {
        btnCreatProduct.style.backgroundColor = "red";
        alert(
          "No enough Storage Try delete any Product or Choose Compress imgs"
        );
      }
    }
  };

  btnCreatProduct.addEventListener("click", () => {
    if (
      title.value.trim("") !== "" &&
      price.value.trim("") !== "" &&
      category.value.trim("") !== "" &&
      description.value.trim("") !== ""
    ) {
      i++;
      creatProduct();
    } else {
      productsContainer
        .querySelectorAll(".add-product-container input")
        .forEach((input) => {
          if (input.value === "") {
            input.classList.remove("wrong-password");
            void input.offsetWidth; // Trigger reflow to restart the animation
            input.classList.add("wrong-password");
            btnCreatProduct.textContent = "Check Empty Inputs";
            setTimeout(() => {
              btnCreatProduct.textContent = "Creat Product";
            }, 1500);
          }
        });
    }
  });
});
//3----- 1----- End Add products

//3----- 2----- Start Products Show
const viewBy = () => {
  let viewBy = document.querySelector(".view-by");
  viewBy.style.display = "flex";
};
let landing = document.querySelector(".admin .landing .dashboard");
let productsArr;

if (localStorage.products !== null) {
  productsArr = JSON.parse(localStorage.getItem("Products"));
} else {
  productsArr = "";
}
//3----- 2----- End  Show Products

//3----- 3----- Start Delete Products
let deletProducts = document.querySelector(".settings ul li.delte-product");
deletProducts.addEventListener("click", () => {
  // Show the data on click
  showData();
  viewBy();
});
//3----- 3----- End Delete Products

//3----- 4----- Start Show All Products
let allProducts = document.querySelector(".settings ul li.all-products");
allProducts.addEventListener("click", () => {
  showData();
  viewBy();
  let productsContainer = document.querySelector(".products-container");
  // remove the elemnt  and add at below on the loop
  productsContainer.innerHTML = ``;
  for (let i = 0; i < productsArr.length; i++) {
    // Why the product data id = i becaus when we remove element the id will be the index ex>> if we delet id number 13
    // the count will be 12 , 14 , 15
    products = productsArr[i];
    productsArr[i].id = [i];
    let data = `
       <div class="product">
                        <div class="product-wrapper">
                            <div class="product-img">
                                <div class="img-container">
                                    <img src="${products.images[0]}" alt="">
                                </div>
                            </div>
                            <div class="product-details">
                                <div class="product-title">
                                    <h1 class="product-name">
                                    ${products.name}
                                    </h1>
                                    <div class="product-price"><span>${products.price}$</span></div>
                                </div>
                                <div class="product-description">
                                    <p>
                                    ${products.description}
                                    </p>
                                </div>
                                <div class="size">
                                    <p>Size</p>
                                    <div class="size-holder">
                                        <span>M</span>
                                        <span>L</span>
                                        <span>XL</span>
                                    </div>
                                </div>
                                <div class="ad-to-card">
                                  <button class="quantity">Quantity ${products.quantity}</button>
                                </div>
                            </div>
          </div>
                        `;
    productsContainer.innerHTML += data;
  }
});
//3----- 4----- End Show All Products

// Show data function including more things like show view of products and if no item show the img of no item
// and more
const showData = () => {
  landing.innerHTML = `
    <div class="landing-page">
        <div class="products-landing ">
          <div class="products-container">
          </div>
       
        </div>

    </div>`;

  let productsContainer = document.querySelector(".products-container");

  if (JSON.parse(localStorage.getItem("Products")).length === 0) {
    productsContainer.innerHTML = `   
              <div class="no-products">
                    <img src="imgs/nproduct.png" alt="">
                </div>
                    <h1>Go to settings to restore the old Data</h1>
              
                `;
  }
  //  Icon to show the products in the tow styles
  let viewBy = document.querySelector(".view-by i");

  viewBy.addEventListener("click", () => {
    // productsContainer.classList.toggle("view-small");
    // productsContainer.classList.toggle("new-view");
    // viewBy.classList.toggle("uil-align-center-justify");
    // viewBy.classList.toggle("uil-align-alt");
    if (productsContainer.classList.contains("view-small")) {
      productsContainer.classList.remove("view-small");
      viewBy.className = "uil-subject";
      productsContainer.classList.add("view-medium");
    } else if (productsContainer.classList.contains("view-medium")) {
      productsContainer.classList.remove("view-medium");
      viewBy.className = "uil-align-center-justify";
      productsContainer.classList.add("view-large");
    } else {
      productsContainer.classList.remove("view-large");
      viewBy.className = "uil-align-alt";
      productsContainer.classList.add("view-small");
    }
  });
  for (let i = 0; i < productsArr.length; i++) {
    // Why the product data id = i becaus when we remove element the id will be the index ex>> if we delet id number 13
    // the count will be 12 , 14 , 15
    products = productsArr[i];
    productsArr[i].id = [i];
    let data = `
       <div class="product">
                        <div class="product-wrapper">
                            <div class="product-img">
                                <div class="img-container">
                                    <img src="${products.images[0]}" alt="">
                                </div>
                            </div>
                            <div class="product-details">
                                <div class="product-title">
                                    <h1 class="product-name">
                                    ${products.name}
                                    </h1>
                                    <div class="product-price"><span>${products.price}$</span></div>
                                </div>
                                <div class="product-description">
                                    <p>
                                    ${products.description}
                                    </p>
                                </div>
                                <div class="size">
                                    <p>Size</p>
                                    <div class="size-holder">
                                        <span>M</span>
                                        <span>L</span>
                                        <span>XL</span>
                                    </div>
                                </div>
                                <div class="ad-to-card">
                                  <button class="delete" onclick="spesficProductNum(${i})">Delete</button>
                    
                                </div>
                            </div>
          </div>

          `;

    productsContainer.innerHTML += data;
  }
};

const spesficProductNum = (products) => {
  // let product = productsArr[products];
  let indexOfProduct = productsArr[products].id;
  productsArr.splice(indexOfProduct, 1);
  localStorage.setItem("Products", JSON.stringify(productsArr));
  deletProducts.click();
  productsArr = JSON.parse(localStorage.getItem("Products"));
  setInterval(() => {
    showData();
  }, 1000);
};

//4-----  Start Setings button inside settings container
let setting = document.querySelector(".box.setting");
setting.addEventListener("click", () => {
  let landing = document.querySelector(".admin .landing .dashboard");
  // This inner Html including all of the admin page html is devided into three parts the first is
  // 1- upload profile
  // 2- Change the username
  // 3- Change the password
  landing.innerHTML = `
        <div class="setting-page">
          <div class="title">
                    <h1>Setting Page</h1>
                    <p>Update your profile</p>
                </div>
              <div class="main-holder">
                <div class="outside-wrapper">
                    <div class="box-descripe">
                        <div class="text">
                            <h3>Profile photo</h3>
                            <p>This image will be displayed on your proile</p>
                        </div>
                        <div class="inside-warrper">
                            <div class="profile-container">
                                <div class="old-img">
                                    <img src="imgs/avatar.png" width="70px">
                                </div>
                                <div class="upload">
                                    <input id="img-product" type="file" />
                                    <i class="uil-cloud-upload"></i>
                                    <h3>Click to upload</h3>
                                    <p>JPG,PNG (Recommended Size 1000x1000px)</p>
                                </div>
                            </div>
                        </div>
                          <div class="save-cancel profile">
                          <button class="cancel">Cancel</button>
                          <button class="save">Save</button>
                          </div>
                  </div>
              </div>
            </div>
          </div>
         
                <div class="setting-page">
                    <div class="setting-page main-holder">
                        <div class="outside-wrapper">
                            <div class="box-descripe">
                                <div class="text">
                                    <h3>Presonal Information</h3>
                                    <p>Update your presonal details here</p>
                                </div>
                                <div class="inside-warrper presonal">
                                  <div class="presonal-details">
                                      <div class="username">
                                          <div class="frist">
                                              <p>Frist name</p>
                                              <input id="frist" type="text" placeholder="Fristname">
                                          </div>
                                          <div class="last">
                                              <p>Last name</p>
                                              <input id="last" type="text" placeholder="Last name">
                                          </div>
                                      </div>
                                      <div class="emial">
                                              <p>Email</p>
                                          <input type="email" placeholder="exampile@domain.com">
                                      </div>
                                      <div class="phone">
                                              <p>Phone Number</p>
                                          <input type="number" placeholder="123456789">
                                      </div>
                                  </div>
                                </div>
                                <div class="save-cancel personal">
                                    <button class="cancel">Cancel</button>
                                    <button class="save">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="setting-page">
                    <div class="setting-page main-holder">
                        <div class="outside-wrapper">
                            <div class="box-descripe">
                                <div class="text">
                                    <h3>Password</h3>
                                    <p>Enter your current password to make update</p>
                                </div>
                                <div class="inside-warrper presonal">
                                  <div class="presonal-details">
                                      <div class="current-passowrd">
                                              <p>Current Password</p>
                                          <input type="password">
                                      </div>
                                      <div class="new-passowrd">
                                              <p>New Password</p>
                                          <input type="password">
                                      </div>
                                  </div>
                                </div>
                                <div class="save-cancel passowrd">
                                    <button class="cancel">Cancel</button>
                                    <button class="save">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

          

  `;
  //4----- 1---- upload profile

  let uploadImgBox = landing.querySelector(".upload");
  let uploadInputfile = landing.querySelector(".main-holder .upload input");
  let oldimg = landing.querySelector(".main-holder .old-img img");
  // Show more products of Settings
  let adminImg = document.querySelector(".porfile-details img");
  if (localStorage.getItem("AdminImg") !== null) {
    adminImg.src = localStorage.getItem("AdminImg");
    oldimg.style.display = "block";
    oldimg.src = localStorage.getItem("AdminImg");
  } else {
    oldimg.style.display = "none";
  }

  uploadImgBox.addEventListener("click", () => {
    uploadInputfile.click();
  });
  uploadInputfile.addEventListener("change", () => {
    // Listens for new input file
    const file = uploadInputfile.files[0];
    // Gets file from input element

    const fr = new FileReader();
    // Creates new FileReader object

    fr.readAsDataURL(file);
    // Set FileReader to output data as URL string

    fr.addEventListener("load", () => {
      // Waits for file reading to be complete

      const url = fr.result;
      // Save result

      imgUrl = url;
      let oldimg = landing.querySelector(".old-img img");
      oldimg.src = imgUrl;
      let saveBtn = landing.querySelector(".save");
      //

      saveBtn.addEventListener("click", () => {
        localStorage.setItem("AdminImg", imgUrl);
        let updated = landing.querySelectorAll(".box-descripe .text p")[0];
        updated.innerHTML = "Profile updated succesfully";
        updated.style.color = "green";
        updated.style.fontSize = "16px";

        setTimeout(() => {
          updated.innerHTML = "This image will be displayed on your proile";
          updated.style.color = "#8e9eb8";
          updated.style.fontSize = "13px";
        }, 3000);
      });

      let cancelBtn = landing.querySelector(".cancel");
      oldimg.style.display = "block";
      // Remove the frist letter Then creat new emlemnt is img to append this into the header to find the img he serch to but the src to it
      adminFristletter.remove();

      let img = document.createElement("img");

      if (document.querySelector(".header .porfile-details img")) {
      } else {
        document.querySelector(".header .porfile-details").append(img);
      }
      document.querySelector(".header .porfile-details img").src = imgUrl;
      cancelBtn.addEventListener("click", () => {
        if (localStorage.getItem("AdminImg") !== null) {
          oldimg.src = localStorage.getItem("AdminImg");
          document.querySelector(".header .porfile-details img").src =
            localStorage.getItem("AdminImg");
        } else {
          oldimg.style.display = "none";
          let adminImg = document.querySelector(".porfile-details img");
          adminImg.style.display = "none";
          document
            .querySelector(".header .porfile-details")
            .append(adminFristletter);
        }
      });
    });
  });

  // 4----- 1---- End upload profile

  //4----- 2-----Start Presonal data
  let savebtnPersonl = document.querySelector(".save-cancel.personal .save");
  let cancelbtnPersonl = document.querySelector(
    ".save-cancel.personal .cancel"
  );

  let fristNameInput = document.querySelector(".username #frist");
  let lastNameInput = document.querySelector(".username #last");
  let AdminEmail = document.querySelector(".emial input");
  let AdimnNumber = document.querySelector(".phone input");

  // Funciton make allert rto user  if the data updated
  const updatSuccessfuly = (updateTextParent) => {
    updateTextParent.innerHTML = "Data updated succesfully";
    updateTextParent.style.color = "green";
    updateTextParent.style.fontSize = "16px";

    setTimeout(() => {
      updateTextParent.innerHTML = "Update your presonal details here";
      updateTextParent.style.color = "#8e9eb8";
      updateTextParent.style.fontSize = "13px";
      document
        .querySelectorAll(".presonal-details div input")
        .forEach((input) => {
          input.value = "";
        });
    }, 3000);
  };
  savebtnPersonl.addEventListener("click", () => {
    if (fristNameInput.value.trim("") && lastNameInput.value.trim("") !== "") {
      let newUserName = fristNameInput.value + lastNameInput.value;
      localStorage.setItem("UserName", newUserName);
      localStorage.setItem("adminName", fristNameInput.value);
      console.log(newUserName);
      let updated = landing.querySelectorAll(".box-descripe .text p")[1];
      updatSuccessfuly(updated);
    }

    if (AdminEmail.value.trim("")) {
      localStorage.setItem("AdminEmail", AdminEmail.value);
      let updated = landing.querySelectorAll(".box-descripe .text p")[1];
      updatSuccessfuly(updated);
    }

    if (AdimnNumber.value.trim("") !== "") {
      localStorage.setItem("AdminPhoneNumber", AdimnNumber.value);
      let updated = landing.querySelectorAll(".box-descripe .text p")[1];
      updatSuccessfuly(updated);
    }
  });
  cancelbtnPersonl.addEventListener("click", () => {
    document
      .querySelectorAll(".presonal-details div input")
      .forEach((input) => {
        input.value = "";
      });
  });
  //4----- 2-----End Presonal data

  //4----- 3----- Start Password
  let savebtnPassowrd = landing.querySelector(".save-cancel.passowrd .save");
  let cancelbtnPassowrd = landing.querySelector(
    ".save-cancel.password .cancel"
  );
  let currentPassowrd = landing.querySelector(".current-passowrd input");
  savebtnPassowrd.addEventListener("click", () => {
    if (currentPassowrd.value === localStorage.getItem("UserPass")) {
      let newPassowrd = landing.querySelector(".new-passowrd input").value;
      localStorage.setItem("UserPass", newPassowrd);
      let updated = landing.querySelectorAll(".box-descripe .text p")[2];
      updatSuccessfuly(updated);
    } else {
      let updated = landing.querySelectorAll(".box-descripe .text p")[2];
      updated.innerHTML = "The current passowrd Wrong";
      updated.style.color = "red";
      updated.style.fontSize = "16px";
      setTimeout(() => {
        updated.innerHTML = "Enter your current password to make update";
        updated.style.color = "#8e9eb8";
        updated.style.fontSize = "13px";
        currentPassowrd.value = "";
      }, 3000);
    }
  });
  //4----- 3----- END Password
});

// Make this in local scope to check in refresh

// Show Admin Img
let adminImg = document.querySelector(".porfile-details img");
let adminFristletter = document.createElement("div");

let adminImgSettingBox = document.querySelector(
  ".login-singout  .img-holder img"
);
let adminImgSettingBoxHolder = document.querySelector(
  ".login-singout .img-holder"
);
let adminFristletterSettingBox = document.createElement("div");
if (localStorage.getItem("AdminImg") !== null) {
  adminImg.src = localStorage.getItem("AdminImg");
  adminImgSettingBox.src = localStorage.getItem("AdminImg");
  adminFristletter.remove();
  adminFristletterSettingBox.remove();
} else {
  if (localStorage.getItem("adminName") !== null) {
    let imgParent = document.querySelector(".porfile-details");
    adminFristletter.innerHTML = localStorage.getItem("adminName")[0];
    imgParent.appendChild(adminFristletter);
    adminImg.remove();
    // Settings box
    adminFristletterSettingBox.innerHTML = localStorage.getItem("adminName")[0];
    adminImgSettingBoxHolder.appendChild(adminFristletterSettingBox);
    adminImgSettingBox.remove();
  }
}
//4----- End Setings button inside settings container

const checkSigninSuccesInLocal = () => {
  if (localStorage.logedIn === "true") {
    let signOutfromsitting = document.querySelector(
      ".dashboard .sing-out i.uil-signout"
    );
    let overLay = document.querySelector(".over-lay");

    signOutfromsitting.addEventListener("click", () => {
      console.log(signOutfromsitting);

      localStorage.setItem("logedIn", "false");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      overLay.style.display = "flex";
      overLay.innerHTML = `
     <section class="login-form sign-out">
        <i class="uil-times" title="Mian Page"></i>
            <div class="logo-form">
               <i class="uil-signout"></i>
                <h3>Signed Out</h3>
            </div>
           <h4>GoodBye <span> ${localStorage.adminName}</span></h4>
        </section>`;
      overLay.querySelector(".sign-out h4").style.color = "white";
      const closeOverlay = document.querySelector(
        ".over-lay .login-form i.uil-times"
      );
      closeOverlay.addEventListener("click", () => {
        overLay.style.display = "none";
        window.location.reload();
      });
    });
  }
};
checkSigninSuccesInLocal();

document.querySelector(".admin-name-mail h3").innerHTML =
  localStorage.getItem("UserName");

let dontshowThisagain = document.querySelector(
  ".popUp-fill-feild .dont-show i "
);

dontshowThisagain.addEventListener("click", () => {
  localStorage.setItem("displayNone", "none");
  document.querySelector(".popUp-fill-feild").style.display =
    localStorage.getItem("displayNone");
});
if (
  localStorage.logedIn === "true" &&
  localStorage.getItem("displayNone") === null
) {
  if (
    localStorage.getItem("AdminEmail") === "" &&
    localStorage.getItem("AdminPhoneNumber") === ""
  ) {
    const closePopup = document.querySelector(".popUp-fill-feild i.uil-times");
    closePopup.addEventListener("click", () => {
      document.querySelector(".popUp-fill-feild").style.display = "none";
    });
    setTimeout(() => {
      document.querySelector(".popUp-fill-feild").style.display = "block";
      setTimeout(() => {
        document.querySelector(".popUp-fill-feild").style.display = "none";
      }, 5000);
    }, 3000);
  }
}

// Fetch Data from Frist visit
let fetchFristVist = document.querySelector(".product-parent .fetch-data");
let link = document.querySelector(".product-parent p a");
fetchFristVist.addEventListener("click", () => {
  localStorage.setItem("ShowDeletedProducts", "showen");
  localStorage.setItem("diplayafterFetch", "none");
  link.click();
});

fetchFristVist.style.display = localStorage.getItem("diplayafterFetch");

let productsSetting = document.querySelector(".products-settings");
productsSetting.addEventListener("click", () => {
  let landing = document.querySelector(".admin .landing .dashboard");
  landing.innerHTML = `
        <div class="setting-page">
          <div class="title">
                    <h1>Products Setting Page</h1>
                    <p>Update Featers of Products</p>
                </div>
              <div class="main-holder">
                <div class="outside-wrapper">
                    <div class="box-descripe">
                        <div class="text">
                            <h3>Show More Button</h3>
                            <p>This will append a specific limit for the quantity of much products will show on one click</p>
                        </div>
                        <div class="inside-warrper">
                        <div class="amount-show-more">
                        <input id="ammount" type="number" placeholder="Number of show more products" min="1" max="20" />
   
                            </div>
                        </div>
                          <div class="save-cancel products-settings">
                          <button class="cancel">Cancel</button>
                          <button class="save">Save</button>
                          </div>
                  </div>
              </div>
            </div>
          </div>
         

                <div class="setting-page">
                    <div class="setting-page main-holder">
                        <div class="outside-wrapper">
                            <div class="box-descripe">
                                <div class="text">
                                    <h3>Fetch data</h3>
                                    <p>Return The data is deleted from shop page <br>
                                    <span>noitic:the last added products will remove onley main products will return</span></p>
                                </div>
                                <div class="inside-warrper presonal">
                              <button class="show-deleted">Return</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

  `;
  let numberShowMore = document.querySelector(
    ".amount-show-more input#ammount"
  );
  let saveNumShowMore = landing.querySelector(
    ".save-cancel.products-settings .save"
  );
  let cancelNumShowMore = landing.querySelector(
    ".save-cancel.products-settings .cancel"
  );
  let updated = landing.querySelectorAll(".box-descripe .text p")[0];
  saveNumShowMore.addEventListener("click", () => {
    if (numberShowMore.value.trim("") !== "" && numberShowMore.value < 20) {
      localStorage.setItem("showMoreAmount", numberShowMore.value);
      updated.innerHTML = `The ammount Updated Succesfully The ammount now is (${numberShowMore.value})`;
      updated.style.color = "green";
      updated.style.fontSize = "16px";
    } else {
      updated.innerHTML = "Cannot set Emptey Value or Big Values Than 20";
      updated.style.color = "red";
      updated.style.fontSize = "16px";
      setTimeout(() => {
        updated.innerHTML =
          "This will append a specific limit for the quantity of much products will show on one click";
        updated.style.color = "#8e9eb8";
        updated.style.fontSize = "13px";
      }, 3000);
    }
  });
  cancelNumShowMore.addEventListener("click", () => {
    numberShowMore.value = "";
  });
  //
  let showDeletedProducts = landing.querySelector(".show-deleted");
  showDeletedProducts.addEventListener("click", () => {
    localStorage.setItem("ShowDeletedProducts", "showen");
    let updated = landing.querySelectorAll(".box-descripe .text p")[1];
    updated.innerHTML = "Data Returned succesfully";
    updated.style.color = "green";
    updated.style.fontSize = "16px";
    setTimeout(() => {
      updated.innerHTML = `
      Return The data is deleted from shop page <br>
                                    <span>noitic:the last added products will remove onley main products will return</span>`;
      updated.style.color = "#8e9eb8";
      updated.style.fontSize = "13px";
    }, 3000);
  });
});
