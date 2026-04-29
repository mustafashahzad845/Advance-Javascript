// var a = 1;
// var a = 8;
// console.log(a , 'a');



// let a = `Mustafa`;





















// const user = `Mustafa`


























//  user = `Shafay`










// console.log(user , `user`);


//  a = `Shafay`



// console.log(a , `a`);






// console.log(a , `a`);




// var a = 20
// let a = 20
// const a = 20;




// let foo = () => {
// var str = "Mustafa"
// console.log(str);

// }


// foo()

// console.log(str);




// let foo = () => {
// var a = 10;
// return a
// }

// console.log(a);


// let ans =  foo()




// let day =  prompt("Enter today's day")

// switch (day) {
//     case "Monday":
//         alert("Work Day")
//         break
//     case "Tuesday":
//         alert("Work Day")
//         break
//     case "Wednesday":
//         alert("Work Day")
//         break
//     case "Thursday":
//         alert("Work Day")
//         break
//     case "Friday":
//         alert("Short Day")
//         break
//     // case "Saturday":
//     //     alert("WOW")
//     //     break
//     // case "Sunday":
//     //     alert("WOW")
// default :
//  alert("WOW")
// }



// if(true){
//     var a = 10;

// }


// console.log(a);




// for(let i = 1 ; i <= 10 ; i++){
// const number = i;
// console.log(number);

// }

// console.log(number);


// console.log(i);




// initialization
// Condition 
// block of code / statement 

// let cardParent = document.getElementById("cardParent")
// let input = document.getElementById("input")
// let products = []


// fetch(`https://fakestoreapi.com/products`)
// .then(
//     (response) => {
// console.log(response);
// return response.json()
//     }
// )

// .then(
//     success => {
// console.log(success);
// products = success

// for(val of success){
// // console.log(val);
// cardParent.innerHTML += `<div class="card" style="width: 18rem;">
//   <img src=${val.image} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${val.title}</h5>
//     <p class="card-text">${val.description}</p>
//     <a href="#" class="btn btn-primary">$${val.price}</a>
//   </div>
// </div>`
// }


// return success
// // var search = () => {
// //     console.log(input.value);
    
// // }


// }
// )


// .catch(
//     error =>{
// console.log(error);

//     }
// )




// function search() {
//     console.log(input.value);
    


// console.log(products);

//     }




// let std = {
//     name : `Mustafa`,
//     email : `mustafa@gmail.com`,
//     city : `Karachi`
// }


// console.log(std , `std`);


// const {city , email} = std

// console.log(city);
// console.log(email);




// let fruits = []



// fruits[0] = `Apple`
// fruits[1] = `Peach`
// fruits[4] = `Orange`
// fruits[5] = `Papaya`

// console.log(fruits);


    
// let fruits = ["apple" , "mango" , "banana"]
// const [f1 , , f3] = fruits

// console.log(f1);
// console.log(f3);


const name = `Mustafa`;
const user = {
    name :  `Shafay`,
}


const {name : objName} = user


console.log(name , `name`);
console.log(objName , `objName`);
