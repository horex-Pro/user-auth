
let userInfo = {};
let usersList = [];
let letters = /[A-Z]/g;
let numbers = /[1-9]/g;

let signUpform = document.querySelector('#signUpform');

signUpform.addEventListener('submit' , (e)=> {

    userInfo = {

        email : e.target.emailAddressInput.value , 
        password : e.target.passwordInput.value , 
        confirmPassword : e.target.passwordConfirmInput.value,
        errorMassage : '',
        validateStatus : false,
        userId: Math.floor ( ( Math.random() ) * 10 )
    }

    validation(userInfo);

    if(userInfo.validateStatus){
        
        document.querySelector('#successfulBoxContainer').style.display = 'flex'; 
        usersList.push(userInfo)

        for (let i = 0; i <= usersList.length; i++) {
            
            let userInfoSaveMode = JSON.stringify(usersList);
            localStorage.setItem('User Data' , userInfoSaveMode);
            
            addMultyUser();
            
        }


    }
    else{

        document.querySelector('#errorBoxContainer').style.display = 'flex'
        document.querySelector('#errorBoxTile').innerHTML = userInfo.errorMassage;

    }

    e.preventDefault();

})



