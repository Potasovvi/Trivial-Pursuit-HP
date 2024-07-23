// Funzione per calcolare il punteggio del quiz
function calculateScore() {
    // Definisci le risposte corrette per il quiz corrente
    const answers = {
        // Risposte corrette per il quiz del secondo film
        // q1: 'b', q2: 'a', ...
        // Risposte corrette per il quiz del quinto film
        // q1: 'a', q2: 'b', ...
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
