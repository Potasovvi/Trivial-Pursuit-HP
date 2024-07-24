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
