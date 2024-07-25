document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    fetch('https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbzLE6LBhtYDYklegRwjh0ut4eOY6_uNKz_K8MxHa-7rH97Bh9DhOxcNsMd2j_h11gyr/exec', {
        method: 'POST',
        body: JSON.stringify({ firstName: firstName, lastName: lastName }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          console.log(data);
          // You can handle the response here
      }).catch(error => {
          console.error('Error:', error);
      });
});



