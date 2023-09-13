let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editIndex = -1;
const todoForm = document.querySelector(".input-section");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todo-list");
const addButton = document.querySelector("#addBtn");
const updateButton = document.getElementById("update-button");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const todo_main = document.querySelector(".todos");

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "li";

    const checkbox = document.createElement("input");
    checkbox.className = "form-check-input";
    checkbox.type = "checkbox";
    checkbox.value = "option1";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodoCompleted(index));

    const label = document.createElement("label");
    label.className = "form-check-label";

    const spanText = document.createElement("span");
    spanText.className = "todo-text";
    spanText.textContent = `${todo.text} (${todo.date})`;

    const deleteButton = document.createElement("span");
    deleteButton.className = "span-button";
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener("click", () => deleteTodo(index));

    const editButton = document.createElement("span");
    editButton.className = "span-button";
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editButton.addEventListener("click", () => editTodo(index));

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(spanText);
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    todoList.appendChild(li);
  });
}
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const currentDate = new Date();

    if (editIndex === -1) {
      todos.push({
        text: todoText,
        completed: false,
        date: currentDate.toLocaleString(),
      });
    } else {
      todos[editIndex].text = todoText;
      todos[editIndex].date = currentDate.toLocaleString();
      editIndex = -1;
      addButton.style.display = "inline";
      updateButton.style.display = "none";
    }

    saveTodos();
    renderTodos();
    todoInput.value = "";
  }

  return false;
}

function toggleTodoCompleted(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

function editTodo(index) {
  const todoText = todos[index].text;
  todoInput.value = todoText;
  editIndex = index;
  addButton.style.display = "none";
  updateButton.style.display = "inline";
}

function searchTodo() {
  const searchQuery = searchInput.value.trim();
  if (searchQuery !== "") {
    const searchResults = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    renderSearchResults(searchResults);
  } else {
    renderTodos();
  }
}

function renderSearchResults(results) {
  todoList.innerHTML = "";

  if (results.length > 0) {
    results.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "li";

      const checkbox = document.createElement("input");
      checkbox.className = "form-check-input";
      checkbox.type = "checkbox";
      checkbox.value = "option1";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => toggleTodoCompleted(index));

      const label = document.createElement("label");
      label.className = "form-check-label";

      const spanText = document.createElement("span");
      spanText.className = "todo-text";
      spanText.textContent = `${todo.text} (${todo.date})`;

      const deleteButton = document.createElement("span");
      deleteButton.className = "span-button";
      deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
      deleteButton.addEventListener("click", () => deleteTodo(index));

      const editButton = document.createElement("span");
      editButton.className = "span-button";
      editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
      editButton.addEventListener("click", () => editTodo(index));

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(spanText);
      li.appendChild(deleteButton);
      li.appendChild(editButton);

      todoList.appendChild(li);
    });
  } else {
    todo_main.innerHTML = `<img class="face" src="asetes/thinking.png" alt="">
                            <h1 class="not-found"> NOT FOUND</h1>`;
  }
}

todoForm.addEventListener("submit", addTodo);
updateButton.addEventListener("click", addTodo);
renderTodos();