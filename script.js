document.addEventListener('DOMContentLoaded', function () {
  const dataContainer = document.getElementById('data-container');

  // Fetch the JSON data from menu.json
  fetch('./db.json')
      .then(response => response.json())
      .then(data => {
          // Loop through each dish in the JSON data
          data.dishes.forEach(dish => {
              // Create a new dish container
              const dishContainer = document.createElement('div');
              dishContainer.className = 'dish-container';

              // Populate the container with data from the JSON
              dishContainer.innerHTML = `
                  <h1 class="dish-name">${dish.name}</h1>
                  <p class="dish-description">${dish.description}</p>
                  <button class="view-details-button">View Details</button>
                  <button class="add-to-cart-button">Add to Cart</button>
              `;

              // Append the dish container to the data container
              dataContainer.appendChild(dishContainer);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
});
