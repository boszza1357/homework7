const loginForm = document.querySelector(".login-form");
const validateInputt = (inputObj) => {

    console.log(inputObj);
    return inputObj.username.trim() !== "" && inputObj.password.trim() !== "";
};

const redirecttoexampIecom = () => {
    window.location.href = "https://www.example.com"
}



const loginSuccesssful = () => {
    alert("login successful");
    redirecttoexampIecom();
}

const hdlLogin = (e) => {
  e.preventDefault();
  console.log(loginForm.elements);
  let allInput = loginForm.elements;
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;

  }
  validateInput(inputObj);
  if(validateInputt(inputObj)){
    loginSuccesssful();
  }
}
loginForm.addEventListener("submit", hdlLogin);

const validateInput = (inputObj) => {
    const { username, password } = inputObj;
    validateInputt(inputObj);
  
    if (username.trim() === "" || password.trim() === "") {
      document.getElementById("username").style.borderColor = "red";
      document.getElementById("password").style.borderColor = "red";
      return; 
    }


const checkusername  = username.trim();
    if(checkusername.length <= 3 ){
        document.getElementById("username").style.borderColer = "red";
        return;
    }
    
const checkpassword = password.trim();
    if(checkpassword.length < 4 || !/[a-zA-Z]/.test(checkpassword) ){
        document.getElementById("password").style.borderColor = "red";
        return;
    }


    

    document.getElementById("username").style.borderColor = "";
    document.getElementById("password").style.borderColor = "";

   

};





