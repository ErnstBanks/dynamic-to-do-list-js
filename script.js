document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from local storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task));
    }

    // Function to add a task to the DOM
    function addTaskToDOM(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item'); // Add a class to the list item

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText);
        };
        
        removeBtn.classList.add('btn-remove'); // Add a class to the remove button

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTaskToDOM(taskText);
        saveTaskToStorage(taskText);
        taskInput.value = '';
    }

    // Save task to local storage
    function saveTaskToStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove task from local storage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page loads
    loadTasks();
});
// implement local storage for todo list 
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from local storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTaskToDOM(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function to add a task to the DOM
    function addTaskToDOM(taskText, save = true) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item'); // Add a class to the list item

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText);
        };

        removeBtn.classList.add('btn-remove'); // Add a class to the remove button

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        addTaskToDOM(taskText, true); // Save is true when adding a new task
        taskInput.value = '';
    }

    // Save task to local storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove task from local storage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page loads
    loadTasks();
});
