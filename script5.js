const correctAnswers = {
            1: ["Dolores Umbridge", "Umbridge"],
            2: ["Harry Potter", "Harry", "Potter"],
            3: ["Harry Potter e l'Ordine della Fenice"],
            4: ["12 Grimmauld Place", "numero 12 di Grimmauld Place"],
            5: ["Albus Silente", "Silente"],
            6: ["Thestral", "Thestrals"],
            7: ["Cornelius Caramell"],
            8: ["Cervo"],
            9: ["Severus Piton", "Piton"],
            10: ["La Gazzetta del Profeta", "Gazzetta del Profeta"]
        };

        function checkAnswer(questionNumber) {
            let score = 0;                    
            const userAnswer = document.getElementById(`answer${questionNumber}`).value.trim().toLowerCase();
            const feedbackElement = document.getElementById(`feedback${questionNumber}`);
            const isCorrect = correctAnswers[questionNumber].some(answer => answer.toLowerCase() === userAnswer);        
         
        <!--    if (userAnswer.toLowerCase() === correctAnswers[questionNumber].toLowerCase()) {  -->  
                        if (isCorrect) {
                feedbackElement.textContent = "Risposta corretta!";
                feedbackElement.style.color = "green";
                    score++;
                                       }
         <!--   } --> 
                    else {
                feedbackElement.textContent = "Risposta sbagliata. Riprova.";
                feedbackElement.style.color = "red";
            }
            return score;
   } 
           


