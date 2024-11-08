let todos = [];
let todoList = document.getElementById('todoList');
let userInput = document.getElementById('textInput');
let addButton = document.getElementById('addButton');
let showEnterTodo = document.getElementById('plusIcon');
let mainPage = document.getElementById('enterTodo');

function renderListPage() {
    console.log('here');
    mainPage.style.display = 'flex';
    console.log(mainPage.style.display);
}

showEnterTodo.addEventListener('click', renderListPage);

function addTodoList(event) {
    event.preventDefault();
    let inputValue = userInput.value;
    if (!inputValue) {
        alert('Add a valid text');
    } else {
        todos.push(inputValue);
        todoList.innerHTML = ' ';
        renderTodos();
        userInput.value = '';
    }
}
addButton.addEventListener('click', addTodoList);

function deleteToDo(index) {
    todos = todos.filter((todo, i) => {
        return i === index ? false : true;
    });
    renderTodos();
    userInput.value = '';
}

function editToDo(index) {
    let currElementText = document.querySelector(
        `#todoList div:nth-child(${index + 1}) p`
    ).innerText;
    let slicedText = currElementText.slice(2);
    deleteToDo(index);
    userInput.value = slicedText;
}

function renderTodos() {
    todoList.innerHTML = ' ';
    todos.forEach((todo, i) => {
        let currentHTML = todoList.innerHTML;
        let newHTML = `<div class='toDoList'>
                <p>
                    ${i + 1}.${todo}
                </p>

                <div class='actions'>
                   <i onClick="editToDo(${i})" class='fa-solid fa-pen-to-square editIcon' id='edit'></i>
                    <i onClick ="deleteToDo (${i})" class='fa-solid fa-trash deleteIcon' id='delete'></i>
                </div>
            </div>`;

        let amendedHTML = currentHTML + newHTML;
        todoList.innerHTML = amendedHTML;
    });
}
renderTodos();
