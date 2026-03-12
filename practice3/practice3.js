

const mainForm = document.getElementById("mainForm");


function verifyPasswords(event){
    event.preventDefault();

    const password = document.getElementById("password").value;
    const passwordVerify = document.getElementById("passwordVerify").value;
    console.log(password, passwordVerify);
    const alert = document.getElementById("alertNotification");
    if(password.length < 8){
        alert.textContent = "ERROR: You have entered a password that is less than 8 characters in length.";
    }
    else if(password != passwordVerify){
        alert.textContent = "ERROR: Your passwords do not match.";
    } else{
        alert.textContent = "You have entered a valid password and confirmed it.";       
    }
}

mainForm.addEventListener("submit", verifyPasswords);