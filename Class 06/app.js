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

const find = allUsers.find((userObj)=>{
console.log(userObj);
if(userObj.email == email.value && userObj.password == password.value){
return true
}
})


if(find){
alert("Login Successfully")

}else{
    alert("Invalid Email or address")
}

console.log(find , `find`);






}