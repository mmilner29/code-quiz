//Define variables
var startButton = document.getElementById('start-btn');
var quizDirections = document.getElementById('directions');
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answer');
var timerEl = document.getElementById('countdown');
var questionIndex = 0;
var timeLeft = 75;

//Event Listener for start button-- starts quiz when start button is clicked
startButton.addEventListener('click', startCodingQuiz)

//Array of quiz questions
quizQuestions = [
    {
        question: 'What html element creates an unordered list?',
        options: ['<ul>', '<ol>', '<li>', '<list>'],
        answer: '<ul>'
    },
    {
        question: 'What does  the acronym DOM stand for?',
        options: ['Data Object Model', 'Data Output Model','Document Object Model', 'Document Output Model'],
        answer: 'Document Object Model'
    },
    {
        question: 'What does the "box-sizing" property do?',
        options: ['Changes the calculation of the padding and margin.', 'Changes the calculation of the margins.', 'Changes the calculation of the width and height', 'Changes the calculation of the width.'],
        answer: 'Changes the calculation of the width and height'
    },
    {
        question: 'What does the scope of a variable determine in JavaScript?',
        options: ['How long the variable is.', 'The accessiblity of the variable.', 'Whether or not the variable is written correctly.', 'Scope is not related to a variable.'],
        answer: 'The accessiblity of the variable.'
    },
    {
        question: 'Which phrase initializes a local repository in Git?',
        options: ['git initialize', 'git init', 'init', 'git local repo'],
        answer: 'git init'
    },

]

//Define Quiz length
quizLength = quizQuestions.length

//Start Game Function
function startCodingQuiz() {
    startButton.classList.add('hide');
    quizDirections.classList.add('hide');
    chooseQuestion()
    countdown()

}

//Iterate through array to choose next question & display it (along with answer options) to screen
function chooseQuestion() {
    questionElement.innerHTML = "";
    answerElement.innerHTML = "";
    for (var i = 0; i < quizLength; i++) {
        var userQuestion = quizQuestions[questionIndex].question;
        questionElement.innerText = userQuestion
        var userOptions = quizQuestions[questionIndex].options
    }
    userOptions.forEach(function (addOption) {
        var button = document.createElement('button');
        button.innerText = addOption;
        button.classList.add('answer-btn');
        button.addEventListener('click', chooseAnswer);
        answerElement.appendChild(button);
    })
};

//Subtract time if wrong answer is chosen
function chooseAnswer(event) {
    var element = event.target

    if (element.matches('button')) {
        if (element.innerText == quizQuestions[questionIndex].answer) {
        } else {
            timeLeft = timeLeft - 10;
        }
    }

    //Cycle through to next question OR end quiz)
   questionIndex++;

    if (questionIndex >= quizLength) {
        quizOver();

    } else {
        chooseQuestion(questionIndex);
    }
};

//Function to end quiz & document final score & user initals
function quizOver() {
    questionElement.innerHTML = "";
    answerElement.innerHTML = "";

    var finalScore = timeLeft;
    initials = window.prompt('Your time left was ' + finalScore + ' seconds. Please enter your initials to save your time. You can view all your scores at any time by clicking "View high scores" in the top left corner.')
    if (initials === null) {
        alert('You need to enter a valid response');
        return quizOver();
    } else {
        var score = {
            initials: initials,
            score: finalScore
        }
        var scoreLog = localStorage.getItem('scoreLog');
        if (scoreLog === null) {
            scoreLog = [];
        } else {
            scoreLog = JSON.parse(scoreLog);
        }
        scoreLog.push(score);
        var updatedScoreLog = JSON.stringify(scoreLog);
        localStorage.setItem("scoreLog", updatedScoreLog);
        window.location.replace("./highscores.html");
    }
    window.location.reload();
};

//Start Timer Function
function countdown() {

    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        // decrement time left by 1
        timeLeft--;
      }
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      };
      
    }, 1000);
  }

  function displayMessage() {
      alert ("You ran out of time! Try to answer all the questions before your time runs out.");
      //refresh the page to start fresh
      window.location.reload();
  }
