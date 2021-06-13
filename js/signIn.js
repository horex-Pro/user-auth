
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


function getDataFromStorage () {

    let dataInStorage = localStorage.getItem('User Data');

    let dataJsFormat = JSON.parse(dataInStorage);

    dataJsFormat.forEach((item , index) =>{

        if(userEnteredInfo.email == item.email){

            let checkEnteredEmail = true;
            let userId = item.userId;
            
            if(userEnteredInfo.password == item.password){

                userEnteredInfo.errorMassage = 'login successful'

            }
            

        }
        else{

            userEnteredInfo.errorMassage= 'invalid'

        }

        showResultForUser();
        


    })

}


function showResultForUser (){

    if(userEnteredInfo.errorMassage == 'login successful' ){

        document.querySelector('#loggedInBoxContainer').style.display = 'flex'

    }
    else{

        document.querySelector('#errorBoxContainer').style.display = 'flex'

    }

}
