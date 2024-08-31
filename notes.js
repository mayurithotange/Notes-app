const tasks = [];

function loadlocalstorage(){
    const alltasks = JSON.parse(localStorage.getItem('alltasks'));
    if(alltasks)
{
    tasks.push(...alltasks)
  }
loadtasks();
}

loadlocalstorage();



function loadtasks(){

localStorage.setItem('alltasks' , JSON.stringify(tasks));
const taskElement =document.getElementById("tasks-container");
taskElement.innerHTML = '';

for(const task of tasks)
{
taskElement.innerHTML += `
<div class="to-do-div">
    ${task}

    <button type="button" class="btn" onclick="delitem('${task}')"> Remove</button>
    </div> `
}

}

function addtotask(){
const InputtaskElement = document.getElementById('input-task');
const task = InputtaskElement.value;

if(!task)
{
alert('please Enter a task');
return;

}


tasks.unshift(task);
loadtasks();
InputtaskElement.value = '';


}



function delitem(task)
{
const taskIndex = tasks.indexOf(task)
tasks.splice(taskIndex,1)


loadtasks();
}