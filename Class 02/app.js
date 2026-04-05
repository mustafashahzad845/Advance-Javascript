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



let std =  {
    name : "Mustafa",
    email : "mustafa@gmail.com",
    age : 16
}

let course = {
    ...std , 
    duration : "1 years",
    courseName : "web and mobile app development"
}

course.city = "Karachi"

console.log(std , "std");
console.log(course , "course");
