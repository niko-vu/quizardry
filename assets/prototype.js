// New Code Copy

// Set up timer from the HTML...
var timerEl = document.getElementById("timer");
timeLeft = 60;
timerEl.innerText = "Time: " + timeLeft;

// Game settings...
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
    a:  [{ text: "storing a single variable", isCorrect: false },
         { text: "complicating the code", isCorrect: false },
         { text: "arrays are not used in coding", isCorrect: false },
         { text: "storing multiple variables", isCorrect: true }]
        },

    // Third question...
    {id: 2,
    q: "Which of these is not a commonly used data type?",
    a:  [{ text: "booleans", isCorrect: false },
         { text: "grapes", isCorrect: true },
         { text: "numbers", isCorrect: false },
         { text: "strings", isCorrect: false }]
    },

    // Fourth question...
    {id: 3,
    q: "What is a boolean value?",
    a:  [{ text: "true", isCorrect: false },
         { text: "true and false", isCorrect: true },
         { text: "false", isCorrect: false },
         { text: "neither true or false", isCorrect: false }]
        },

    // Third question...
    {id: 4,
    q: "Which of these is not a commonly used data type?",
    a:  [{ text: "y", isCorrect: false },
         { text: "x", isCorrect: true },
         { text: "y", isCorrect: false },
         { text: "y", isCorrect: false }]
        },
]

// Default page setup...
function pageStart() {

    var timerEl = document.getElementById("timer");
    timeLeft = 60;
    timerEl.innerText = "Time: " + timeLeft;

    // Game start button shown...
    document.getElementById("gameStart").style.display = "block";
    document.getElementById("question").style.display = "block";

    // Hidden game elements...
    hideGame();
}

// Create a functioning timer...
function timerStart() {
    var timeLeft = 59;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time: " + timeLeft;
            clearInterval(timeInterval);
            displayMessage();
            console.log(displayMessage);
        }
    }, 1000);

    function displayMessage() {
        document.getElementById("endMessage").style.display = "block";
        var endMessage = document.getElementById("endMessage");
        endMessage.textContent = "Your final score is " + timeLeft + ".";
            
        console.log(timeLeft)
            
        document.getElementById("question").style.display = "none";
        document.getElementById("answer1").style.display = "none";
        document.getElementById("answer2").style.display = "none";
        document.getElementById("answer3").style.display = "none";
        document.getElementById("answer4").style.display = "none";
            
        document.getElementById("tryAgain").style.display = "block";
        var restartBtn = document.querySelector("#tryAgain");
        restartBtn.addEventListener("click", pageStart);
    }
    return;
}

pageStart();

// Game...
function gameStart() {

    timerStart();
    hideStart();
    showGame();

    function iterate(id) {

        var secondsLeft = timeLeft;

        var question = document.getElementById("question");
        question.innerText = questions[id].q;

        console.log(questions[id]);
    
        var answer1 = document.getElementById("answer1");
        var answer2 = document.getElementById("answer2");
        var answer3 = document.getElementById("answer3");
        var answer4 = document.getElementById("answer4");
    
        answer1.innerText = questions[id].a[0].text;
        answer2.innerText = questions[id].a[1].text;
        answer3.innerText = questions[id].a[2].text;
        answer4.innerText = questions[id].a[3].text;
    
        var selected = "";

        answer1.addEventListener("click", () => {
            selected = questions[id].a[0].isCorrect;
            console.log(selected);
            results();
            if (id < 5) {
                id++;
                iterate(id);
                console.log(id);
            }
        })
        answer2.addEventListener("click", () => {
            selected = questions[id].a[1].isCorrect;
            console.log(selected);
            results();
            if (id < 5) {
                id++;
                iterate(id);
                console.log(id);
            }
        })
        answer3.addEventListener("click", () => {
            selected = questions[id].a[2].isCorrect;
            console.log(selected);
            results();
            if (id < 5) {
                id++;
                iterate(id);
                console.log(id);
            }
        })
        answer4.addEventListener("click", () => {
            selected = questions[id].a[3].isCorrect;
            console.log(selected);
            results();
            if (id < 5) {
                id++;
                iterate(id);
                console.log(id);
            }
        })

        function results() {
            console.log(selected);
            console.log(secondsLeft);
            var result = document.getElementById("result");
            result.textContent = "";
            if (selected == true) {
                result.textContent = "Correct!"
            } else {
                timeLeft -= 10;
                result.textContent = "False!";
            }
        }
    }
    iterate(0);
}

// FUNCTIONS -- THE GAME HAS NOT STARTED
function hideGame() {
    document.getElementById("tryAgain").style.display = "none";
    document.getElementById("endMessage").style.display = "none";
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("answer4").style.display = "none";
    document.getElementById("question").style.display = "none";
}

// FUNCTIONS -- THE GAME HAS STARTED
function hideStart() {
    document.getElementById("gameStart").style.display = "none";
    document.getElementById("description").style.display = "none";
}

function showGame() {
    document.getElementById("question").style.display = "block";
    document.getElementById("answer1").style.display = "block";
    document.getElementById("answer2").style.display = "block";
    document.getElementById("answer3").style.display = "block";
    document.getElementById("answer4").style.display = "block";
}

// function displayMessage() {

//     document.getElementById("endMessage").style.display = "block";
//     var endMessage = document.getElementById("endMessage");
//     endMessage.textContent = "Your final score is " + timeLeft + ".";

//     console.log(timeLeft)

//     document.getElementById("question").style.display = "none";
//     document.getElementById("answer1").style.display = "none";
//     document.getElementById("answer2").style.display = "none";
//     document.getElementById("answer3").style.display = "none";
//     document.getElementById("answer4").style.display = "none";

//     document.getElementById("tryAgain").style.display = "block";
//     var restartBtn = document.querySelector("#tryAgain");
//     restartBtn.addEventListener("click", pageStart);

// }

// BUTTON -- FOR STARTING THE GAME...
var startBtn = document.querySelector("#gameStart");
startBtn.addEventListener("click", gameStart);

// Console log check-in...
console.log(questions);