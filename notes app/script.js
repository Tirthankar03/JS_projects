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