const signInHandler = ()=>{
    console.log("signInHandler");
    let email = document.getElementById("email")
    let password = document.getElementById("password")
 
    
    console.log(email.value);
    console.log(password.value);
    

let userObj = {
    email : email.value,
    password : password.value
}

if(!userObj.email || !userObj.password){
alert("Please fill the input fields")
return
}

console.log(`userObj` , userObj);

const users = localStorage.getItem("users")

if(users == null){
//first user
console.log("firstUser");
localStorage.setItem("users", JSON.stringify([userObj]))
alert("Signup Successfully")
location.href = `./index.html`

}else{
    console.log(`Users exist krte hain`);
// console.log(users);
const userData = JSON.parse(users)
console.log(userData, `userData`);


const findEmail = userData.find((value)=>{
console.log(value , `value`);

if(value.email === email.value){
return true
}

})


if(findEmail){
alert("Email Already exist , make sure you email is unique")
return
}


userData.push(userObj)

console.log(userData , `userData`);

localStorage.setItem("users", JSON.stringify(userData))

alert("Signup Successfully")
email.value = ""
password.value = ""
location.href = "./index.html"
}

// localStorage.setItem("email_Password", JSON.stringify(userData))




// let userDataArr;
// if(localStorage.length == 0){
//      userDataArr = JSON.stringify([userData])
// localStorage.setItem("email_Password", userDataArr)
// }else{
// userDataArr.push(JSON.stringify(userData))
// }

}




const passwordTypeManage = ()=>{
    console.log(`passwordTypeManage`);
    const eyeImage = document.getElementById("eyeImage")
    const password = document.getElementById("password")


    console.log(password.value , password.type);
    console.log(eyeImage.src);
    
    if(password.type == "password"){
eyeImage.src = `./Images/eye-open.webp`
password.type = `text`
    }else{
        eyeImage.src = `./Images/eye-close.webp`
        password.type = `password`
    }
}

// console.log(localStorage.length);
