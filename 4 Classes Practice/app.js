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

// const obj = {
//     name : "Mustafa",
//     lastName : "Shahzad",
//     getName  : {
//         fullName : function ()  {
//                 console.log(this);
//               let  puraName = obj.name + obj.lastName
// return puraName
//     //    return this.name + this.lastName

//     }
//     } ,

// }



//  let ans =obj.getName.fullName()
// //  ans()
//  console.log(`ans` , ans);


// function test() {
//     console.log(arguments);

// }

// test("Karachi" , "Lahore")



// let  test = ()=> {
//     console.log(arguments);

// }

// test("Karachi" , "Lahore")


// foo()

// let foo = () => {
//     console.log(`foo`);

// }


// greet()



























// foo()


// let foo =  () =>  {
//     console.log(`Hello World`);

// }

// foo()

// const foo = () => {
//     console.log(`Helloo WOrld`);

// }


// let Std =  (name , email , age) => {
//     this.name = name
//     this.email = email ,
//     this.age = age

// }


// let users = [
//     new Std(`Mustafa`, `mustafa@gmail.com`, 16),
//     new Std(`Shafay`, `shafay@gmail.com`, 17),
//     new Std(`Mahad`, `mahad@gmail.com`, 11),
//     new Std(`Ahmed`, `ahmed@gmail.com`, 7),
//     new Std(`Shahzad`, `shahzad@gmail.com`, 50),
// ]


// console.log(users);


// let name = `Shafay`

// let std = {
//     name : `Mustafa`,


//    funcGrandParent : {
//      funcParent :{
// func : {
// campus : `SMIT`
//     ,
// arrow : () => {
//         console.log(this)
//     }
// }
//     }
//    }



// }

// std.funcGrandParent.funcParent.func.arrow()
// std.arrow()



// const age = 25;
// let checkAge = age >= 18 && age <= 50? `Allow` : `Not Allow`
// console.log(checkAge);


// const age = 50;
// const gender = `male`
// let checkCampus = (age >= 18 && age <= 50 && gender === `male`) ? `Head Office Campus` : (age >= 18 && age <= 50 && gender === `female`) ? `ZA Campus` : `Not Allow`
// console.log(checkCampus);



// let usersEmail = [`mustafa@gmail.com` , `mahad@gmail.com` , `shafay@gmail.com` , `jaffar@gmail.co m` , `ahmed@gmail.com` , `bilal@gmail.com` ]
// let checkEmail = usersEmail.find(
//     (value , index )=>{
// console.log(value);
// if(value === `shafay@gmail.com`){
//     return 123

// }

//     }
// )


// console.log(checkEmail , `"'checkEmail'"`);




// let cities = ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Hyderabad", "Gujranwala", "Peshawar", "Quetta", "Islamabad", "Sialkot", "Bahawalpur", "Sargodha", "Sukkur", "Larkana", "Sheikhupura", "Rahim Yar Khan", "Jhang", "Gujrat", "Mardan"
// ];

// console.log(cities);



// let findCities = cities.find((cities , index)=>{
// console.log(cities , index);


// if(cities === `Larkana`){
//     return cities , index
// }

// })


// console.log(findCities);




// let baseItems = [
//   "pen", "pencil", "eraser", "sharpener", "notebook",
//   "marker", 
//    "phone", "charger",
//   "keyboard", "mouse", "monitor", "speaker", "headphones",
//   "shirt", "pant", "shoes", "socks", "jacket",
//   "bread", "milk", "egg", "rice"
//   ,"highlighter", "scale", "glue", "tape",
//   "scissors", "bag", "bottle", "lunchbox", "chair",
//   "table", "fan", "light", "phone", "charger",
//   "keyboard", "mouse", "monitor", "speaker", "headphones",
//   "shirt", "pant", "shoes", "socks", "jacket",
//   "bread", "milk", "egg", "rice", "flour",
//   "sugar", "salt", "tea", "coffee", "juice",
//   "apple", "banana", "mango", "orange", "grapes",
//   "carrot", "potato", "onion","marker", "highlighter", "scale",
//  "monitor", "speaker", "headphones",
//   "shirt", "pant", "shoes", "socks", "jacket",
// "milk", "tomato", "cabbage"
// ];



// let items = [
// "pen","pencil","eraser","sharpener","notebook","marker","highlighter","scale","glue","tape",
// "scissors","bag","bottle","lunchbox","chair","table","fan","light","phone","charger",
// "keyboard","mouse","monitor","speaker","headphones","shirt","pant","shoes","socks","jacket",
// "bread","milk","egg","rice","flour","sugar","salt","tea","coffee","juice",
// "apple","banana","mango","orange","grapes","carrot","potato","onion","tomato","cabbage",
// "sofa","bed","pillow","blanket","curtain","mirror","clock","calendar","lamp","bucket",
// "mug","plate","spoon","fork","knife","pan","pot","stove","oven","fridge",
// "freezer","toaster","blender","juicer","grinder","soap","shampoo","towel","brush","comb",
// "toothpaste","razor","perfume","cream","lotion","wallet","watch","belt","cap","helmet",
// "gloves","umbrella","raincoat","sunglasses","camera","tripod","drone","printer","scanner","router",
// "cable","adapter","battery","remote","fan","heater","cooler","ac","generator","inverter",
// "drill","hammer","screwdriver","wrench","pliers","saw","ladder","rope","chain","lock",
// "key","door","window","gate","fence","brick","cement","sand","paint","brush",
// "roller","canvas","frame","poster","book","magazine","newspaper","file","folder","envelope",
// "stamp","stapler","pin","clip","board","chalk","duster","projector","screen","mic",
// "speaker","amplifier","guitar","piano","drum","violin","flute","harmonica","recorder","whistle",
// "ball","bat","racket","net","goal","helmet","pad","glove","boot","jersey",
// "trophy","medal","certificate","ticket","passport","visa","card","id","badge","tag",
// "box","carton","crate","basket","tray","jar","bottle","can","packet","bag",
// "wrapper","cover","case","holder","stand","rack","shelf","drawer","cabinet","locker",
// "desk","bench","stool","counter","platform","stage","podium","screen","panel","switch",
// "socket","plug","wire","pipe","tap","valve","tank","pump","filter","fan",
// "seed","plant","tree","leaf","flower","grass","soil","fertilizer","pesticide","tool",
// "tractor","plow","harvester","cart","wheel","engine","gear","brake","clutch","fuel",
// "diesel","petrol","oil","grease","coolant","radiator","battery","sparkplug","filter","belt",
// "chain","axle","shaft","bearing","nut","bolt","washer","spring","clip","hook",
// "ring","bracelet","necklace","earring","chain","pendant","crown","badge","coin","note",
// "wallet","purse",  "pen", "pencil", "eraser", "sharpener", "notebook",
//   "marker",    "phone", "charger",  "keyboard", "mouse", "monitor", "speaker", "headphones",  "shirt", "pant", "shoes", "socks", "jacket",  "bread", "milk", "egg", "rice"  ,"highlighter", "scale", "glue", "tape",  "scissors", "bag", "bottle", "lunchbox", "chair",  "table", "fan", "light", "phone", "charger",  "keyboard", "mouse", "monitor", "speaker", "headphones",  "shirt", "pant", "shoes", "socks", "jacket",  "bread", "milk", "egg", "rice", "flour",  "sugar", "salt", "tea", "coffee", "juice",  "apple", "banana", "mango", "orange", "grapes",  "carrot", "potato", "onion","marker", "highlighter", "scale", "monitor", "speaker", "headphones",
//   "shirt", "pant", "shoes", "socks", "jacket",
// "milk", "tomato", "cabbage","bag","suitcase","trolley","backpack","folder","file","book","diary",
// "journal","notepad","sketchbook","color","crayon","paint","brush","palette","easel","canvas",
// "frame","photo","album","camera","lens","tripod","flash","memory","card","battery",
// "charger","cable","earphone","headphone","speaker","mic","stand","cover","case","screen",
// "protector","mousepad","keyboard","monitor","cpu","ups","router","modem","switch","hub",
// "server","cable","rack","panel","plug","socket","wire","adapter","converter","transformer",
// "spice","herb","pepper","cinnamon","clove","cardamom","turmeric","coriander","cumin","mustard",
// "oil","butter","cheese","yogurt","cream","icecream","chocolate","biscuit","cake","cookie",
// "noodle","pasta","burger","pizza",
// "plug","wire","pipe","tap","valve",
// "shaft","bearing","nut","bolt","washer","spring","clip","hook",
// "ring","bracelet","necklace","earring","chain","pendant","crown","badge","coin","note",
// "wallet","purse",  "pen", "pencil", "eraser",
// "scale", "monitor", "speaker", "headphones",
//   "shirt", "pant", "shoes", "socks", "jacket",
// "milk", "tomato", "cabbage","bag","suitcase","trolley","backpack","folder","file","book","diary",
// "journal","notepad","sketchbook","color","crayon","paint","brush","palette","easel","canvas",
// "frame","photo","album","camera","lens","tripod","flash","memory","card","battery",
// "charger","cable","earphone","headphone","speaker","mic","stand","cover","case","screen",
// "protector","mousepad","keyboard","monitor","cpu","sandwich","fries","ketchup","sauce","pickle","jam",
// "water","soda","drink","shake","smoothie","coffee","tea","juice","milkshake","lassi"
// ];

// console.log(items);

// let uniqueItems = [...new Set(items)]
// console.log(uniqueItems , `unique items`);

// let findItem = uniqueItems.find((value , index)=>{
// console.log(value , index);
// if(value === `towel`){
//     return true
// }
// })


// console.log(findItem , );




// const userEmails = [`mustafa@gmail.com` , `shafay@gmail.com` , `bilal@gmail.com` , `ahmed@gmail.com` , `shahzad@gmail.com` , `raza@gmail.com` , `farooq@gmail.com`]


// const checkEmail = userEmails.find(
//     (email)=>{
//         console.log(email);
        
// if(email === `shahzad@gmail.com`){
// return true
// }
//     }
// )


// console.log(userEmails , `userEmails`);


// const checkEmail = userEmails.find(
//     (email , index)=>{
// console.log(email , index);

// if(email === `ahmed@gmail.com`){
//  return 123
// }




//     }

    
// )


// console.log(checkEmail , `checkEmail`);
