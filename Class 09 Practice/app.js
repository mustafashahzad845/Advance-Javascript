// import cheezen from "./information.js"
// console.log(cheezen, `cheezen`);

// const user = `Abu Bakr`
// console.log(user, `user`);

// import { userName } from "./information.js"
// console.log(userName, `userName`);



// import { name, email, city, status } from "./information.js"


// console.log(city)


// import {age as userAge} from "./information.js"

// console.log(userAge , `userAge`);



// function Std(name  , email , age){
//     this.name = name,
//     this.email = email,
//     this.age = age
// }


// // const stds = [
    // new Std(`Mustafa`, `mustafa@gmail.com`, 16),
    // new Std(`Shafay`, `shafay@gmail.com`, 17),
// ]


// console.log(stds);



// class Std{
//     constructor(name , email , age){
// this.name = name,
// this.email = email,
// this.age = age
//     }
// }


// const stds = [
//     new Std(`Mustafa`, `mustafa@gmail.com`, 16),
//     new Std(`Shafay`, `shafay@gmail.com`, 17),
// ]


// console.log(stds);



// const currentDate = new Date().getDay()
// const dayInUrdu = [`اتوار` , `پیر` , `منگل` ,`پدھ` , `جمعرات` , `جمعہ` , `ہفتہ`]
// console.log(currentDate);
// console.log(dayInUrdu[currentDate.getDay()]);



// const months = ["January",  "February",  "March",  "April",  "May",  "June",  "July",  "August",  "September",  "October",  "November" , `December`]

// const currentMonth = new Date().getMonth()
// console.log(currentMonth , `currentMonth`);
// console.log(months[currentMonth]);


// var doomsday = new Date("25 Feb 2010 23:00:00");
// console.log(doomsday);

// const myDate = new Date()
// console.log(myDate);
// myDate.setFullYear(2022)
// console.log(myDate);


const userDOB = prompt("Enter your DOB")
const DOB = new Date(userDOB).getTime()
const userKiDObSolve = DOB/1000/60/60/24/365
console.log(DOB);
console.log(userKiDObSolve);
