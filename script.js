let taskInput = document.getElementById("taskInput");
let buttonClicked = document.getElementById("addNewTask");
let list = document.getElementById("taskList");

function addNewTask() {
    let task = taskInput.value.trim();
    if (task !== "") {
        // Create task container (li)
        let li = document.createElement("li");
        li.className = "taskItem";

        // Create task text span
        let span = document.createElement("span");
        span.className = "taskText";
        span.textContent = task;

        // ✔ Done button
        let doneBtn = document.createElement("button");
        doneBtn.textContent = "✔";
        doneBtn.className = "doneBtn";
        doneBtn.addEventListener("click", () => {
            span.classList.toggle("completed");
        });

        // 🗑 Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        // 🎨 Color button
        let colorBtn = document.createElement("button");
        colorBtn.textContent = "🎨";
        colorBtn.className = "colorBtn";
        colorBtn.addEventListener("click", () => {
            // Cycle through colors (you can customize)
            const colors = ["#fce4ec", "#e3f2fd", "#e8f5e9", "#fff9c4"];
            let currentColor = li.style.backgroundColor;
            let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length] || colors[0];
            li.style.backgroundColor = nextColor;
        });

        // ✏ Edit button
        let editBtn = document.createElement("button");
        editBtn.textContent = "✏";
        editBtn.className = "editBtn";
        editBtn.addEventListener("click", () => {
            let newText = prompt("Edit your task:", span.textContent);
            if (newText !== null && newText.trim() !== "") {
                span.textContent = newText.trim();
            }
        });

        // Append everything to li
        li.appendChild(span);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);
        li.appendChild(colorBtn);
        li.appendChild(editBtn);

        // Add li to the list
        list.appendChild(li);

        // Clear input
        taskInput.value = "";
    }
}

buttonClicked.addEventListener("click", addNewTask);
