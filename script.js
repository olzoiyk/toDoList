let taskInput = document.getElementById("taskInput");
let buttonClicked = document.getElementById("addNewTask");
let list = document.getElementById("taskList");

function addNewTask() {
    let task = taskInput.value.trim();
    if (task !== "") {
        let li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
        taskInput.value = "";
    }
}

buttonClicked.addEventListener("click", addNewTask);