
const addBtn = document.getElementById('add');



addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(){
    //creating a new div nameed note
    const noteNew = document.createElement('div'); 
    noteNew.classList.add('note'); //adding a class to note
    
    noteNew.innerHTML = `
    <div class="tools">
                            <button class="edit"><i class="fas fa-edit"></i></button>
                            <button class="delete"><i class="fas fa-trash"></i></button>
                        </div>
                        <div class="main hidden"></div>
                        <textarea></textarea>
                    </div> `;


                    document.body.appendChild(noteNew); //adding note to the document body
    //what we are thinking off is :
//main display = none
//when we click on the editBtn, then I show the other one
//text area can have an input event listener such that:
    //when we type something, it updates the main

// const notesEl = document.querySelector('.note');  not added in html directly so not needed       
const editBtn = noteNew.querySelector('.edit');
const deleteBtn = noteNew.querySelector('.delete');

const main = noteNew.querySelector('.main');
const textArea = noteNew.querySelector('textarea');




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

deleteBtn.addEventListener('click',() => {
    noteNew.remove();
});    


}


