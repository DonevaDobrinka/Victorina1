const questions = [
    { question: "Какво е веществото?", answers: ["Нещо, което заема пространство и има маса.", "Светлина и звук.", "Само въздух."], correct: 0 },
    { question: "Кое от следните е твърдо тяло?", answers: ["Вода.", "Камък.", "Въздух."], correct: 1 },
    { question: "Коя от тези характеристики описва течностите?", answers: ["Имат форма, която не се променя.", "Могат да текат и заемат формата на съда.", "Разпространяват се във всички посоки."], correct: 1 },
    { question: "Как се нарича преминаването на вода в пара?", answers: ["Изпарение.", "Замръзване.", "Топене."], correct: 0 },
    { question: "Какво е газ?", answers: ["Тяло, което има определена форма.", "Тяло, което има определен обем.", "Вещество, което няма определен обем и форма."], correct: 2 },
    { question: "Кое от следните се случва, когато ледът се разтопи?", answers: ["Превръща се в пара.", "Превръща се в вода.", "Остава твърдо."], correct: 1 },
    { question: "Какво се случва с водата, когато я замразим?", answers: ["Превръща се в лед.", "Превръща се в пара.", "Остава течност."], correct: 0 },
    { question: "Каква е основната характеристика на твърдите тела?", answers: ["Заемат формата на съда, в който са.", "Имат собствена форма и обем.", "Текат свободно."], correct: 1 },
    { question: "Кой от тези материали е течен при стайна температура?", answers: ["Масло.", "Желязо.", "Дърво."], correct: 0 },
    { question: "Коя е правилната последователност на състоянията при нагряване на лед?", answers: ["Лед → Вода → Пара.", "Вода → Лед → Пара.", "Лед → Пара → Вода."], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });

    document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(button, isCorrect) {
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add('correct');
        if (!button.classList.contains('answered')) {
            score++;
            document.getElementById('score').textContent = score;
        }
    } else {
        button.classList.add('wrong');
    }

    button.classList.add('answered');
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('next-btn').textContent = currentQuestionIndex < questions.length - 1 ? 'Следващ въпрос' : 'Край';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const resultElement = document.getElementById('result');
    let message = `Вие събрахте общо ${score} точки.`;
    let emoji = '';

    if (score >= 9) {
        message += " Справихте се отлично!";
        emoji = "😊";
    } else if (score >= 7) {
        message += " Справихте се много добре!";
        emoji = "😊";
    } else if (score >= 5) {
        message += " Справихте се добре!";
        emoji = "😊";
    } else {
        message += " Прочети още по темата и играй отново!";
        emoji = "😞";
    }

    resultElement.innerHTML = `${message} <span class="emoji">${emoji}</span>`;
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

showQuestion();
