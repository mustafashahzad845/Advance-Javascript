const loginHandler = ()=>{
    const users = localStorage.getItem("users")
    console.log(users , `users`);
    const allUsers = JSON.parse(users)
    console.log(allUsers);
    
const email = document.getElementById("email")
const password = document.getElementById("password")    

console.log(email.value);
console.log(password.value);

if(!email.value.trim() || !password.value.trim()){
alert("Please Enter your email or password")
return
}

if(allUsers === null){
alert("Invalid Email or password")
return
}

const find = allUsers.find((userObj)=>{
console.log(userObj);
if(userObj.email == email.value && userObj.password == password.value){
return true
}
})


if(!find){
        alert("Invalid Email or address")
return
}

alert("Login Successfully")
localStorage.setItem(`loginUser`, JSON.stringify(find))
location.href = "./dashboard.html"
// console.log(find , `find`);


// console.log(find);




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

