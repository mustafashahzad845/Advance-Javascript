// console.log("Start");

// setTimeout(()=>{
//     for(var i = 0 ; i < 1000 ; i++){
// console.log(i);

//     }
// } , 3000)

// console.log("End");


// console.log("Start");
// ("API Calling")
// console.log("End");




// const myPromise =  new  Promise((resolve , reject)=>{
// const isLogin = false // api Calling

// if(isLogin){
// resolve("Login Successfully")
// }else{
//     reject("Invalid Email or Password")
// }
    
// })

// .then((response)=>{
// console.log(response , `response`);

// })
// .catch(
//     (error)=>{
// console.log(error , `error`);

//     }
// )


// console.log(myPromise);


const APICallFunc = async ()=>{

try{
const apiCalling = await  fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())

console.log(apiCalling);

console.log("HelloWorld");
console.log("HelloWorld1");
console.log("HelloWorld2");

throw Error("Invalid Email Password")

}catch(error){
console.log(error);

}finally{
    console.log("Hello Pakistan");
    
}


}

APICallFunc()





// console.log(apiCalling);
// .then((response)=>response.json())

// .then((data)=>{
// console.log(data);

// })

// .catch((error)=>{
// console.log(error);

// })



