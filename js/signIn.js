
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