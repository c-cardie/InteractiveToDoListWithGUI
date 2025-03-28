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
    //create a variable to store delete button
    const deleteBtn = document.createElement("button");
    //deleteBtn.id = "deleteBtn";
    deleteBtn.innerHTML = "delete";
    deleteBtn.classList.add("delete");
    //deleteBtn.disabled = "true";
    deleteBtn.style.visibility = "hidden";
    //append text to li
    li.appendChild(taskCheck);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    //append new li to list
    list.appendChild(li);
    //make typed task disappear in input box after adding a task
    new_task.value = '';
} )


//create 'Remove' - a variable that looks for element named 'Remove'
const Remove = document.getElementById('Remove');
Remove.addEventListener('click', (event) => {

    //show all tasks' delete buttons
    var deleteBtnList = document.querySelectorAll(".delete");
    var toDoList = document.querySelectorAll('li');
    for (let i = 0; i < deleteBtnList.length; i++) {
        deleteBtnList[i].style.visibility = "visible";
        deleteBtnList[i].addEventListener("click", (event) => {

            taskToDelete = deleteBtnList[i].parentElement
            console.log(taskToDelete);
            taskToDelete.remove();
    
        })
      }
})


/*
//add event listeners to all delete buttons
//get from LI instead of deleteBtnList!!
var deleteBtnList = document.querySelectorAll(".delete");
deleteBtnList.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", (event) => {

        //access its parent (li)
        //console.log(deleteBtn.parentElement.nodeName);
        //delete the li element
        this.style.visibility = "hidden";

    })
})
*/




