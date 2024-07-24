const correctAnswers = {
            1: ["Dolores Umbridge", "Umbridge"],
            2: ["Harry Potter", "Harry", "Potter"]
        };

        function checkAnswer(questionNumber) {
            const userAnswer = document.getElementById(`answer${questionNumber}`).value.trim().toLowerCase();
            const feedbackElement = document.getElementById(`feedback${questionNumber}`);
            const isCorrect = correctAnswers[questionNumber].some(answer => answer.toLowerCase() === userAnswer);        
            
        <--    if (userAnswer.toLowerCase() === correctAnswers[questionNumber].toLowerCase()) { -->
                        if (isCorrect) {
                feedbackElement.textContent = "Risposta corretta!";
                feedbackElement.style.color = "green";
                                       }
            } else {
                feedbackElement.textContent = "Risposta sbagliata. Riprova.";
                feedbackElement.style.color = "red";
            }
        }
