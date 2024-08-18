// Select elements from the DOM
const inputBox = document.querySelector('.input-box');
const addButton = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');

// Event listener for adding a new todo item
addButton.addEventListener('click', addTodo);

// Function to add a todo item
function addTodo() {
    // Get the input value
    const todoText = inputBox.value.trim();

    // Check if the input is not empty
    if (todoText !== "") {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        listItem.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Append the new item to the todo list
        todoList.appendChild(listItem);

        // Clear the input field
        inputBox.value = "";

        // Add delete functionality to the delete button
        listItem.querySelector('.delete-btn').addEventListener('click', deleteTodo);

        // Add mark complete functionality by clicking the text
        listItem.querySelector('span').addEventListener('click', toggleComplete);
    }
}

// Function to delete a todo item
function deleteTodo(e) {
    const item = e.target.parentElement;
    todoList.removeChild(item);
}

// Function to toggle the completion of a todo item
function toggleComplete(e) {
    const item = e.target.parentElement;
    item.classList.toggle('completed');
}
