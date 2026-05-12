let currentUser = localStorage.getItem("loginUser")
currentUser = JSON.parse(currentUser)

const userEmailUIShow = document.getElementById(`userEmailUIShow`)
userEmailUIShow.innerHTML = currentUser.email


const input = document.getElementById("input")
const taskConatinerParent = document.getElementById(`taskConatinerParent`)

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const addTask = () => {
 const currentDate = new Date()
 let hour = new Date().getHours()
const hourVal = hour < 10 ? `0`+ hour   : hour

let minutes = new Date().getMinutes()
let minutesVal = minutes < 10 ? `0`+minutes : minutes

let seconds = new Date().getSeconds()
let secondsVal = seconds < 10 ? `0`+seconds : seconds


if(!input.value.trim()){
alert("Please fill the input field")
return
}


const userTask = {
    text : input.value,
    postTime :  `${currentDate.getDate()} ${months[currentDate.getMonth()]} , ${currentDate.getFullYear()} &nbsp;  ${hourVal}:${minutesVal}:${secondsVal}`
}

// localStorage.setItem("userTasks", JSON.stringify(userTask))

const userAllTasks = localStorage.getItem("userTasks")
console.log(userAllTasks);

if(userAllTasks == null){
//first  task
console.log(`first task`);
localStorage.setItem(`userTasks`, JSON.stringify([userTask]))
}else{
    // first task nhi hai
    console.log(`first task nhi hai`);

    const tasksData = JSON.parse(userAllTasks)

    tasksData.push(userTask)

    localStorage.setItem(`userTasks` , JSON.stringify(tasksData))
     
    
}

input.value = ""

renderUI()
}


function renderUI() {
    let getTasks = localStorage.getItem("userTasks")
getTasks = JSON.parse(getTasks)
    console.log(getTasks , `get Tasks`);
    
    taskConatinerParent.innerHTML = ""

for(let taskObj of getTasks){
 taskConatinerParent.innerHTML +=  `<div id="taskDiv" class="taskDiv">
  <div id="taskText">
<p col=10 rows=4>${taskObj.text}</p>
</div>

<div id="taskTime">

<i class="fa-solid fa-clock"></i> <p>${taskObj.postTime}</p>


</div>

<div id="taskDelete">
<p><i class="fa-solid fa-trash-can" onclick="deleteTask(this)"></i></p>
</div>  
</div>`

}

    

}


const deleteTask = (element) =>{

    let getTasks = localStorage.getItem("userTasks")
getTasks = JSON.parse(getTasks)
console.log(getTasks , `getTasks`);

    // console.log(`deleteTask`);
//  localStorage.removeItem()
// console.log(element.parentNode.parentNode.parentNode);
   const taskDiv = element.parentNode.parentNode.parentNode
//    console.log(taskDiv.children[1].children[1]);

 const timeOftaskDiv = taskDiv.children[1].children[1]
// console.log(timeOftaskDiv.innerHTML , `timeOftaskDiv`);


const findVal = getTasks.find((obj)=>{
console.log(obj.postTime);

if(obj.postTime == timeOftaskDiv.innerHTML){
return true
}

})

console.log(findVal , `findVal`);


// if(getTasks.postTime == timeOftaskDiv.innerHTML){

// }


const deleteIndex = getTasks.indexOf(findVal)

getTasks.splice(deleteIndex , 1)
console.log(getTasks);

localStorage.setItem("userTasks", JSON.stringify(getTasks))

  taskDiv.remove()  

}