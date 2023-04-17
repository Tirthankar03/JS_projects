const quizData = [{
    question: 'how old is Mbappe',
    a: '15',
    b: '26',
    c: '24',
    d: '30',
    correct: 'c' 
},{
    question: 'what is the most used programming language',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    correct: 'd' 
},{
    question: 'Who is the president of US',
    a: 'Narendra Modi',
    b: 'Donald Trump',
    c: 'Joe Biden',
    d: 'Vladimir Putin',
    correct: 'c' 
},{
    question: 'what does HTML stands for',
    a: 'Hypertext Markup Language',
    b: 'Cascadding styles',
    c: 'Jason Objects',
    d: 'Helicopter Terminals Motorboats',
    correct: 'a' 
}
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz(); //initialize 

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]; 
    questionEl.innerHTML = currentQuizData.question; //Inserting the question from the array of objects into our (Question) title space -> by referering the (Title) element to (questionEl)
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected() {
    // console.log('hio');
    const answers = document.querySelectorAll('.answer');

    answers.forEach(answer => {
        console.log(answer.checked);
    });
}


submitBtn.addEventListener('click', () =>{
    currentQuiz++;

    getSelected();


    // if (currentQuiz < quizData.length) {
    //     loadQuiz();
    // }else{
        
    //     alert("you have finished the quiz!")
    // }



} );
