const signInHandler = ()=>{
    console.log("loginHandler");
    let email = document.getElementById("email")
    let password = document.getElementById("password")
 
    
    console.log(email.value);
    console.log(password.value);
    

let userData = {
    email : email.value,
    password : password.value
}

console.log(`userData` , userData);

// localStorage.setItem("email_Password", JSON.stringify(userData))
let userDataArr;
if(localStorage.length == 0){
     userDataArr = JSON.stringify([userData])
localStorage.setItem("email_Password", userDataArr)
}else{
userDataArr.push(JSON.stringify(userData))
}

}



// console.log(localStorage.length);
