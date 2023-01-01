
const SetDataInObjectFromLocalStorage = (User) => {
    localStorage.setItem('name', User.name);

   console.log(User);

}

const getDataInObjectFromLocalStorage = () => {
    const name = localStorage.getItem('Name');
    const getedAccountNumber = localStorage.getItem('account Number');
    const getedCreatedPassword = localStorage.getItem('created password');
    const getedEmail = localStorage.getItem('Email');
    const getedAccountBalance = localStorage.getItem('Account balance');
    const geteLoginStatus= localStorage.getItem('Login');
    const getedAccountType = localStorage.getItem('Account Type');
    const getedCountry = localStorage.getItem('Country');
    
    return {
        name: name,
        accountNumber: getedAccountNumber,
        password: getedCreatedPassword,
        email: getedEmail,
        accountBalance: getedAccountBalance,
        loginStatus: geteLoginStatus,
        accountType: getedAccountType,
        country: getedCountry

    }
 
 }

export { SetDataInObjectFromLocalStorage, getDataInObjectFromLocalStorage };