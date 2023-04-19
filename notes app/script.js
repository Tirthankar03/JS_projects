//what we are thinking off is :
//main display = none
//when we click on the editBtn, then I show the other one
//text area can have an input event listener such that:
    //when we type something, it updates the main

const notesEl = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const main = notesEl.querySelector('.main');
const textArea = notesEl.querySelector('textarea');


editBtn.addEventListener('click',() => {
    main.classList.toggle('hidden'); //just toggle between their hidden class (we are gonna make it in a sec)
    textArea.classList.toggle('hidden'); 

});


//here JS destructuring has been used
//the { value } is basically a property that has the value of the input
//we renamed "value" to "keyboardInput" and used in in marked()
textArea.addEventListener('input',(x) => {
    const { value: keyboardInput } = x.target; //x denotes the input from the user and we are just storing the input into our var 'value'
    main.innerHTML = marked(keyboardInput);
});


