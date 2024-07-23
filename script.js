// Funzione per calcolare il punteggio del quiz
function calculateScore() {
    // Definisci le risposte corrette per il quiz corrente
    const answers = {
        // Risposte corrette per il quiz del secondo film
        // q1: 'b', q2: 'a', ...
        q1: 'b',
        q2: 'a',
        q3: 'd',
        q4: 'b',
        q5: 'a',
        q6: 'a',
        q7: 'a',
        q8: 'a',
        q9: 'a',
        q10: 'a'
        // Risposte corrette per il quiz del quinto film
        // q1: 'a', q2: 'b', ...   
        const answers = {
        q1: 'b', // Cambia queste risposte secondo le tue domande
        q2: 'a',
        q3: 'c',
        q4: 'b',
        q5: 'a',
        q6: 'd',
        q7: 'b',
        q8: 'a',
        q9: 'c',
        q10: 'b'
};

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
