// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // Unordered list for tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert user if no task is entered
            return; // Exit the function
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText; // Set text content to taskText

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove"; // Set button text
        removeBtn.className = 'remove-btn'; // Add class for styling

        // Assign an onclick event to the remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li); // Remove the task from the list
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);
        // Append the list item to the task list
        taskList.appendChild(li);
        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for the Enter key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter key is pressed
        }
    });

    // Invoke the addTask function on DOMContentLoaded (optional)
    // This can be used if you want to initialize something when the page loads
    // addTask();
});
