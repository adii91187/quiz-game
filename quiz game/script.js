const allQuestions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Text Markup Language", "Hyperlink Markup Language", "Hyper Transfer Markup Language"], answer: "Hyper Text Markup Language" },
    { question: "Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: "CSS" },
    { question: "Which is not a JavaScript framework?", options: ["React", "Angular", "Django", "Vue"], answer: "Django" },
    { question: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<scripting>", "<script>", "<javascript>"], answer: "<script>" },
    { question: "How do you write 'Hello World' in an alert box?", options: ["alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');"], answer: "alert('Hello World');" },
    { question: "Which is used to Connect Database?", options: ["PHP", "HTML", "CSS", "JS"], answer: "PHP" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "##", "<!-- -->", "**"], answer: "//" },
    { question: "How do you create a function in JavaScript?", options: ["function:myFunction()", "function myFunction()", "function = myFunction()", "def myFunction()"], answer: "function myFunction()" },
    { question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction", "run myFunction()"], answer: "myFunction()" },
    { question: "JavaScript is a ___-side programming language.", options: ["Client", "Server", "Both", "None"], answer: "Both" },
    { question: "What is the correct syntax for referring to an external script?", options: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script ref='xxx.js'>", "<script name='xxx.js'>"], answer: "<script src='xxx.js'>" },
    { question: "How do you write an IF statement in JavaScript?", options: ["if i==5 then", "if i=5", "if (i==5)", "if i=5 then"], answer: "if (i==5)" },
    { question: "Which company developed JavaScript?", options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"], answer: "Netscape" },
    { question: "Which method is used to combine two arrays in JavaScript?", options: ["append()", "concat()", "attach()", "merge()"], answer: "concat()" },
    { question: "How do you round the number 7.25 to the nearest integer?", options: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "rnd(7.25)"], answer: "Math.round(7.25)" },
    { question: "Which event occurs when the user clicks on an HTML element?", options: ["onmouseclick", "onmouseover", "onclick", "onchange"], answer: "onclick" },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: "<style>" },
    { question: "Which is not a primitive data type in JavaScript?", options: ["String", "Boolean", "Object", "Number"], answer: "Object" },
    { question: "How to declare a JavaScript variable?", options: ["v carName;", "variable carName;", "var carName;", "carName var;"], answer: "var carName;" },
    { question: "What will 'typeof null' return?", options: ["object", "null", "undefined", "number"], answer: "object" },
    { question: "How do you find the minimum of x and y in JavaScript?", options: ["Math.min(x,y)", "min(x,y)", "Math.minimum(x,y)", "minimum(x,y)"], answer: "Math.min(x,y)" },
    { question: "Which operator is used to assign a value to a variable?", options: ["*", "-", "=", "x"], answer: "=" },
    { question: "How do you comment a single line in JavaScript?", options: ["//", "/* */", "<!-- -->", "**"], answer: "//" },
    { question: "Which method is used to remove the last element of an array?", options: ["pop()", "push()", "shift()", "remove()"], answer: "pop()" },
    { question: "What is the correct JavaScript syntax to change the content of HTML element?", options: ["#demo.innerHTML='Hello';", "document.getElement('demo').innerHTML='Hello';", "document.getElementById('demo').innerHTML='Hello';", "document.getId('demo').innerHTML='Hello';"], answer: "document.getElementById('demo').innerHTML='Hello';" },
    { question: "What is the correct way to create an array?", options: ["var colors = (1:'red', 2:'blue')", "var colors = ['red', 'blue']", "var colors = 'red', 'blue'", "var colors = 1=('red'), 2=('blue')"], answer: "var colors = ['red', 'blue']" },
    { question: "How do you find the number with the highest value in JavaScript?", options: ["Math.high(x,y)", "Math.max(x,y)", "max(x,y)", "High(x,y)"], answer: "Math.max(x,y)" },
    { question: "Which keyword is used to exit a loop in JavaScript?", options: ["stop", "return", "break", "exit"], answer: "break" },
    { question: "Which method adds a new element to an array?", options: ["push()", "pop()", "add()", "append()"], answer: "push()" },
    { question: "Which built-in method combines the text of two strings?", options: ["append()", "concat()", "attach()", "combine()"], answer: "concat()" },
    { question: "What does the 'this' keyword refer to in JavaScript?", options: ["Current object", "Next object", "Previous object", "Global object"], answer: "Current object" },
    { question: "Which method converts a JSON text into a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: "JSON.parse()" },
    { question: "Which property returns the length of a string?", options: ["length()", "size()", "count()", "length"], answer: "length" },
    { question: "How can you detect the client’s browser name?", options: ["navigator.appName", "browser.name", "client.navName", "window.appName"], answer: "navigator.appName" },
    { question: "How can you add a comment in JavaScript?", options: ["<!--comment-->", "//comment", "'comment", "**comment"], answer: "//comment" },
    { question: "How to write an IF ELSE in JavaScript?", options: ["if (i==5) then else", "if i==5 else", "if (i==5) { } else { }", "if i==5 then else"], answer: "if (i==5) { } else { }" },
    { question: "Which tag is used to include external JavaScript?", options: ["<js>", "<scripting>", "<script>", "<javascript>"], answer: "<script>" },
    { question: "Which character is used to indicate an end of a statement?", options: [".", ";", "/", ","], answer: ";" },
    { question: "How can you create a comment in CSS?", options: ["// this is comment", "/* this is comment */", "<!-- this is comment -->", "** this is comment **"], answer: "/* this is comment */" },
    { question: "Which method removes the first element from an array?", options: ["shift()", "unshift()", "pop()", "push()"], answer: "shift()" },
    { question: "Which HTML tag is used to define a table?", options: ["<table>", "<td>", "<th>", "<tr>"], answer: "<table>" },
    { question: "What property is used to change the text color in CSS?", options: ["text-color", "font-color", "color", "text-style"], answer: "color" },
    { question: "Which input type defines a slider control?", options: ["slider", "range", "scroll", "slide"], answer: "range" },
    { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "font", "styles"], answer: "style" },
    { question: "Which element defines the title of a document?", options: ["meta", "head", "title", "body"], answer: "title" },
    { question: "Which HTML attribute specifies an alternate text for an image?", options: ["alt", "src", "title", "longdesc"], answer: "alt" },
    { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
    { question: "How do you declare a JavaScript variable?", options: ["v carName", "var carName", "carName var", "variable carName"], answer: "var carName" }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const startBtn = document.getElementById("start-btn");
const playerNameInput = document.getElementById("player-name");
const nameInputContainer = document.getElementById("name-input-container");
const quizContent = document.getElementById("quiz-content");
const leaderboardContainer = document.getElementById("leaderboard-container");
const leaderboardList = document.getElementById("leaderboard-list");
const playAgainBtn = document.getElementById("play-again-btn");
const countdownEl = document.getElementById("countdown");
const congratulationsEl = document.getElementById("congratulations");
const factsContainer = document.querySelector('.facts-container');
const randomFactBtn = document.getElementById("random-fact-btn");
const randomFactText = document.getElementById("random-fact-text");

function pickRandomQuestions() {
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
}

startBtn.addEventListener("click", () => {
  playerName = playerNameInput.value.trim();
  if (playerName !== "") {
    const confirmed = confirm(`Is your name "${playerName}"?`);
    if (confirmed) {
      const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      if (leaderboard.length >= 50) {
        alert("❌ Sorry, the quiz is full (50 participants only)!");
        location.reload();
        return;
      }
      nameInputContainer.style.display = "none";
      factsContainer.style.display = "none";
      startCountdown();
    } else {
      playerNameInput.value = "";
    }
  }
});

function startCountdown() {
  let countdown = 3;
  countdownEl.style.display = "block";
  countdownEl.textContent = countdown;
  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      countdownEl.textContent = countdown;
    } else if (countdown === 0) {
      countdownEl.textContent = "GO! 🚀";
    } else {
      clearInterval(interval);
      countdownEl.style.display = "none";
      startQuiz();
    }
  }, 1000);
}

function startQuiz() {
  leaderboardContainer.style.display = "none";
  quizContent.style.display = "block";
  questions = pickRandomQuestions();
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
  nextBtn.style.display = "none";
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = `${index + 1}. ${option}`;
    button.classList.add("option-btn");
    button.addEventListener("click", selectOption);
    optionsEl.appendChild(button);
  });
}

function selectOption(e) {
  const selectedButtons = document.querySelectorAll(".option-btn");
  selectedButtons.forEach(btn => btn.classList.remove("selected"));
  e.target.classList.add("selected");

  const selectedOptionText = e.target.textContent.slice(3);
  const correctOption = questions[currentQuestionIndex].answer;

  if (selectedOptionText === correctOption) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your Score: ${score} / ${questions.length}`;

  saveScore(playerName, score);
  loadLeaderboard();
  leaderboardContainer.style.display = "block";
  playAgainBtn.style.display = "block";

  fireConfetti();

  congratulationsEl.style.display = "block";
  if (score === questions.length) {
    congratulationsEl.textContent = "🏆 Perfect Score! You're a Genius!";
  } else if (score >= questions.length - 1) {
    congratulationsEl.textContent = "🎉 Almost perfect! Amazing job!";
  } else if (score >= questions.length / 2) {
    congratulationsEl.textContent = "👏 Good job! Keep it up!";
  } else {
    congratulationsEl.textContent = "💪 Don't give up! Try again!";
  }
}

playAgainBtn.addEventListener("click", () => {
  location.reload();
});

function saveScore(name, score) {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function loadLeaderboard() {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboardList.innerHTML = "";
  leaderboard.forEach(player => {
    const li = document.createElement("li");
    li.textContent = `${player.name} - ${player.score}`;
    leaderboardList.appendChild(li);
  });
}

function fireConfetti() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
}

const frontendFacts = [
  "🌐 HTML invented by Tim Berners-Lee in 1990.",
  "🎨 CSS created by Håkon Wium Lie in 1996.",
  "⚡ JavaScript originally called Mocha!",
  "🖥️ The first website is still online at info.cern.ch.",
  "🚀 React.js developed by Facebook.",
  "🧠 Accessibility (a11y) is critical today.",
  "📱 Responsive design took off after 2007 iPhone.",
  "🎯 Media Queries make websites mobile friendly.",
  "📚 MDN Web Docs is the best place to learn.",
  "🛠️ Flexbox and Grid revolutionized CSS layouts.",
  "🖌️ SVG is used for logos and icons.",
  "🔋 Lazy loading images speeds up pages.",
  "🧩 Web Components allow reusable custom elements.",
  "📦 NPM is the largest package registry in the world.",
  "🏆 Frontend coding competitions are popular now!",
  "🌈 Gradients became trendy with CSS3.",
  "🔎 SEO optimization starts from clean HTML.",
  "⚙️ Service Workers enable offline web apps.",
  "📐 REM units make responsive designs easier.",
  "💾 LocalStorage saves data inside the browser."
];

// Random Fact Functions
function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * frontendFacts.length);
  randomFactText.textContent = frontendFacts[randomIndex];
}

randomFactBtn.addEventListener("click", showRandomFact);
setInterval(showRandomFact, 60000); // auto update every 60 sec
showRandomFact();