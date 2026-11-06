//Howard Davis, 2501971, Web Programming Monday 3pm-5pm
const taskList = [];

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}
function completeTask(button) {
    const taskItem = button.closest(".task-item");
    taskItem.classList.toggle("completed");
}

function displayTasks() {
    const taskContainer = document.getElementById('task-list');
    taskContainer.innerHTML = '';

    for (let index = 0; index < taskList.length; index++) {
        const currentTask = taskList[index];

        taskContainer.innerHTML += `
            <div class="task-item ${currentTask.priority}">
                <span>${index + 1}. ${currentTask.title} (${currentTask.priority} priority)</span>
                <div class="task-actions">
                    <button class="toggle-btn" onclick="completeTask(this)">Complete</button>
                    <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                </div>
            </div>
        `;
    }
}

function submit(event) {
    event.preventDefault();
    const taskTitle = document.getElementById('task-title');
    const prioritySelector = document.getElementById('task-priority');

    const task = {
        title: taskTitle.value,
        priority: prioritySelector.value
    };

    taskList.push(task);
    displayTasks();

    taskTitle.value = '';
}

document.querySelector('#task-form').addEventListener('submit', submit);
