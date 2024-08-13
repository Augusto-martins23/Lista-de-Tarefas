const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText != ""){
        const maxText = taskText.substring(0, 40);

        const li = document.createElement("li");
        li.innerHTML = `
        <span>${maxText}</span>
        <button class = "editButton" onClick = "editTask(this)">EDITAR</button>
        <button class = "deleteButton" onClick = "deleteTask(this)">REMOVER</button> 
    `;

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function editTask(button){

    const li = button.parentElement;
    const span = li.querySelector("span");
    const newText = prompt("Edite tarefa", span.textContent);
    if( newText != null && newText.trim() !=""){
        span.textContent = newText.trim();
    }

}
function deleteTask(button){

    const li = button.parentElement;
    taskList.removeChild(li)
}