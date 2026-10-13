window.onload = function(){

    const savedTasks =
        localStorage.getItem("tasks");

    if(savedTasks){

        document.getElementById(
            "taskList"
        ).innerHTML = savedTasks;
    }

}

function addTask(){

    

    let input =
        document.getElementById("taskInput");

    let task =
        input.value;

    if(task === "") return;

    let taskList =
        document.getElementById("taskList");

    taskList.innerHTML +=
    `
    <li onclick="completeTask(this)">
    ${task}

    <button onclick="deleteTask(this)">
        ❌
    </button>
</li>
    `;
    input.value = "";
    saveTasks()
}


function deleteTask(button){

    button.parentElement.remove();
    saveTasks()
}




function completeTask(task){

    task.classList.toggle("completed");
    saveTasks()

}
function saveTasks(){

    localStorage.setItem(
        "tasks",
        document.getElementById("taskList").innerHTML
    );

}


document
.getElementById("taskInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        addTask();

    }

});

