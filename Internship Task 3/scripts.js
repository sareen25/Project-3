// Interactive Quiz Code
const questions = [
    { question: "Which type of JavaScript language is?", choices: ["Object Oriented", "Object Based", "Assembly language"], answer: 1 },
    { question: "When an operators value is NULL, the typeof returned by the unary operator is?", choices: ["Boolean", "Undefined", "Object"], answer: 2 },
    { question: "what is JS do?", choices: ["styling", "structure" , "functionality"], answer: 2 },
    { question: "Which function is used to serialize an object into a JSON string in Javascript?", choices: ["stringify()", "parse()" , "convert()"], answer: 0 },
    { question: "Which of the following is not a Javascript framework?", choices: ["Vue", "React" , "Cassandra"], answer: 2 }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const submitBtn = document.getElementById('submit');
  const scoreEl = document.getElementById('score');

  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = '';
    q.choices.forEach((choice, index) => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.dataset.index = index;
      li.onclick = () => selectAnswer(index);
      choicesEl.appendChild(li);
    });
  }

  function selectAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Complete!";
      choicesEl.innerHTML = '';
      submitBtn.style.display = 'none';
    }
    scoreEl.textContent = `Score: ${score}`;
  }

  loadQuestion();

  // Fetch Data from an API
  const fetchWeatherBtn = document.getElementById('fetchWeather');
  const outputEl = document.getElementById('output');

  

  fetchWeatherBtn.addEventListener('click', () => {
    fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London')
      .then(response => response.json())
      .then(data => {
        outputEl.textContent = `The weather in ${data.location.name} is ${data.current.condition.text} with a temperature of ${data.current.temp_c}°C.`;
      })
      .catch(error => {
        outputEl.textContent = 'Failed to fetch weather data.';
      });
  });