// Function to add a new task
function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
        alert("Please enter a task."); // Alert if the input is empty
        return; // Exit the function
    }

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText; // Set its textContent to taskText

    // Create a new button element for removing the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove"; // Set button text
    removeBtn.classList.add('remove-btn'); // Use classList.add to add a class

    // Assign an onclick event to the remove button
    removeBtn.onclick = function() {
        taskList.removeChild(li); // Remove the li element from taskList
    };

    // Append the remove button to the li element
    li.appendChild(removeBtn);
    // Append the li to taskList
    taskList.appendChild(li);
    // Clear the task input field
    taskInput.value = '';
}
