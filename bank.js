import { SetDataInObjectFromLocalStorage } from "./More.js";

//form slider code
const InnerContainer = document.getElementById("inner-container");
const SignupSliderBtn = document.getElementById("signup");
const LoginSliderBtn = document.getElementById("login");

const setupFormSlider = () => {
  SignupSliderBtn.addEventListener('click', () => {
    InnerContainer.style.marginLeft = "0px";
  });
  LoginSliderBtn.addEventListener('click', () => {
    InnerContainer.style.marginLeft = "-350px";
  });
}
setupFormSlider();

// save signup form data to localstorage and click event on submit button
const Name = document.getElementById("name");
const addedAccountNumber = document.getElementById("ac-number");
const Email = document.getElementById("email");
const CreatedPassword = document.getElementById("cr-pass");
const SubmiteBtn = document.getElementById("submit");
let accountBalance = 0;
let userCountry = "enter your country";
const loginStatus = true ;

const elementsToSaveAndReset = [Name, addedAccountNumber, Email, CreatedPassword];

const saveValueInLocalStorageAndReset = (inputElement) => {
  
  localStorage.setItem(inputElement.name, inputElement.value);
  inputElement.value = '';
}

SubmiteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  elementsToSaveAndReset.forEach(saveValueInLocalStorageAndReset);

  // accountNumberError.innerText = CreatedPassword < 8 ? "Password must be more than 8 digit or char." : "" ;
});

// getting login form data from localstorage and click event on login button 
const AccountNumber = document.getElementById("accountNumber");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const accountNumberError = document.getElementById("acError");
const passwordError = document.getElementById("passwordError");


const gettingDataFromLocalStorage = (getDatas) => {
  const getedData = localStorage.getItem(`${getDatas.name}`);
  return getedData;
} 

const recevingName = gettingDataFromLocalStorage(Name);
const recevingPassword = gettingDataFromLocalStorage(CreatedPassword);
const recevingAccountNumber = gettingDataFromLocalStorage(addedAccountNumber);
const recevingEmail = gettingDataFromLocalStorage(Email);
const recevingAccountBalance = gettingDataFromLocalStorage(accountBalance);
const recevingUserCountry = localStorage.getItem(userCountry);
const recevingLoginStatus = localStorage.getItem(loginStatus);

const formValidation = () => {
  
  let isFormValid = true;

  if(AccountNumber.value == "" ){
    accountNumberError.innerText = "enter your Account number";
    isFormValid = false;
  }
  else if ( AccountNumber.value !== recevingAccountNumber ){
    accountNumberError.innerText = "incorrect Account Number";
    isFormValid = false;
  }
  else{
    accountNumberError.innerText = "";
  }
  if(password.value == "" ){
    passwordError.innerText = "enter your Password";
    isFormValid = false;
  }
  else if ( password.value !== recevingPassword ){
    passwordError.innerText = "incorrect Password";
    isFormValid = false;
    console.log(recevingPassword);
  }
  else if (password.value.length < 8 ){
    passwordError.innerText = "Password must be more than 8 digit or char.";
    isFormValid = false;
  }else{
    passwordError.innerText = "";
  }
 
  return isFormValid;
}


loginBtn.addEventListener('click', (e) => {
  
 elementsToSaveAndReset.forEach(gettingDataFromLocalStorage);
  
  if (formValidation()) {
    AccountNumber.value = "";
    password.value = "";
    
    location.href = "/App.html";

    SetDataInObjectFromLocalStorage(
       {
        Name : `${recevingName}`,
        AccountNumber : `${recevingAccountNumber}`,
        Password : `${recevingPassword}`,
        Email : `${recevingEmail}`,
        LoginStatus : `${recevingLoginStatus}`,
        AccountBalance : `${recevingAccountBalance} + "$" ` ,
        AccountType : "Current",
        Country: `${recevingUserCountry}`
      }
    );

    localStorage.setItem("Login","true");
  }
});






