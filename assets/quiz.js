//Define variables
startButton = document.getElementById('start-btn')
quizContainer = document.getElementById('container')
quizDirections = document.getElementById('directions')
questionElement = document.getElementById('question')
answerElement = document.getElementsByClassName('answer-btn')
timerEl = document.getElementById('countdown')

startButton.addEventListener('click', startCoding)

quizQuestions = [
    {
        question: 'What html element creates an unordered list?',
        options: [
            { text: '<ul>', correct: true},
            { text: '<ol>', correct: false},
            { text: '<li>', correct: false},
            { text: '<list>', correct: false}
        ]
    },
    {
        question: 'What does DOM stand for?',
        options: [
            { text: '<Data Object Model>', correct: false},
            { text: '<Data Output Model>', correct: false},
            { text: '<Document Object Model>', correct: true},
            { text: '<Document Output Model>', correct: false}
        ]
    },
    {
        question: 'What does the "box-sizing" property do?',
        options: [
            { text: '<Changes the calculation of the padding and margin.>', correct: false},
            { text: '<Changes the calculation of the margins.>', correct: false},
            { text: '<Changes the calculation of the width and height>', correct: true},
            { text: '<Changes the calculation of the width.>', correct: false}
        ]
    },
    {
        question: 'What does the scope of a variable determine in JavaScript?',
        options: [
            { text: '<How long the variable is.>', correct: false},
            { text: '<The accessiblity of the variable.>', correct: true},
            { text: '<Whether or not the variable is written correctly.>', correct: false},
            { text: '<Scope is not related to a variable.>', correct: false}
        ]
    },
    {
        question: 'Which phrase initializes a local repository in Git?',
        options: [
            { text: '<git initialize>', correct: false},
            { text: '<git init>', correct: true},
            { text: '<init>', correct: false},
            { text: '<git local repo>', correct: false}
        ]
    },

]

quizLength = quizQuestions.length

//Start Game Function
function startCoding() {
    startButton.classList.add('hide');
    quizDirections.classList.add('hide');
    currentQuestion = 0
    chooseQuestion()
    countdown()

}

function chooseQuestion() {
    for (var i = 0; i < quizLength; i++) {
        displayQuestion(quizQuestions[i])
    }
}

function displayQuestion(quizQuestions) {
    questionElement.innerText = quizQuestions.question
    // quizQuestions.options.forEach(options => {
    //     const button = document.createElement('button')
    //     button.innerText = options.text
    //     button.classList.add('answer-btn')
    //     if (options.true) {
    //         button.dataset.correct = options.correct
    //     }
    //     button.addEventListener('click', chooseAnswer)
    //     answerElement.appendChild(button)
    // })
}

function chooseAnswer(event) {
    
}

//Start Timer Function
function countdown() {
    var timeLeft = 5;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        // decrement time left by 1
        timeLeft--;
      }
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } 
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      };
  
      
    }, 1000);
  }

  function displayMessage() {
      alert ("You ran out of time! Try to answer all the questions before your time runs out.");
      window.location.reload();
  }
