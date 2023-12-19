const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElements = document.getElementById ('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffleQuestions; 
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  shuffleQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElements.classList.remove('hide')
  setNextQuestion()
    
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => { setStatusClass(button, button.dataset.correct);
    });
    if (shuffleQuestions.length > currentQuestionIndex + 4) {
    nextButton.classList.remove('hide');
} else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
      element.classList.add('wrong')  
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does JavaScript primarily add to a web page?',
        answers: [
            { text: 'style', correct: false },
            { text: 'Interactivity', correct: true },
            { text: 'Structure', correct: false },
            { text: 'Images', correct: false },
        ]
    },
    {
        question: 'What does JavaScript primarily add to a web page?',
        answers: [
            { text: 'let myVar = 10', correct: false },
            { text: 'var myVar = 10', correct: false },
            { text: 'const myVar = 10', correct: false },
            { text: 'all of the above', correct: true },
        ]
    },
    {
        question: 'Which function is used to add a new element at the end of an array in JavaScript?',
        answers: [
            { text: 'push()', correct: true },
            { text: 'pop()', correct: false },
            { text: 'shift()', correct: false },
            { text: 'unshift()', correct: false },
        ]
    },
    {
        question: 'Which of the following is not a valid JavaScript data type??',
        answers: [
            { text: 'String ', correct: false },
            { text: 'Object ', correct: false },
            { text: 'Function ', correct: false },
            { text: 'Character ', correct: true },
        ]
    },
    {
        question: 'What does the addEventListener() method do in JavaScript?',
        answers: [
            { text: 'Adds a new element to the page', correct: false },
            { text: 'Adds a click event to an element', correct: true },
            { text: 'Changes the pages background color', correct: false },
            { text: 'Removes an element from the page', correct: false },
        ]
    }
]