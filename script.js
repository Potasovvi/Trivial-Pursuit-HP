document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    console.log("Nome: " + firstName);
    console.log("Cognome: " + lastName);

    fetch('https://script.google.com/macros/s/AKfycbwrgbRdUfiPlYagqhiLs09_jNIGaAj-EC3us80LUlHoarXaaSu557cG0Yd72FzS0tBwUQ/exec', {
        method: 'POST',
        body: JSON.stringify({ firstName: firstName, lastName: lastName }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          console.log('Response from server:', data);
          if (data.result === 'success') {
              console.log('Dati inviati con successo:', data.data);
          } else {
              console.error('Errore:', data.message);
          }
      }).catch(error => {
          console.error('Error:', error);
      });
});
