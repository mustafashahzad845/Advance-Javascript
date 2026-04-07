// const arr1 = [1 , 2 , 3]
// const arr2 = [4 , 5 , 6]
// const arr3 = [7 , 8 , 9]
// let arr4 = arr1.concat(arr2 , arr3)
// console.log(arr1 , "arr1");
// console.log(arr2 , "arr2");
// console.log(arr3);
// console.log(arr4);


// const arr4 = [...arr1 , ...arr2 , ...arr3]
// console.log(arr4 , "arr4");




// console.log(arr , `arr`);

// arr.map(
//     function (val) {
// console.log(val);

//     }
// )



// let foo = () => {
//     console.log("foo");

// }

// foo()




// arr.map((val , indexNo) => {
// console.log(val , "call back fn" , indexNo);

// })








// const arr1 = [1 , 2  , 3];
// const arr2 = [4 , 5 , 6];

// arr1[3] = true

// const arr3 =  [...arr1 , ...arr2]

// arr3[1] = false

// console.log(arr1 , "arr1");
// console.log(arr2 , "arr2");
// console.log(arr3 , "arr3");







// let a = "Mustafa";
// let b = a;

// b = "Shafay"
// console.log(a , "a");
// console.log(b , "b");





// const std = {
//     name  :`Mustafa`,
//     email : `mustafa@gmail.com`,
//     age : 16
// }

// std.country = "Pakistan"

// const std2 = std


// std2.gender = "Male"

// const  std3 = std 


// std2.religion = "Islam"

// console.log(std , 'std');
// console.log(std2 , 'std2');
// console.log(std3 , 'std3');





// const std = {
//     name  :`Mustafa`,
//     email : `mustafa@gmail.com`,
//     age : 16,
// skills : {
// html : 70,
// css : 80,
// js : {
//     basicJS : 90,
//     advanceJS : 75
// },
// }


// }


// std.gender = "male"

// const std2 = {...std}
// std2.skills.html = 800

// std2.gender = "female"

// console.log(std ,"std");
// console.log(std2 ,"std2");


// let std2 = JSON.stringify(std)
// console.log(std2 , "std2");
// std2 = JSON.parse(std2)


// std2.skills.html = 1000



// std2.skills.js.advanceJS = 40
// console.log(std , "original");

// console.log(std2 , 'std2');


let std = {
    name : "Mustafa",
    email : "mustafa@gmail.com",
    age : 16

}


let std2 = Object.assign({}, std)

std2.name = "Shafay"

console.log(std , "std");
console.log(std2 , "std2");


// std2

let arr = [1, 2, 3, 4, [4.5 , 4.8 , 4.9],5, 6, 7]


let  arr2 = [...arr]
arr2[1] = true


arr2[4] = [5.0 , 5.5 , 6.6]


console.log(arr , "arr");
console.log(arr2 , "arr2");

