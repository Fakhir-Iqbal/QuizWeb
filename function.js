
function start() {
    document.querySelector(".container").style.display = "block";
    document.querySelector(".head").style.display = "none";
  }

  const quizData = [
    {
      question: "Javascript is an _______ language ?",
      option_a: "Object-Oriented",
      option_b: "Object-Based",
      option_c: "Procedural",
      option_d: "none of the above",
      correct_option: "a",
    },
    {
      question:
        "Which of the following keywords is used to define a variable in Javascript ?",
      option_a: "var",
      option_b: "let",
      option_c: "both",
      option_d: "none of the above",
      correct_option: "c",
    },
    {
      question:
        "Which of the following methods is used to access HTML elements using Javascript ?",
      option_a: "getElementById()",
      option_b: "getElementsByClassName()",
      option_c: "both",
      option_d: "none of the above",
      correct_option: "c",
    },
    {
      question:
        "Upon encountering empty statements, what does the Javascript Interpreter do ?",
      option_a: "throws an error",
      option_b: "ignores the statements",
      option_c: "gives a warning",
      option_d: "none of the above",
      correct_option: "b",
    },
    {
      question:
        "Which of the following methods can be used to display data in some form using Javascript ?",
      option_a: "document.write()",
      option_b: "console.log()",
      option_c: "window.alert()",
      option_d: "all of the above",
      correct_option: "d",
    },
    {
      question: "How can a datatype be declared to be a constant type ?",
      option_a: "const",
      option_b: "var",
      option_c: "let",
      option_d: "constant",
      correct_option: "a",
    },
    {
      question: "Which of the following are closures in Javascript ?",
      option_a: "variables",
      option_b: "functions",
      option_c: "objects",
      option_d: "all of the above",
      correct_option: "d",
    },
    {
      question:
        "Which function is used to serialize an object into a JSON string in Javascript ?",
      option_a: "stringify()",
      option_b: "parse()",
      option_c: "convert()",
      option_d: "none of the above",
      correct_option: "a",
    },
    {
      question: "What does the ‘toLocateString()’ method do in JS ?",
      option_a: "returns a localised object representation",
      option_b: "returns a parsed string",
      option_c: "returns a localised string reprensentation of an object",
      option_d: "none of the above",
      correct_option: "c",
    },
    {
      question:
        "When the switch statement matches the expression with the given labels, how is the comparison done ?",
      option_a: "Both the datatype and the result of the expression are compared",
      option_b: "only the data type of the expression is compared",
      option_c: "only the value is compared",
      option_d: "none of the above",
      correct_option: "d",
    },
    {
      question:
        "What keyword is used to check whether a given property is valid or not ?",
      option_a: "in",
      option_b: "is in",
      option_c: "exists",
      option_d: "lies",
      correct_option: "a",
    },
    {
      question: "What is the use of the <noscript> tag in Javascript ?",
      option_a: "the content are displayed by non-JS-based browsers",
      option_b: "clear all the cookies and cache",
      option_c: "both",
      option_d: "none of the above",
      correct_option: "a",
    },
    {
      question:
        "When an operator’s value is NULL, the typeof returned by the unary operator is:",
      option_a: "boolean",
      option_b: "undefined",
      option_c: "object",
      option_d: "integer",
      correct_option: "c",
    },
    {
      question: "What does the Javascript “debugger” statement do ?",
      option_a: "it will debug all the errorsin the program at runtime",
      option_b: "it acts like a breakpoint in a program",
      option_c: "it will debug error in the current statement if any",
      option_d: "All of the above",
      correct_option: "b",
    },
    {
      question:
        "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called ?",
      option_a: "object serialization",
      option_b: "object encapsulation",
      option_c: "object inheritance",
      option_d: "none of the above",
      correct_option: "a",
    },
  ];


  const quiz = document.getElementById("quiz");
  const quizInfo = document.getElementById("quiz-info");
  const quizQuestion = document.getElementById("quiz-question");
  const all_answer = document.querySelectorAll(".answer");
  const ans_a = document.getElementById("answer_a");
  const ans_b = document.getElementById("answer_b");
  const ans_c = document.getElementById("answer_c");
  const ans_d = document.getElementById("answer_d");
  const submit = document.getElementById("submit");
  const qCount = document.getElementById("question-count");

  let currentQuiz = 0;
  let score = 0;

  const deselectAnswers = () => {
    all_answer.forEach((answerEl) => (answerEl.checked = false));
  };

  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizAnswer = quizData[currentQuiz];
    quizQuestion.innerText = `Question ${currentQuiz + 1} : ${currentQuizAnswer.question
      }`;
    qCount.innerText = `Question ${currentQuiz + 1} / ${quizData.length}`;
    ans_a.innerText = currentQuizAnswer.option_a;
    ans_b.innerText = currentQuizAnswer.option_b;
    ans_c.innerText = currentQuizAnswer.option_c;
    ans_d.innerText = currentQuizAnswer.option_d;
  };
  loadQuiz();

  const getSelectedAns = () => {
    let answer;
    all_answer.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });

    return answer;
  };
  let targetTime = new Date().getTime() + 602000; // 10 minutes in milliseconds
  setTimeout(() => {
    const answer = getSelectedAns();
    document.getElementById("timer").innerHTML = "Time out!";
    quiz.innerHTML = `
              <div class="reload">
              <h2>You Score : ${score}/${quizData.length}</h2>
              <h2>You Percentage : ${score / quizData.length * 100}%</h2>
              <button id="reload" onclick="location.reload()">Reload Quiz</button>
              </div>
              `;

  }, 600001)
  // Function to update the countdown timer
  function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;

    if (timeRemaining <= 0) {
      document.getElementById("timer").innerHTML = "Time out!";
    } else {
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = `Time Left: ${minutes}m ${seconds}s`;
    }
  }
  let myInterval = setInterval(updateCountdown, 1000);
  updateCountdown();



  submit.addEventListener("click", () => {
    
    const answer = getSelectedAns();
    console.log(answer)
    if (answer) {
      if (answer === quizData[currentQuiz].correct_option) {
        score++;
      }
      currentQuiz++;

      if (currentQuiz < quizData.length) {
        loadQuiz();
        if (currentQuiz === quizData.length - 1) {
          submit.innerText = "Submit";
        }
      } else {
        clearInterval(myInterval)
        document.getElementById("timer").innerText = "";
        let percentage = Math.round(score / quizData.length * 100)
        
        quiz.innerHTML = `
              <div class="reload">
              <h2  >You Score : ${score}/${quizData.length}</h2>
              <h2  >You Percentage : ${percentage}%</h2>
              <button id="reload" onclick="location.reload()">Reload Quiz</button>
              </div>
              `;
      }
    }
  });
