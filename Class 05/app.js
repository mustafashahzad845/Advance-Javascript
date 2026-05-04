// let userData = localStorage.getItem("user");
// let userName = ()=>{

//     let userName = prompt("Enter your name")
// console.log(userName);
//   localStorage.setItem(`user`, userName)
// }

// console.log(userData)

// localStorage.clear()

// console.log(localStorage);



// const cities = [`Karachi` , `Lahore` ,`Multan`]
// const newArr = JSON.stringify(cities)
// console.log(newArr);
// localStorage.setItem("cities", newArr)
// const citiesSave = localStorage.getItem("cities")
// console.log(citiesSave);

// console.log( JSON.parse(citiesSave))


// const newArr = JSON.stringify(cities)

// const saveArr = localStorage.setItem("cities", newArr)

// const getArr = localStorage.getItem("cities");
// const oroginalArr = JSON.parse(getArr)
// console.log(oroginalArr);


// localStorage.setItem("cities", JSON.stringify(cities))
// console.log(localStorage.getItem("cities"))
// const getArray = localStorage.getItem("cities")
// console.log(getArray);
// console.log(JSON.parse(getArray));


const std = {
    name : `Mustafa`
}
console.log(std);
// localStorage.setItem("name", JSON.stringify(std))

const getArray = JSON.parse(localStorage.getItem("name"))
console.log(getArray);
