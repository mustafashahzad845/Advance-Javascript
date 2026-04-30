//Class 1


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


// const name = `Mustafa`;
// const user = {
//     name :  `Shafay`,
// }


// const {name : objName} = user


// console.log(name , `name`);
// console.log(objName , `objName`);




// Class 2
//Spread Operator
// let arr = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9]
// // let arr4 = arr.concat(arr2).concat(arr3)
// let arr4 = [...arr , ...arr2 , ...arr3]
// console.log(arr , `arr`);
// console.log(arr2 , `arr2`);
// console.log(arr3 , `arr3`);
// console.log(arr4 , `arr4`);




// const std = {
//     name : `Mustafa`,
//     email : `mustafa@gmailcom`,
//     age : 16,

// }


// const course = {
    
//     duration : `1.5 years`,
//     courseName : `Mern Stack`,
//     trainer : `Jaffar Aman`,
//     ...std,
//     email : `shafay@gmail.com`,
    
// }


// console.log(course);



//Rest Operator
// let foo = (city1 , city2, city3, city4, city5,  ...rest) => {
// console.log(rest);

// }


// foo("Karachi", "Lahore", "Quetta", `Hyderabad`, `Pindi`, 12, 34, 5, 4, 98, 65)




// let cities = [1,4,2,4,33,2,4,3,34,5,66,4,5,3]
// let commonRemove = [...new Set(cities)]
// console.log(commonRemove , `common Remove`);



// const arr = [1,4,2,4,33,2,4,3,34,5,66,4,5,3]
// const newArr = [...new Set(arr)]
// console.log(arr  , `arr`);
// console.log(newArr , `newArr`);



// var a = `Mustafa`;
// console.log(a , `a`);

// a = `Shafay`
// let b = a;

// b =  `Ali`
// console.log(b ,`b`);
// console.log(a ,`c`);












// let std = {
//     name  : `Mustafa`,
//     age : 16 , 
//     email : `mustafa@gmail.com`,
//     skills : {
//         html : 70,
//         css : 96,
//         js : {
//             eS5 : 70,
//             es6 : 50 
//         }
//     }
// }



// std.city = `Lahore`
// let std2 = {...std}
// std2.city = `Karachi`
// std2.country = `Pakistan`

// std2.skills.css = 0
// let std2 = JSON.stringify(std)
// std2 = JSON.parse(std2)
 
// std2.skills.css = 0

// std2.skills.js.eS5 = 100

// console.log(std , `std`);
// console.log(std2 , `std2`);



// let a = `Mustafa`
// a = `Shafay`

// let b = a



// console.log(a , `a`);
// console.log(b , `b`);



// let a = `Jaffar`
// let b = `Jaffar`




// a = `Hammad`

// console.log(a , `a`);
// console.log(b , `b`);



// let obj1 = {
//     name : `Mustafa`
// }

// let obj2 = obj1

// let obj3 = obj2


// obj3.email = `mustafa@gmail.com`


// obj1.age = 16

// obj2.country = `Pakistan`


// console.log(obj1 , `obj1`);
// console.log(obj2 , `obj2`);
// console.log(obj3 , `obj3`);



// Class3
// let foo = () => {
//     console.log(`foo`);
    
// }



// foo()



// console.log(this);

const obj = {
    name : "Mustafa",
    lastName : "Shahzad",
    getName  : {
        fullName : function ()  {
                console.log(this);
              let  puraName = name + lastName 

    //    return this.name + this.lastName
        
    }
    } ,
    
}



 let ans =obj.getName.fullName()
//  console.log(`ans` , ans);
 