const closeOverlay = document.querySelector(
    ".over-lay .login-form i.uil-times"
  ),
  overLay = document.querySelector(".over-lay"),
  getSarted = document.querySelector(".login .get-started"),
  signIn = document.querySelector(".login .sign-in"),
  signUp = document.querySelector(".over-lay button#get-started");

// closeOverlay.addEventListener("click", () => {
//   overLay.style.display = "none";
// });

//Start Ready  Functions
const closeOverlayicon = (icon) => {
  icon.addEventListener("click", () => {
    overLay.style.display = "none";
    window.location.reload();
  });
};
closeOverlayicon(closeOverlay);
// Noitic for Empty Feilds
const checkEmpttyInputs = function () {
  let allFeilds = overLay.querySelectorAll("input");
  allFeilds.forEach((input) => {
    if (input.value.trim() === "") {
      let titleOfgetstarted = overLay.querySelector(".login-form h3");
      setTimeout(() => {
        titleOfgetstarted.innerHTML = "Get Started";
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
overLay.querySelector("button").addEventListener("click", () => {
  checkEmpttyInputs();
});
const addUserNamAndPassToLocalStorage = () => {
  const signUp = document.querySelector("button#get-started");
  signUp.addEventListener("click", () => {
    let userName =
        overLay.querySelector(".fristname").value +
        overLay.querySelector(".lastname").value,
      userPassowrd = overLay.querySelector(".repassuser").value,
      fristPass = overLay.querySelector(".passuser"),
      rePass = overLay.querySelector(".repassuser");

    // Set The Values To Local Storage If the inputs is not empty
    if (fristPass.value === rePass.value && fristPass.value.trim() !== "") {
      localStorage.setItem("UserName", userName);
      localStorage.setItem("UserPass", userPassowrd);
      localStorage.setItem(
        "adminName",
        overLay.querySelector(".fristname").value
      );
      localStorage.setItem("AdminEmail", "");
      localStorage.setItem("AdminPhoneNumber", "");
    }
  });
};
//End Ready  Functions

// Get Started Form
let getStartedHTML = `
 <section class="login-form get-started">
          <i class="uil-times" title="Mian Page"></i>
          <div class="logo-form">
              <i class="uil-rocket"></i>
              <h3>Get started</h3>
          </div>
          <div class="input-box user get-started">
          <i class="uil-user"></i>
          <input class="fristname" type="text" placeholder="First Name">
              <input class="lastname" type="text" placeholder="Last Name">
          </div>
          <div class="input-box pass get-started">
              <i class="uil-lock"></i>
              <input class="passuser" type="password" placeholder="Password">
              <input class="repassuser" type="password" placeholder="Re Password">
          </div>
          <button class="login-btn" id="get-started">Sign Up</button>
      </section>`;

getSarted.addEventListener("click", () => {
  overLay.style.display = "flex";
  overLay.innerHTML = getStartedHTML;
  addUserNamAndPassToLocalStorage();
  const closeOverlay = document.querySelector(
    ".over-lay .login-form i.uil-times"
  );
  closeOverlayicon(closeOverlay);
  // Check if There Any value in the local Storage to Check user Lrady have accont or not
  if (
    localStorage.getItem("UserName") !== null &&
    localStorage.getItem("UserPass") !== null
  ) {
    // The Get Started form will cahnge to this if User have account
    overLay.innerHTML = `
    <section class="login-form u-have-acc">
          <i class="uil-times" title="Mian Page"></i>
           <div class="logo-form">
              <i class="uil-user"></i>
              <h3>Welcome ${localStorage.UserName}</h3>
          </div>
          <p>U already have account if u creat new acc this current acc will <span>remove</span></p>
          <button onclick="gotoLogInClick()">Go to login page</button>
          <button onclick="gotoGetSartedClick()">No Creat New Acc</button>
          <button onclick="removeAccount()">Remove Account</button>
    </section>`;
    const closeOverlay = document.querySelector(
      ".over-lay .login-form i.uil-times"
    );
    closeOverlayicon(closeOverlay);
  } else {
    const signUp = document.querySelector(".over-lay button#get-started");
    // This Function to add username and pass to local storage
    addUserNamAndPassToLocalStorage();
    const closeOverlay = document.querySelector(
      ".over-lay .login-form i.uil-times"
    );
    closeOverlayicon(closeOverlay);
    signUp.addEventListener("click", () => {
      checkEmpttyInputs();
      const closeOverlay = document.querySelector(
        ".over-lay .login-form i.uil-times"
      );
      closeOverlayicon(closeOverlay);
      if (
        overLay.querySelectorAll("input")[0].value !== "" &&
        overLay.querySelectorAll("input")[1].value !== "" &&
        overLay.querySelectorAll("input")[2].value !== "" &&
        overLay.querySelectorAll("input")[3].value !== ""
      ) {
        const fristPass = overLay.querySelector(".passuser"),
          rePass = overLay.querySelector(".repassuser");
        if (fristPass.value === rePass.value && fristPass.value.trim() !== "") {
          localStorage.setItem("logedIn", "false");
          overLay.innerHTML = `
          <section class="login-form succes-get-started">
                <i class="uil-times" title="Mian Page"></i>
                <div class="logo-form">
                        <i class="uil-check-circle"></i>
                    <h3>CREATED ACC SUCCESSFULY</h3>
                </div>
                <div class="user succes-get-started">
                  <div>
                  <i class="uil-user"></i>
                  <p>Your Acoount : <span>${localStorage.UserName}</span></p>
                  </div>
                <i class="uil-copy"></i>
                </div>
                <div class="pass succes-get-started">
                    <div>
                    <i class="uil-lock"></i>
                    <p>Your Passowrd : <span>${localStorage.UserPass}</span></p>
                    </div>
                  <i class="uil-copy"></i>
                </div>
            </section>`;
          const closeOverlay = document.querySelector(
            ".over-lay .login-form i.uil-times"
          );
          closeOverlayicon(closeOverlay);
        } else {
          let titleOfgetstarted = overLay.querySelector(".login-form h3");
          setTimeout(() => {
            titleOfgetstarted.innerHTML = "Get Started";
            titleOfgetstarted.style.color = "white";
          }, 1000);
          titleOfgetstarted.innerHTML = "Password is not the same";
          titleOfgetstarted.style.color = "red";
        }
        const closeOverlay = document.querySelector(
          ".over-lay .login-form i.uil-times"
        );
        closeOverlayicon(closeOverlay);
      }
    });
  }
});

const removeAccount = () => {
  localStorage.clear();
  overLay.innerHTML = `
      <section class="login-form u-have-acc">
          <i class="uil-times" title="Mian Page"></i>
           <div class="logo-form">
              <i class="uil-user-times"></i>
              <h3>The ACCOUNT removed</h3>
          </div>
    </section>`;
  const closeOverlay = document.querySelector(
    ".over-lay .login-form i.uil-times"
  );
  closeOverlayicon(closeOverlay);
};

function gotoGetSartedClick() {
  // If user need to make new Account The get Started from will be change to the normal
  overLay.innerHTML = getStartedHTML;
  const closeOverlay = document.querySelector(
    ".over-lay .login-form i.uil-times"
  );
  closeOverlayicon(closeOverlay);
  // We add Settime out to avoid any error for getting the elemnt by query selector
  //   setTimeout(() => {
  const signUp = document.querySelector(".over-lay button#get-started");
  // This Function to add username and pass to local storage
  addUserNamAndPassToLocalStorage();
  signUp.addEventListener("click", () => {
    checkEmpttyInputs();
    if (
      (overLay.querySelectorAll("input")[0].value !== "" &&
        overLay.querySelectorAll("input")[1].value !== "") ||
      (overLay.querySelectorAll("input")[2].value !== "" &&
        overLay.querySelectorAll("input")[3].value !== "")
    ) {
      // REMOVE OLD ADMIN IMAGE
      localStorage.removeItem("AdminImg");
      const fristPass = overLay.querySelector(".passuser"),
        rePass = overLay.querySelector(".repassuser");
      if (fristPass.value === rePass.value && fristPass.value.trim() !== "") {
        localStorage.setItem("logedIn", "false");
        overLay.innerHTML = `
          <section class="login-form succes-get-started">
                <i class="uil-times" title="Mian Page"></i>
                <div class="logo-form">
                        <i class="uil-check-circle"></i>
                    <h3>CREATED ACC SUCCESSFULY</h3>
                </div>
                <div class="user succes-get-started">
                  <div>
                  <i class="uil-user"></i>
                  <p>Your Acoount : <span>${localStorage.UserName}</span></p>
                  </div>
                <i class="uil-copy"></i>
                </div>
                <div class="pass succes-get-started">
                    <div>
                    <i class="uil-lock"></i>
                    <p>Your Passowrd : <span>${localStorage.UserPass}</span></p>
                    </div>
                  <i class="uil-copy"></i>
                </div>
            </section>`;
        const closeOverlay = document.querySelector(
          ".over-lay .login-form i.uil-times"
        );
        closeOverlayicon(closeOverlay);
      } else {
        let titleOfgetstarted = overLay.querySelector(".login-form h3");
        setTimeout(() => {
          titleOfgetstarted.innerHTML = "Get Started";
          titleOfgetstarted.style.color = "white";
        }, 1000);
        titleOfgetstarted.innerHTML = "Password is not the same";
        titleOfgetstarted.style.color = "red";
      }
    }
  });
  //   }, 2000);
}
// End Get Started

// Start All about Sign IN
//Start change the text And but the img of admin
setInterval(() => {
  localStorage.setItem("logedIn", "false");
  if (localStorage.logedIn === "true") {
    signIn.innerHTML = "Account";
    let adminImg = document.createElement("img");
    adminImg.src = localStorage.getItem("AdminImg");

    signIn.append(adminImg);
  } else {
    signIn.innerHTML = "Login";
    let adminImg = document.createElement("img");
    adminImg.src = localStorage.getItem("AdminImg");
    adminImg.remove();
  }
}, 36000000);

if (localStorage.logedIn === "true") {
  signIn.innerHTML = "Account";
  let adminImg = document.createElement("img");
  let adminFristletter = document.createElement("div");
  // adminImg.src = localStorage.getItem("AdminImg");
  if (localStorage.getItem("AdminImg") !== null) {
    signIn.append(adminImg);
    adminImg.src = localStorage.getItem("AdminImg");
  } else {
    adminFristletter.innerHTML = localStorage.getItem("adminName")[0];
    signIn.append(adminFristletter);
  }
} else {
  signIn.innerHTML = "Login";
  // adminImg.remove();
}
//End change the text And but the img of admin

const checkSigninSuccesInLocal = () => {
  if (
    localStorage.getItem("UserName") === null &&
    localStorage.getItem("UserPass") === null
  ) {
    signUpLoginBtn.addEventListener("click", () => {
      setTimeout(() => {
        overLay.querySelector("h3").textContent =
          "Creat Account At frist To login";
      }, 1000);
    });
    overLay.querySelector("h3").textContent = "Creat Account At frist To login";
  }
  if (localStorage.logedIn === "true") {
    overLay.innerHTML = `
     <section class="login-form loged-in">
                  <i class="uil-times" title="Mian Page"></i>
            <div class="logo-form">
                <i class="uil-check"></i>
                <h3>You are LOGed IN</h3>
            </div>
           <h4><span>${localStorage.adminName}</span></h4>
            <a href="/admin.html" target="_blank ><button class="login-btn">Go To Admin Page</button></a>
            <button class="login-btn sign-out">Sign Out</button>
        </section>`;
    const closeOverlay = document.querySelector(
      ".over-lay .login-form i.uil-times"
    );
    closeOverlayicon(closeOverlay);
    // Sign Out  On Click
    let signOut = overLay.querySelector(".sign-out");
    signOut.addEventListener("click", () => {
      localStorage.setItem("logedIn", "flase");
      setTimeout(() => {
        closeOverlay.click();
        signIn.innerHTML = "Sign in";
        let adminImg = document.createElement("img");
        adminImg.src = localStorage.getItem("AdminImg");

        adminImg.remove();
        window.location.reload();
      }, 1000);
      overLay.innerHTML = `
     <section class="login-form sign-out">
        <i class="uil-times" title="Mian Page"></i>
            <div class="logo-form">
               <i class="uil-signout"></i>
                <h3>Signed Out</h3>
            </div>
           <h4>GoodBye <span> ${localStorage.adminName}</span></h4>
        </section>`;
      const closeOverlay = document.querySelector(
        ".over-lay .login-form i.uil-times"
      );
      closeOverlayicon(closeOverlay);
    });
  }
};

signIn.addEventListener("click", () => {
  overLay.style.display = "flex";
  checkSigninSuccesInLocal();
});

// Change the ovelay inner htlm if the user and pass ===  user and pass in local storage
const loginSuccesfully = () => {
  const username = document.querySelector(".login-form .input-box.user input"),
    password = document.querySelector(".login-form .input-box.pass input");
  if (
    localStorage.UserName === username.value &&
    localStorage.UserPass === password.value
  ) {
    overLay.innerHTML = `
     <section class="login-form loged-in">
                     <i class="uil-times" title="Mian Page"></i>
            <div class="logo-form">
                <i class="uil-check"></i>
                <h3>LOG IN SUCCSESSFUL</h3>
            </div>
           
           <h4>Welcome Again <span>${localStorage.adminName}</span></h4>
            <a href="/admin.html" target="_blank ><button class="login-btn">Go To Admin Page</button></a>
        </section>`;
    const closeOverlay = document.querySelector(
      ".over-lay .login-form i.uil-times"
    );
    closeOverlayicon(closeOverlay);
  }
};

const signUpLoginBtn = document.querySelector(".login-form .login-btn");
// Set the user login >> true
signUpLoginBtn.addEventListener("click", () => {
  const username = document.querySelector(".login-form .input-box.user input"),
    password = document.querySelector(".login-form .input-box.pass input");
  if (
    localStorage.UserName === username.value &&
    localStorage.UserPass === password.value
  ) {
    // Set this item in local storage and we will se e if user loged in after cheking the user name and passowrd is right
    // then make the value == true wich means he is log in then make what u need to make if user loged in
    localStorage.setItem("logedIn", "true");
    loginSuccesfully();
  } else {
    let titleOFlogofrom = overLay.querySelector(".logo-form h3");
    titleOFlogofrom.innerHTML = "Uncorrect Email Or Passowrd";
    titleOFlogofrom.style.color = "red";
    setTimeout(() => {
      titleOFlogofrom.innerHTML = "Log in";
      titleOFlogofrom.style.color = "white";
    }, 1000);
  }
});

function gotoLogInClick() {
  overLay.innerHTML = `
     <section class="login-form ">
                     <i class="uil-times" title="Mian Page"></i>
            <div class="logo-form">
                <i class="uil-shopping-cart"></i>
                <h3>Log in</h3>
            </div>
            <div class="input-box user">
                <i class="uil-user"></i>
                <input type="text" placeholder="ex@mail.com">
            </div>
            <div class="input-box pass">
                <i class="uil-lock"></i>
                <input type="password" placeholder="password">
            </div>
            <p>Forget Password</p>
            <button class="login-btn">Login</button>
        </section>`;
  const closeOverlay = document.querySelector(
    ".over-lay .login-form i.uil-times"
  );
  closeOverlayicon(closeOverlay);
  const signUpLoginBtn = document.querySelector(".login-form .login-btn");
  signUpLoginBtn.addEventListener("click", () => {
    loginSuccesfully();
  });
  checkSigninSuccesInLocal();
}

// Forget Password
let forgetPassword = overLay.querySelector(".login-form .forget-password p");
forgetPassword.addEventListener("click", () => {
  overLay.innerHTML = ` 
              <section class="login-form forget">
                <i class="uil-times" title="Mian Page"></i>
                <div class="logo-form">
                  <i class="uil-key-skeleton"></i>
                  <h3>Forget Password</h3>
                </div>
                <div class="mail">
                  <i class="uil-envelope-search"></i>
                  <input type="email" placeholder="YourMail@mail.com" />
                </div>
                <div class="phone-number">
                    <i class="uil-phone"></i>
                        <input type="number" placeholder="123456789" />
                </div>
                <div>
                    <button>Check</button>
                </div>
                </section>
  `;
  const closeOverlay = document.querySelector(
    ".over-lay .login-form i.uil-times"
  );
  closeOverlayicon(closeOverlay);
  let inputMail = document.querySelector(".login-form.forget .mail input");
  let inputPhone = document.querySelector(
    ".login-form.forget .phone-number input"
  );
  let checkBtn = document.querySelector(".login-form.forget button");
  checkBtn.addEventListener("click", () => {
    checkEmpttyInputs();
    if (
      localStorage.getItem("AdminEmail") !== "" &&
      localStorage.getItem("AdminPhoneNumber") !== ""
    ) {
      if (
        localStorage.getItem("AdminEmail") === inputMail.value &&
        localStorage.getItem("AdminPhoneNumber") === inputPhone.value
      ) {
        overLay.innerHTML = ` 
              <section class="login-form forget">
                <i class="uil-times" title="Mian Page"></i>
                <div class="logo-form">
                  <i class="uil-key-skeleton"></i>
                  <h3>Add New Password</h3>
                </div>
            
              <div class="input-box pass get-started new-pass">
              <i class="uil-lock"></i>
              <input class="passuser" type="password" placeholder="Password">
              <input class="repassuser" type="password" placeholder="Re Password">
              </div>

              <div>
                  <button>Submit</button> 
              </div>
                </section>
  `;
        const closeOverlay = document.querySelector(
          ".over-lay .login-form i.uil-times"
        );
        closeOverlayicon(closeOverlay);
        let newpass = document.querySelector(".input-box.new-pass .passuser");
        let submitNewPass = document.querySelector(".login-form.forget button");
        let renewpass = document.querySelector(
          ".input-box.new-pass .repassuser"
        );
        if (newpass.value === renewpass.value) {
          submitNewPass.addEventListener("click", () => {
            localStorage.setItem("UserPass", renewpass.value);
            overLay.innerHTML = ` 
              <section class="login-form forget">
                <i class="uil-times" title="Mian Page"></i>
                <div class="logo-form">
                  <i class="uil-key-skeleton"></i>
                  <h3>The New Password Added Succesfully</h3>
                </div>
                </section>`;
            const closeOverlay = document.querySelector(
              ".over-lay .login-form i.uil-times"
            );
            closeOverlayicon(closeOverlay);
          });
        }
      } else {
        let titleCheck = document.querySelector(".login-form.forget h3");
        titleCheck.innerHTML = "un Correct Email Or phone number";
        titleCheck.style.color = "red";
        setTimeout(() => {
          titleCheck.innerHTML = "Forget Passowrd";
          titleCheck.style.color = "#fff";
        }, 1000);
      }
    } else {
      let titleCheck = document.querySelector(".login-form.forget h3");
      setTimeout(() => {
        titleCheck.innerHTML = "Forget Passowrd";
      }, 1000);
    }
  });
});
// Forget Password

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
let fetchFristVist = document.querySelectorAll(".product-parent .fetch-data");
fetchFristVist.forEach((fetch) => {
  let link = document.querySelector(".product-parent a");
  fetch.addEventListener("click", () => {
    localStorage.setItem("ShowDeletedProducts", "showen");
    localStorage.setItem("diplayafterFetch", "none");
    link.click();
  });
  fetch.style.display = localStorage.getItem("diplayafterFetch");
});
