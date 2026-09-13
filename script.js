// Get elements from the HTML
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const tasksSection = document.getElementById("tasks");
const progressText = document.querySelector("#progress p");
const progressBar = document.querySelector("#progress progress");


// Add a new task
taskForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        return;
    }

    // Create a new article
    const taskArticle = document.createElement("article");

    taskArticle.innerHTML = `
        <h3>${taskText}</h3>

        <p>New task added to your task list.</p>

        <button type="button" class="complete-btn">
            Complete
        </button>

        <button type="button" class="delete-btn">
            Delete
        </button>
    `;

    // Add the task to the page
    tasksSection.appendChild(taskArticle);

    // Clear input
    taskInput.value = "";

    // Add functionality to the new buttons
    addTaskButtons(taskArticle);

    // Update progress
    updateProgress();
});


// Add functionality to Complete and Delete buttons
function addTaskButtons(taskArticle) {

    const completeButton =
        taskArticle.querySelector(".complete-btn");

    const deleteButton =
        taskArticle.querySelector(".delete-btn");


    // Complete button
    completeButton.addEventListener("click", function () {

        taskArticle.classList.toggle("completed");

        if (taskArticle.classList.contains("completed")) {
            completeButton.textContent = "Completed";
        } else {
            completeButton.textContent = "Complete";
        }

        updateProgress();
    });


    // Delete button
    deleteButton.addEventListener("click", function () {

        taskArticle.remove();

        updateProgress();
    });
}


// Update progress
function updateProgress() {

    const allTasks =
        tasksSection.querySelectorAll("article");

    const completedTasks =
        tasksSection.querySelectorAll(".completed");

    const total = allTasks.length;
    const completed = completedTasks.length;

    progressText.textContent =
        `Tasks completed: ${completed} / ${total}`;

    progressBar.max = total;
    progressBar.value = completed;
}


// Add functionality to existing tasks
const existingTasks =
    tasksSection.querySelectorAll("article");

existingTasks.forEach(function (task) {
    addTaskButtons(task);
});


// Set initial progress
updateProgress();