//identify list
//same logic as other two variables
const list = document.getElementById('list');

//create taskText - an input variable
//taskText looks for element named 'new_task' - the input element
const taskText = document.getElementById('new_task');

var toStorage = [];

//create 'Add' - a variable that looks for element named 'Add'
//the 'Add' element is the add button
const Add = document.getElementById('Add');
Add.addEventListener('click', (event) => {
    //console.log(new_task.value);

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

    toStorage.push(taskText);
    //console.log(toStorage);
    //console.log(toStorage[0]);

   

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


function save() {

    //1.) tried iterating over toStorage, but it says it is not an iterable
    //tasks = Array.from(toStorage.children).map(each => each.innerHTML);
    //console.log(tasks);
    //tasksJSON = JSON.stringify(tasks);
    //console.log(tasksJSON);
    //tried making it an iterator, but that didn't work either
    //const iterator = toStorage.entries();
    //console.log(iterator.next().value, iterator.next().done);

    /*
    2.) tried stringifying each task individually, then pushing those onto an array
    var tasksJSON = [];

    for(var i = 0; i<toStorage.length; i++) {

        //console.log(toStorage[i]);
        stringifiedTask = JSON.stringify(toStorage[i]);
        tasksJSON.push(stringifiedTask);
        console.log(tasksJSON);

    }
    */

    // 3.) stringifying the whole array and storing that in localStorage
    // for 2.) and 3.) I keep getting output as {}, {} - not the actual strings
    var str = JSON.stringify(toStorage);
    localStorage.setItem("savedTasks", str);

}

function getTasks() {

    var str = localStorage.getItem("savedTasks");
    var fromStorage = JSON.parse(str);
    console.log(fromStorage);

}


window.onload = function() {
    getTasks();
}








/*
function saveAll() {
    //Create an array to store the li values
    var toStorage = [];
    var values = document.querySelectorAll('li');
    //Cycle through the li array
    for (var i = 0; i < values.length; i++) {
      toStorage.push(values[i]);
      console.log(toStorage[i]);
    }

}
*/

/*
function loadAll(array) {
    for (var i = 0; i < array.length; i++) {
        list.appendChild(array[i]);
    }
    
  }

window.onload = function() {
    loadAll();
}
*/




