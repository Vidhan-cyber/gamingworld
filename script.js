document.getElementById('register-form').addEventListener('submit', register);
document.getElementById('quiz-form').addEventListener('submit', submitQuiz);

function register(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('Registration successful');
    document.getElementById('register-form').reset();
    showQuiz(); // Call showQuiz() function to display the quiz after registration
}

function showQuiz() {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

function submitQuiz(event) {
    event.preventDefault();
    const answers = {
        q1: 'Paris',
        q2: '4',
        q3: 'Blue',
        q4: '7',
        q5: '100°C'
    };
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[`q${i}`]) {
            score++;
        }
    }
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('score').textContent = score;
}

function showGames() {
    document.getElementById('quiz').style.display = 'none'; // Hide the quiz section
    document.getElementById('games').style.display = 'block'; // Show the games section
}

function startGame(game) {
    document.getElementById('games').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('chess').style.display = 'none';
    document.getElementById('ludo').style.display = 'none';
    document.getElementById(game).style.display = 'block';
}

function backToGames() {
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('games').style.display = 'block';
}
