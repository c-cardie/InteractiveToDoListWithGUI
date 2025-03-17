/*
//togging display/hide with task input class
//event listener
document.getElementById("Add Task").addEventListener("click", displayTaskInput);
//functions
function displayTaskInput() {
    document.getElementById("task_input").style.display = "flex";
}
function hideTaskInput() {
    document.getElementById("task_input").style.display = "none";
}
*/

//identify list
//same logic as other two variables
const list = document.getElementById('list');

//create taskText - an input variable
//taskText looks for element named 'new_task' - the input element
const taskText = document.getElementById('new_task');

//create 'Add' - a variable that looks for element named 'Add'
//the 'Add' element is the add button
const Add = document.getElementById('Add');
Add.addEventListener('click', (event) => {
    console.log(new_task.value);

    //create a new li
    const li = document.createElement('li');
    //create a variable to store checkbox for the task
    const taskCheck = document.createElement('input');
    taskCheck.setAttribute("type", "checkbox");
    //create a variable to store text for new task
    const taskText = document.createTextNode(new_task.value);
    //append text to li
    li.appendChild(taskCheck);
    li.appendChild(taskText);
    //append new li to list
    list.appendChild(li);
    //make typed task disappear in input box after adding a task
    new_task.value = '';
} )



