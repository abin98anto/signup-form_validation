document.querySelector('.create').onclick = function() {
    let password  = document.getElementById("password").value;
    let errorMsg = document.getElementById("password-error");
    let password2  = document.getElementById("password2").value;
    if(password===password2){
        console.log("no errors found");
        return true;
    }else{
        errorMsg.innerHTML="*the password dosen't match";
        return false;
    }
}
