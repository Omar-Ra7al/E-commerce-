let bar = document.querySelector(".bars"),
  nav = document.querySelector(".landing-page .links");
login = document.querySelector("nav .login");

// Navbar Toggle to open and close in meduim screen and less
bar.addEventListener("click", () => {
  nav.classList.toggle("active");
  bar.classList.toggle("uil-bars");
  bar.classList.toggle("uil-times");
  login.classList.toggle("active");
  login.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active");
  });
});

document.body.addEventListener("click", (e) => {
  nav.querySelectorAll(".links.active li").forEach((li) => {
    if (e.target !== bar && e.target !== nav && e.target !== li) {
      console.log("yes");
      nav.classList.remove("active");
      bar.classList.add("uil-bars");
      bar.classList.remove("uil-times");
      login.classList.remove("active");
      login.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("active");
      });
    }
  });
});

// let holder = document.querySelector(".box-swiper .holder");
// let swiperRight = document.querySelector(".box-swiper i.uil-arrow-right");
// let SipweLeft = document.querySelector(".box-swiper i.uil-arrow-left");

// let allImgs = holder.querySelectorAll("img");
// let stopSlider = (allImgs.length - 1) * -250;

// let stepRight = 0;

// swiperRight.addEventListener("click", () => {
//   if (stepRight === stopSlider) {
//     return;
//   }
//   stepRight += -250;
//   holder.style.marginLeft = `${stepRight}px`;
// });

// SipweLeft.addEventListener("click", () => {
//   console.log(stepRight);
//   if (stepRight === 0) {
//     return;
//   }
//   stepRight += 250;
//   holder.style.marginLeft = `${stepRight}px`;
// });

// let interval = setInterval(() => {
//   if (stepRight === stopSlider) {
//     stepRight = 250;
//   }
//   stepRight += -250;
//   holder.style.marginLeft = `${stepRight}px`;
// }, 3000);

// clearInterval(interval);
// clearInterval(interval);

// let arr = [1, 2, 1, 2, 12, 1, 1, 5, 4, 6];
// let value = [];
// // console.log(new Set(arr));
// for (let i = 0; i < arr.length; i++) {
//   if (arr[4] === arr[i]) {
//     // console.log(arr[i].length);
//     // if (arr[i].length >= 2) {
//       // value.push(arr[i]);
//     // }
//   }
// }
// console.log(value);
// Sample array of product IDs
const productIDs = ["001", "002", "001", "003", "004", "001", "002"];
let prodctOfproducts = [
  {
    id: "",
    name: "Denim Jeans",
    description:
      "Classic and durable, these denim jeans are a wardrobe staple.",
    price: 59.99,
    quantity: 25,
    category: "pants",
    images: [
      "imgs/imgsProduct/jogger-pants4.png",
      "imgs/imgsProduct/jogger-pants5.png",
      "imgs/imgsProduct/jogger-pants5.png",
    ],
  },
  {
    id: "shoe-5",
    name: "Sandals",
    description: "Light and breathable sandals for comfortable summer wear.",
    price: 29.99,
    quantity: 40,
    category: "shoes",
    images: [
      "imgs/imgsProduct/shose-6.png",
      "imgs/imgsProduct/shose-5.png",
      "imgs/imgsProduct/shose-3.png",
    ],
  },
  {
    id: "",
    name: "Colorful Hoodie",
    description: "Make a statement with this trendy red and green hoodie.",
    price: 69.99,
    quantity: 75,
    category: "Sweatshirts",
    images: [
      "imgs/imgsProduct/purple-hoodi.png",
      "imgs/imgsProduct/red_and_green_hoodie_mockup.png",
      "imgs/imgsProduct/white_hoody_sweatshirt_mockup_template.png",
    ],
  },
  {
    id: "",
    name: "Athletic Pants",
    description:
      "Designed for movement, these athletic pants are ideal for active days.",
    price: 37.99,
    quantity: 45,
    category: "pants",
    images: [
      "imgs/imgsProduct/jogger-pants2.png",
      "imgs/imgsProduct/jogger-pants3.png",
      "imgs/imgsProduct/jogger-pants1.png",
    ],
  },
];
