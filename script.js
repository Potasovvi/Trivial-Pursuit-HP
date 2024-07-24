function calculateScore() {
    const answers = {
        q1: 'a',
        q2: 'a',
        q3: 'b',
        q4: 'a',
        q5: 'b',
        q6: 'b',
        q7: 'b',
        q8: 'a',
        q9: 'a',
        q10: 'a'
    };

    let score = 0;
    const form = document.getElementById('quizForm');

    for (let question in answers) {
        const selectedOption = form.querySelector(`input[name=${question}]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerHTML = `Hai ottenuto ${score} su ${Object.keys(answers).length} punti.`;
}


const correctAnswers = {
            1: "Dolores Umbridge",
            2: "Harry Potter"
        };

        function checkAnswer(questionNumber) {
            const userAnswer = document.getElementById(`answer${questionNumber}`).value.trim();
            const feedbackElement = document.getElementById(`feedback${questionNumber}`);
            
            if (userAnswer.toLowerCase() === correctAnswers[questionNumber].toLowerCase()) {
                feedbackElement.textContent = "Risposta corretta!";
                feedbackElement.style.color = "green";
            } else {
                feedbackElement.textContent = "Risposta sbagliata. Riprova.";
                feedbackElement.style.color = "red";
            }
        }


