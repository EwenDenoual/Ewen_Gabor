// Array to store tasks in memory
const tasks = [];

// Function to check API health
async function checkApiHealth() {
    try {
        const response = await fetch('/api/health');
        if (response.ok) {
            document.getElementById('api-status').textContent = 'Connecté à l\'API';
            document.getElementById('api-status').style.color = 'green';
        } else {
            throw new Error();
        }
    } catch (_error) {
        document.getElementById('api-status').textContent = 'Non connecté à l\'API';
        document.getElementById('api-status').style.color = 'red';
    }
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Function to add task
function addTask(taskText) {
    if (taskText.trim() !== '') {
        tasks.push(taskText.trim());
        renderTasks();
    }
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listeners
document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    addTask(taskInput.value);
    taskInput.value = '';
});

// Check API on load
globalThis.onload = checkApiHealth;