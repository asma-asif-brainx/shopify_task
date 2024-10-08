document.addEventListener("DOMContentLoaded", function() {
    // Get the date input field
    const dateInputField = document.getElementById('date-selector');
  
    // Add an event listener for the date input field
    dateInputField.addEventListener('change', function() {
      const selectedDate = dateInputField.value; // Get the selected date
  
      // Update the cart attributes with the selected delivery date
      fetch('/cart/update.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          attributes: {
            "Delivery Date": selectedDate 
          }
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Cart updated with delivery date:', data);
      })
      .catch((error) => {
        console.error('Error updating cart:', error);
      });
    });
  });