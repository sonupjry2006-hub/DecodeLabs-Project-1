# Task Manager

## Project Overview

Task Manager is a responsive web application developed as part of **DecodeLabs Full Stack Development – Project 1**.

The project focuses on building a clean, user-friendly and responsive frontend using **HTML5, CSS3 and JavaScript**. The interface follows a mobile-first approach and adapts to different screen sizes such as mobile, tablet and desktop.

## Objective

The main objective of this project is to practice fundamental frontend development concepts and create a responsive web interface without using frontend frameworks.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS Grid
* VS Code
* Git and GitHub
* Live Server

## Features

### Task Management

* Add new tasks
* Complete tasks
* Uncomplete tasks
* Delete tasks
* Display tasks dynamically

### Progress Tracking

* Shows the number of completed tasks
* Shows the total number of tasks
* Updates the progress bar dynamically

### Responsive Design

* Mobile-first layout
* Responsive navigation
* Responsive task cards
* Tablet layout using a 768px breakpoint
* Desktop layout using a 1024px breakpoint
* Flexible typography using CSS `clamp()`

### Accessibility and Semantic HTML

* Uses semantic HTML5 elements such as `header`, `nav`, `main`, `section`, `article` and `footer`
* Labels are provided for form inputs
* Keyboard focus styles are included for links, buttons and inputs
* Uses clear headings and structured content

## Project Structure

```text
task manager/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and responsive design
├── script.js        # Task functionality and progress tracking
├── README.md        # Project documentation
└── .gitignore       # Git ignored files
```

## How It Works

1. The user enters a task in the input field.
2. The JavaScript code creates a new task dynamically.
3. The task is added to the task list.
4. The user can mark the task as completed.
5. The user can delete the task.
6. The progress section automatically updates according to the completed tasks.

## Responsive Design Approach

The project follows a **mobile-first design strategy**.

The layout starts with a single-column structure for smaller screens and expands for larger screens using CSS media queries.

* Mobile: Default layout
* Tablet: `min-width: 768px`
* Desktop: `min-width: 1024px`

CSS Grid is used for the overall task layout, while Flexbox is used for smaller layout components such as the navigation.

## How to Run

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension if it is not already installed.
4. Open `index.html`.
5. Right-click the file and select **Open with Live Server**.
6. The Task Manager application will open in your web browser.

## Project Learning Outcomes

Through this project, I practiced:

* Semantic HTML5
* Responsive web design
* CSS Flexbox
* CSS Grid
* JavaScript DOM manipulation
* Event handling
* Dynamic content creation
* Basic state and progress management
* Accessibility basics
* Git and GitHub
* Project documentation using README.md

## Repository

The project source code is hosted on GitHub.
