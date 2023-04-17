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
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz(); //initialize 

function loadQuiz() {
    //option deselected after every call
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]; 
    questionEl.innerHTML = currentQuizData.question; //Inserting the question from the array of objects into our (Question) title space -> by referering the (Title) element to (questionEl)
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(any_var_El_x => {
        if (any_var_El_x.checked) {
            answer = any_var_El_x.id;
        }
    });
    //whatever we id we select(checked = true), we store the id of x in a var(answer) 
    //the fxn returns the value of the var(answer)
    return answer;
}

function deselectAnswers() {
    //this is actually really easy to implement
    //just copy and paste the code from getSelected 
    //the goal is to remove the selection when the deselectAnswers() is called
    answerEls.forEach(any_var_El_x => {
        any_var_El_x.checked = false;
    });
    //we call the fxn in loadQuiz()
}

submitBtn.addEventListener('click', () =>{
    //the returned value from fxn is stored in the local var(answer unironically)
    const answer = getSelected();

    //we log the answer and find that the console displays the option(id) that we selected
        //still the logic for identifying correct answer and shit is not written yet
    console.log(answer);

    //check if the returned answer(id) is equal to x.correct from the QuizData[] array
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++; //score is +1 if correct
        }
        currentQuiz++; //we go to the next quiz

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>`;
        }
    }
    



} );
