let userEnteredInfo = {};
document.querySelector('#signInForm').addEventListener('submit' , (e)=> {

    userEnteredInfo = {

        email: e.target.emailInput.value,
        password: e.target.password.value,
        errorMassage:''

    }

    getDataFromStorage();

    e.preventDefault()

})

