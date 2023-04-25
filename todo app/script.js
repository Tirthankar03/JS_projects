const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

// const todos = JSON.parse(localStorage.getItem("todos"));


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const userInput = input.value;
    
    if(userInput){
        const todoEl = document.createElement('li');
        todoEl.innerText = userInput;
        todos.appendChild(todoEl);
    
    
        todoEl.addEventListener('click', (e) => {
            todoEl.classList.toggle('completed');
        });
    
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
        });
        
        input.value = '';
        updateLS();
    }
}

function updateLS() {
    const todoEls = document.querySelectorAll("li");
    
    const todoArr = [];
    
    todoEls.forEach((e) => {
        todoArr.push({
            text: e.innerText,
            completed: e.classList.contains("completed")
        });

    localStorage.setItem("todos", JSON.stringify(todoArr))
    });
}

    
