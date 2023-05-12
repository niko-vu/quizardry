// Set up timer from the HTML...
var timerEl = document.getElementById("timer");
timerEl.innerText = "10";

var questions = [

    // First question...
    {id: 0,
    q: "What is JavaScript?",
    a:  [{ text: "a programming language", isCorrect: true },
         { text: "a dinosaur", isCorrect: false },
         { text: "a popular firstname in America", isCorrect: false },
         { text: "all of the above", isCorrect: false }]
    },

    // Second question...
    {id: 1,
    q: "What is an array used for?",
    a:  [{ text: "to hold a single value", isCorrect: true },
         { text: "to hold more than one value", isCorrect: false },
         { text: "to complicate code", isCorrect: false },
         { text: "all of the above", isCorrect: false }]
    },

    // Third question...
    {id: 2,
    q: "What is JavaScript?",
    a:  [{ text: "a programming language", isCorrect: true },
         { text: "a dinosaur", isCorrect: false },
         { text: "a popular firstname in America", isCorrect: false },
         { text: "all of the above", isCorrect: false }]
    },
]

// Default page setup...
function pageStart() {

    // Game start button shown...
    document.getElementById("gameStart").style.display = "block";

    // Hidden game elements...
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("losingMessage").style.display = "none";
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("answer4").style.display = "none";
    document.getElementById("question").style.display = "none";
}

pageStart();

// Game...
function gameStart() {

    timerStart();
    hideButton();
    showAnswers();

    function iterate(id) {

        var question = document.getElementById("question");
        question.innerText = questions[id].q;
    
        var answer1 = document.getElementById("answer1");
        var answer2 = document.getElementById("answer2");
        var answer3 = document.getElementById("answer3");
        var answer4 = document.getElementById("answer4");
    
        answer1.innerText = questions[id].a[0].text;
        answer2.innerText = questions[id].a[1].text;
        answer3.innerText = questions[id].a[2].text;
        answer4.innerText = questions[id].a[3].text;
    
        answer1.value = questions[id].a[0].isCorrect;
        answer2.value = questions[id].a[1].isCorrect;
        answer3.value = questions[id].a[2].isCorrect;
        answer4.value = questions[id].a[3].isCorrect;
    
        var selected = "";
    }
    
    iterate(0);
}

// FUNCTIONS -- THE GAME HAS STARTED
function hideButton() {
    document.getElementById("gameStart").style.display = "none";
}

function showAnswers() {
    document.getElementById("answer1").style.display = "block";
    document.getElementById("answer2").style.display = "block";
    document.getElementById("answer3").style.display = "block";
    document.getElementById("answer4").style.display = "block";
}

// Create a functioning timer...
function timerStart() {
    var timeLeft = 9;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "0";
            clearInterval(timeInterval);
            displayMessage();
            console.log(displayMessage);
        }
    }, 1000);
}

function displayMessage() {

    document.getElementById("losingMessage").style.display = "block";
    var losingMessage = document.getElementById("losingMessage");
    losingMessage.textContent = "You lost! Try again.";

    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("answer4").style.display = "none";

    document.getElementById("tryAgain").style.display = "block";
    var restartBtn = document.querySelector("#tryAgain");
    restartBtn.addEventListener("click", pageStart);

}

// BUTTON -- FOR STARTING THE GAME...
var startBtn = document.querySelector("#gameStart");
startBtn.addEventListener("click", gameStart);

// Console log check-in...
console.log(questions);