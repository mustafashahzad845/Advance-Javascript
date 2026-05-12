const input = document.getElementById("input")
const taskConatinerParent = document.getElementById(`taskConatinerParent`)
const addTask = () => {
    console.log(input.value);
    // console.log(taskDiv);

    taskConatinerParent.innerHTML += `<div id="taskDiv" class="taskDiv">
  <div id="taskText">
<p col=10 rows=4>${input.value}</p>
</div>

<div id="taskTime">

<p> <i class="fa-solid fa-clock"></i> <span>12 June , 2023 12:00</span>
 </p>

</div>

<div id="taskDelete">
<p><i class="fa-solid fa-trash-can"></i></p>
</div>  
</div>`

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentDate = new Date()


    console.log(currentDate.getDate() , months[currentDate.getMonth()] + ',' + currentDate.getFullYear() + " " +currentDate.getHours());



}


