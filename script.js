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
