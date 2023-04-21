const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener('submit', (e) => {
    e.preventDefault();

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
    }
});


    
