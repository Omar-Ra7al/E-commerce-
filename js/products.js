// Start View Products By 3 diffrent ways
let productsContainer = document.querySelector(".products-container");
let viewBy = document.querySelector(".view-by i");
viewBy.addEventListener("click", () => {
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
// End View Products By

// Save the values into localstorage
let productsArr = JSON.parse(localStorage.getItem("Products")) || [];

// Start swiper
const swiper = () => {
  let holdesrParent = document.querySelectorAll(
    ".products-container .product-img"
  );

  holdesrParent.forEach((holderparent) => {
    let holder = holderparent.querySelector(
      ".products-container .product-img .img-container"
    );
    let swiperRight = holderparent.querySelector(
      ".products-container .product-img .arrow-container.right-new"
    );
    let SipweLeft = holderparent.querySelector(
      ".products-container .product-img .arrow-container.left-new"
    );

    if (!holder || !swiperRight || !SipweLeft) {
      return; // Skip this iteration if any element is null
    }

    let allImgs = holder.querySelectorAll(
      ".products-container .product-img img"
    );
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
      if (stepRight === 0) {
        return;
      }
      stepRight += 200;
      holder.style.marginLeft = `${stepRight}%`;
    });
  });
};
// End swiper

// Hide all buttons exept the prameter value
const hiddeAllShowMoreBtn = (exeptBtn) => {
  let allShowMoreButtons = document.querySelectorAll(".show-more button");
  allShowMoreButtons.forEach((button) => {
    button.style.display = "none";
  });

  let exeptedButton = document.querySelector(`.show-more button.${exeptBtn}`);
  exeptedButton.style.display = "inline";
};

// Call The buttons
let pants = document.querySelector(".ctegores button.pants");
let shirts = document.querySelector(".ctegores button.Sweatshirts");
let shoes = document.querySelector(".ctegores button.shoes");
//Start Increment of show more
let increment = +localStorage.getItem("showMoreAmount") || 10;
let startCount = 0;
let endCount = increment;
//End Increment of show more
const incrementFunction = (arrayName, btnClass) => {
  let allCategoryesButtons = document.querySelectorAll(".ctegores button");
  allCategoryesButtons.forEach((button) => {
    button.classList.remove("active");
  });
  document.querySelector(`button.${btnClass}`).classList.add("active");
  //Reset The Increment of show more
  increment = +localStorage.getItem("showMoreAmount") || 10;
  startCount = 0;
  endCount = increment;
  //End Reset Increment of show more
  productsContainer.innerHTML = "";
  // Show data
  const showSpecsficProducts = (start, end) => {
    for (let i = start; i < end; i++) {
      let products = arrayName[i];
      // Check if the product is undefined or null
      if (!products || !products.images) {
        continue; // Skip this iteration
      }
      productsContainer.innerHTML += `
                <div class="product">
                    <div class="product-wrapper">
                        <div class="product-img">
                        <div class="arrow-container right-new">
                        <i class="uil-arrow-right"></i>
                        </div>
                        <div class="arrow-container left-new">
                        <i class="uil-arrow-left"></i>
                        </div>
                            <div class="img-container">
                            <div>
                            <img src="${products.images[0]
        }" alt="No Image For This Product">
                            </div>
                            <div>
                            <img src="${products.images[1]
        }" alt="No Image For This Product">
                            </div>
                            <div>
                            <img src="${products.images[2]
        }" alt="No Image For This Product">
                            </div>
                            </div>
                        </div>
                        <div class="product-details">
                            <div class="product-title">
                                <h1 class="product-name">${products.name}</h1>
                                <div class="product-price"><span>${products.price
        }$</span></div>
                            </div>
                            <div class="product-description">
                                <p>${products.description}</p>
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
                                <i class="uil-cart"></i>
                                <button class="add-to-card"  onclick="spesficProductNum(${products.id - 1
        }) ; theProductAdded(${i})">+ Add to Cart
                        <i class="uil-shopping-cart"> </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }
  };
  showSpecsficProducts(startCount, endCount);

  //Start Show More Buttons
  hiddeAllShowMoreBtn(`${btnClass}`);
  let showMoreProductsbtn = document.querySelector(
    `.show-more button.${btnClass}`
  );

  //End Show More Buttons

  showMoreProductsbtn.addEventListener("click", () => {
    console.log(increment);

    startCount = startCount + increment;
    endCount = endCount + increment;

    // Ensure endCount does not exceed array length
    if (endCount > arrayName.length) {
      endCount = arrayName.length;
      showMoreProductsbtn.style.display = "none";
    }

    // Ensure startCount does not exceed endCount
    if (startCount >= arrayName.length) {
      startCount = arrayName.length - (endCount - startCount);
      if (startCount < 0) startCount = 0; // Ensure startCount doesn't go below 0
    }
    showSpecsficProducts(startCount, endCount);
    swiper();
  });
  swiper();
  if (Number(localStorage.getItem("showMoreAmount")) > arrayName.length) {
    endCount = arrayName.length - 1;
    increment = arrayName.length - 1;
    startCount = arrayName.length - increment;
    showMoreProductsbtn.style.display = "none";
  }
};
shoes.addEventListener("click", () => {
  function getProductsByCategory(productsArr, categoryName) {
    return productsArr.filter((product) => product.category === categoryName);
  }
  const filteredProducts = getProductsByCategory(productsArr, "shoes");
  incrementFunction(filteredProducts, "shoes");
});
shirts.addEventListener("click", () => {
  function getProductsByCategory(productsArr, categoryName) {
    return productsArr.filter((product) => product.category === categoryName);
  }

  const filteredProducts = getProductsByCategory(productsArr, "Sweatshirts");
  incrementFunction(filteredProducts, "Sweatshirts");
});
pants.addEventListener("click", () => {
  function getProductsByCategory(productsArr, categoryName) {
    return productsArr.filter((product) => product.category === categoryName);
  }
  const filteredProducts = getProductsByCategory(productsArr, "pants");
  incrementFunction(filteredProducts, "pants");
});

let allCategoryes = document.querySelector(".ctegores button.all");
let showMoreProductsbtn = document.querySelector(".show-more button.all");
allCategoryes.addEventListener("click", () => {
  showData();
  let allCategoryesButtons = document.querySelectorAll(".ctegores button");
  allCategoryesButtons.forEach((button) => {
    button.classList.remove("active");
  });
  allCategoryes.classList.add("active");
});

let incrementshowData = +localStorage.getItem("showMoreAmount") || 10;
let startCountshowData = 0;
let endCountshowData = incrementshowData;

const showSpecsficonShowData = (start, end) => {
  // let productCount = 0;
  for (let i = start; i < end && i < productsArr.length; i++) {
    let product = productsArr[i];
    productsContainer.innerHTML += `
      <div class="product">
        <div class="product-wrapper">
          <div class="product-img">
                   <div class="arrow-container right-new">
                        <i class="uil-arrow-right"></i>
                        </div>
                        <div class="arrow-container left-new">
                        <i class="uil-arrow-left"></i>
                        </div>
            <div class="img-container">
              <div>
                <img src="${product.images[0]}" alt="No Image For This Product">
              </div>
              <div>
                <img src="${product.images[1]}" alt="No Image For This Product">
              </div>
              <div>
                <img src="${product.images[2]}" alt="No Image For This Product">
              </div>
            </div>
          </div>
          <div class="product-details">
            <div class="product-title">
              <h1 class="product-name">${product.name}</h1>
              <div class="product-price"><span>${product.price}$</span></div>
            </div>
            <div class="product-description">
              <p>${product.description}</p>
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
              <i class="uil-cart"></i>
              <button class="add-to-card" onclick="spesficProductNum(${i}); theProductAdded(${i})">+ Add to Cart
                <i class="uil-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    // productCount++;
  }
  // if (productCount === 0) {
  //   productsContainer.innerHTML += `<p>No products found in this category.</p>`;
  // }
  swiper();
};
const showData = () => {
  incrementshowData = +localStorage.getItem("showMoreAmount") || 10;
  startCountshowData = 0;
  endCountshowData = incrementshowData;

  if (incrementshowData > productsArr.length) {
    showMoreProductsbtn.style.display = "none";
  }

  productsContainer.innerHTML = "";
  if (productsArr && productsArr.length > 0) {
    showSpecsficonShowData(startCountshowData, endCountshowData);
    hiddeAllShowMoreBtn("all");
  }
};
showData();
showSpecsficonShowData(startCountshowData, endCountshowData);

showMoreProductsbtn.addEventListener("click", () => {
  startCountshowData += incrementshowData;
  endCountshowData += incrementshowData;

  if (endCountshowData > productsArr.length) {
    endCountshowData = productsArr.length;
    showMoreProductsbtn.style.display = "none";
  }

  if (startCountshowData >= productsArr.length) {
    startCountshowData =
      productsArr.length - (endCountshowData - startCountshowData);
    if (startCountshowData < 0) startCountshowData = 0;
  }

  showSpecsficonShowData(startCountshowData, endCountshowData);
});

// Get the data inside pram and set it into local storage
const getData = (productsArr) => {
  localStorage.setItem("Products", JSON.stringify(productsArr));
  // Why we call the show data funciton >>  when we add any thing to array this will show ok
  showData();
};

// Fetch te json file
const fetchData = () => {
  fetch("products.json")
    .then((res) => res.json())
    .then(async (result) => {
      productsArr = await result.products;
      for (let i = 0; i < productsArr.length; i++) {
        let products = productsArr[i];
        products.id = i + 1;
      }
      getData(productsArr);
    });
};

// Check in local storge About fetching data from admin page
if (localStorage.getItem("ShowDeletedProducts") === "showen") {
  fetchData();
  // Why we make that showed becuase evrey time we add product will fetch data again
  // specificly wich mean any producyt we add from admin will never append
  localStorage.setItem("ShowDeletedProducts", "showed");
}

// Start Cart
let cart = document.querySelector(".cart");
let cartData = document.createElement("div");
cartData.className = "cart-data";
document.body.appendChild(cartData);

function toggleViewBy() {
  let viewByElement = document.querySelector(".view-by");
  if (cartData.classList.contains("full-width")) {
    viewByElement.style.display = "none";
  } else {
    viewByElement.style.display = "flex";
  }
}

let chosinProducts = JSON.parse(localStorage.getItem("ChosinProducts")) || []; //if the local is not found it will be array
// if not it will == the local
const spesficProductNum = (products) => {
  let product = productsArr[products];
  localStorage.setItem("ChosinProducts", JSON.stringify(chosinProducts));
  updateCart();
  cartCout();
  let productExists = chosinProducts.some((item) => item.id === product.id);

  if (productExists) {
    console.log("Product is already in the cart:", chosinProducts);
  } else {
    console.log("This is the first time adding this product");
    chosinProducts.push(product);
    // Save updated cart to local storage
    localStorage.setItem("ChosinProducts", JSON.stringify(chosinProducts));
  }
};

document.querySelectorAll(".cart, .mobile-nav .cart").forEach((item) => {
  item.addEventListener("click", () => {
    cart.classList.toggle("active");
    cartData.classList.toggle("full-width");
    toggleViewBy();
    updateCart();
  });
});

const updateCart = () => {
  let allPrice = [];
  if (chosinProducts.length > 0) {
    let total;
    for (let i = 0; i < chosinProducts.length; i++) {
      allPrice.push(chosinProducts[i].price);
      total = allPrice
        .map((cur) => {
          return parseFloat(cur);
        })
        .reduce((acc, cur) => {
          return acc + cur;
        }, 0);
    }
    cartData.innerHTML = `
            <div class="cart-container">
                <div class="left">
                    <div class="free-shiping">
                        <h1>Get Free Shipping With <span>Ra7al + On Every Order Every Time</span></h1>
                        <p>Non members have free shipping for $150 or more</p>
                    </div>
                    <div class="cart-title">
                        <h1>Your Cart <span>(${chosinProducts.length
      })</span></h1>
                    </div>
                    <div class="cart-values"></div>
                </div>
                <div class="right">
                    <div class="summary">
                        <div class="summary-title">
                            <h1>SUMMARY</h1>
                        </div>
                        <div class="sub-total">
                            <div class="total-count">
                                <p>Sub Total </p>
                                <span>${chosinProducts.length}</span>
                            </div>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <div class="shipping-remind">
                            <p>Estimated shipping & handling standard <span>FREE</span> Arrives 25-30 Days</p>
                            <span>$0</span>
                        </div>
                        <div class="tax">
                            <p>Tax</p>
                            <span class="price">$-.-</span>
                        </div>
                        <div class="total">
                            <p>TOTAL</p>
                            <span class="total-price">$${total.toFixed(
        2
      )}</span>
                        </div>
                        <div class="check-out">
                            <button>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

    let cartValues = document.querySelector(".cart-container .cart-values");
    cartValues.innerHTML = "";
    for (let i = 0; i < chosinProducts.length; i++) {
      let singleproduct = chosinProducts[i];
      allPrice.push(chosinProducts[i].price);

      cartValues.innerHTML += `
                <div class="products-container view-medium">
                    <div class="product">
                        <div class="product-wrapper">
                            <div class="product-img">
                                <div class="img-container">
                                    <img src="${singleproduct.images[0]}" alt="">
                                </div>
                            </div>
                            <div class="product-details">
                                <div class="product-title">
                                    <h1 class="product-name">${singleproduct.name}</h1>
                                    <div class="product-price"><span>${singleproduct.price}$</span></div>
                                </div>

                                <div class="amount-holder">
                                        <span>Qty:</span>
                                        <div class="amount">
                                        <i class="uil-plus" onclick="productPalce(${i})"></i>
                                        <i class="uil-minus" onclick="productPalceMines(${i})"></i>
                                        <input type="number"  min="1" readonly id="">
                                        </div>
                                        <button class="add-quantitey" onclick="saveQuntites(${i})">Add</button>
                                    </div>
                                <div class="ad-to-card">
                                    <i class="uil-cart"></i>
                                    <button class="remove-from-card"  onclick="removeProduct(${i})">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }
    let amountInputs = document.querySelectorAll(
      ".cart-values .amount-holder input"
    );
    amountInputs.forEach((input) => (input.value = 1));

    let allQuantitesLocalStorage = JSON.parse(localStorage.getItem("quantity"));

    if (allQuantitesLocalStorage !== null) {
      for (let i = 0; i < allQuantitesLocalStorage.length; i++) {
        let theInput = amountInputs[allQuantitesLocalStorage[i].inedx];
        if (theInput) {
          theInput.value = allQuantitesLocalStorage[i].quantity;
        }
      }
    }

    let decreseAmount = document.querySelectorAll(
      ".cart-values .amount i.uil-minus"
    );

    decreseAmount.forEach((i) => {
      i.addEventListener("click", () => {
        let amountInput = i.parentElement.querySelector("input");
        if (amountInput.value > 1) {
          let amountInput = i.parentElement.querySelector("input");
          amountInput.value = +amountInput.value - 1;
        }
      });
    });

    let total1 = document.querySelector(".cart-data .sub-total > span");
    let total2 = document.querySelector(".cart-data .total .total-price");
    if (localStorage.getItem("totalPrice") !== null) {
      total1.innerHTML = localStorage.getItem("totalPrice");
      total2.innerHTML = localStorage.getItem("totalPrice");
    }

    /*

    discription is u need to add
          <div class="product-description">
                                    <p>${singleproduct.description}</p>
                                </div>
    */
  } else {
    cartData.innerHTML = `<div class="no-products">
        <img src="imgs/nproduct.png" alt="">
    </div>`;
  }
};
let allQuantities;
if (localStorage.getItem("quantity") !== null) {
  allQuantities = JSON.parse(localStorage.getItem("quantity"));
} else {
  allQuantities = [];
}

const productPalce = (index) => {
  let amountInput = document.querySelectorAll(".cart-values input")[index];
  let amountElement = document.querySelectorAll(".cart-values .amount")[index];

  if (amountInput.value < chosinProducts[index].quantity) {
    amountInput.value = +amountInput.value + 1;
    let total = document.querySelector(".cart-data .sub-total > span");
    let total2 = document.querySelector(".cart-data .total .total-price");

    total.innerHTML = `$${(
      parseFloat(total.innerText.replace("$", "")) + chosinProducts[index].price
    ).toFixed(2)}`;
    total2.innerHTML = `$${(
      parseFloat(total2.innerText.replace("$", "")) +
      chosinProducts[index].price
    ).toFixed(2)}`;
  } else {
    amountElement.classList.add("show-before");
    setTimeout(() => {
      amountElement.classList.remove("show-before");
    }, 2000);
    amountInput.value = chosinProducts[index].quantity;
  }
};

let saveQuntites = (index) => {
  let amountVlaueInput =
    document.querySelectorAll(".cart-values input")[index].value;
  const quantityObj = {
    inedx: index,
    quantity: amountVlaueInput,
  };
  let saveBtn = document.querySelectorAll("button.add-quantitey")[index];
  saveBtn.innerHTML = `Added (${amountVlaueInput})`;
  setTimeout(() => {
    saveBtn.innerHTML = `Add`;
  }, 2000);

  let prodctExist = allQuantities.some((obj) => obj.inedx === index);
  console.log(prodctExist);

  if (prodctExist) {
    // The specific item is found chang just the amount >>
    allQuantities[index].quantity = amountVlaueInput;
  } else {
    allQuantities.push(quantityObj);
  }
  localStorage.setItem("quantity", JSON.stringify(allQuantities));

  let total = document.querySelector(".cart-data .sub-total > span");
  localStorage.setItem("totalPrice", total.innerHTML);
};

const productPalceMines = (index) => {
  let amountVlaueInput =
    document.querySelectorAll(".cart-values input")[index].value;

  let total = document.querySelector(".cart-data .sub-total > span");
  let total2 = document.querySelector(".cart-data .total .total-price");
  if (amountVlaueInput > 1) {
    total.innerHTML = `$${(
      parseFloat(total.innerText.replace("$", "")) - chosinProducts[index].price
    ).toFixed(2)}`;
    total2.innerHTML = `$${(
      parseFloat(total2.innerText.replace("$", "")) -
      chosinProducts[index].price
    ).toFixed(2)}`;

    // Set The Amount To Local Storage
    // localStorage.setItem("totalPrice", total.innerHTML);
  }
};
const removeProduct = (index) => {
  chosinProducts.splice(index, 1);
  console.log(chosinProducts);
  localStorage.setItem("ChosinProducts", JSON.stringify(chosinProducts));
  console.log(index);
  updateCart();
  cartCout();
};
// Alern to user the product was added
const theProductAdded = (index) => {
  document.querySelectorAll(".cart , cart-data").forEach((ele) => {
    ele.classList.add("scale");
    ele.classList.add("gift-animation");
    setTimeout(() => {
      ele.classList.remove("gift-animation");
    }, 1000); // Remove the class after 1 second (duration of the animation)
  });
  let addedbtn = document.querySelectorAll("button.add-to-card")[index];
  addedbtn.style.color = "#fea300";
  addedbtn.textContent = "Added to ur Cart";
  setTimeout(() => {
    addedbtn.style.color = "white";
    addedbtn.innerHTML = `+ Add to cart    <i class="uil-shopping-cart"> </i>  `;
  }, 1500);
  cartCout();
};
updateCart();
// END Cart
if (localStorage.getItem("Products") !== null) {
  if (JSON.parse(localStorage.getItem("Products")).length === 0) {
    productsContainer.innerHTML = `<div class="no-products">
        <img src="imgs/nproduct.png" alt="">
    </div>`;
    stopInterval();
  }
}

const cartCout = () => {
  document.querySelectorAll("span.cart-count").forEach((span) => {
    if (localStorage.getItem("ChosinProducts") !== null) {
      span.innerHTML = JSON.parse(
        localStorage.getItem("ChosinProducts")
      ).length;
      span.style.display = "flex";
    } else {
      span.style.display = "none";
    }
  });
};
cartCout();
let arr = [
  (obj = {
    id: "",
    name: "Colorful Hoodie",
    description: "Make a statement with this trendy red and green hoodie.",
    price: 69.99,
    quantity: 75,
    category: "Sweatshirts",
    images: [
      "imgs/imgsProduct/red_and_green_hoodie_mockup.png",
      "imgs/imgsProduct/white_hoody_sweatshirt_mockup_template.png",
      "imgs/imgsProduct/purple-hoodi.png",
    ],
  }),
  (obj2 = {
    id: "",
    name: "Colorful Hoodie",
    description: "Make a statement with this trendy red and green hoodie.",
    price: 69.99,
    quantity: 75,
    category: "b",
    images: [
      "imgs/imgsProduct/red_and_green_hoodie_mockup.png",
      "imgs/imgsProduct/white_hoody_sweatshirt_mockup_template.png",
      "imgs/imgsProduct/purple-hoodi.png",
    ],
  }),
];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  if (arr[i].category === "Sweatshirts") {
    console.log(arr[i]);
  } else {
    console.log("");
  }
}
