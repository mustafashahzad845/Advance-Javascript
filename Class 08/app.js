
// console.log(`Start`);

// const myPromise = new Promise(
//     (resolve , reject)=>{
// const isLogin = false

// if(isLogin){
// resolve("Login Successfully")
// }else{
//     reject("Invalid Email or Password")
// }
//     }
// )

// .then(
//     (res)=>{
//         console.log(res , `res`);

//     }
// )
// .catch(
//     (err)=>{
// console.log(err , `err`);

//     }
// )

// console.log(myPromise);


// // console.log(myPromise);



// console.log(`End`);





// const loginPromise = new Promise(
//     (resolve , reject)=>{

//         const apiCalling =  true // api calling

// if(apiCalling){
//     resolve("API ka result sahi se aagaya")
// }else{
//     reject("API crash hogayi")
// }

//     }
// )

// .then((response)=>{
// console.log(response);

// })


// .catch((error)=>{
// console.log(error);

// })

// console.log(loginPromise);




// const apiCalling = fetch(`https://fakestoreapi.com/products`)
// .then(
//     (response)=>response.json() 
// )

// .then(
//     (data)=>{
// console.log(data);

//     }
// )


// .catch(
//     (error)=>{
// console.log(error);

//     }
// )

// console.log(apiCalling);





const apiCalling = async () => {
    const apiAns = await fetch(`https://fakestoreapi.com/products`)
        .then(
            (response) => response.json()
        )
}

apiCalling()

console.log(apiAns);









