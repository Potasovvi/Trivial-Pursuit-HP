document.getElementById('submitForm').addEventListener('click', function(e) {
  e.preventDefault(); // Impedisce il comportamento di invio del form predefinito

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const score = calculateScore(); // Funzione per calcolare il punteggio

  fetch('https://script.google.com/macros/s/AKfycbxECz4q4EHqzTOmS4Gjbl0xjY3eojTulZcZfbNU8IIJwpTB0l5FSCJQ5WtQfh7eBLKSIA/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, score })
  }).then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});


