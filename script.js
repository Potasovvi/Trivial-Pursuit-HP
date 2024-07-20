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
        q1: 'd', // Dolores Umbridge
        q2: 'b', // Albus Silente
        q3: 'a', // Ufficio del Direttore
        q4: 'a', // Sirius Black
        q5: 'b', // L'Armata di Silente
        q6: 'b', // Bellatrix Lestrange
        q7: 'a', // La Profecia di Sibilla
        q8: 'a', // Sibilla Cooman
        q9: 'b', // Rufus Scrimgeour
        q10: 'c' // Dobby
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
