import { getDataInObjectFromLocalStorage } from "./More.js";


const userName = document.getElementById("name");
const country = document.getElementById("country");
const balance = document.getElementById("balance");
const accountType = document.getElementById("balance");

window.addEventListener('load',() => {
  
    console.log("refreshed");

    const obj = getDataInObjectFromLocalStorage();
    userName.innerText = obj.name;
    country.innerText = obj.country;
    balance.innerText = obj.accountBalance;
    accountType.innerText = obj.accountType;
    console.log(obj.accountBalance);

}); 



