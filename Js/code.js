console.log('Hallo Java Script')


const todoInput = document.querySelector (".task-input")
const todoBtn = document.querySelector (".task-btn")

function addTodo(e){
    e.preventDefault();
    console.log(todoInput.value)
    todoBtn.value = ''
}

todoBtn.addEventListener('click',addTodo)

// Code Search