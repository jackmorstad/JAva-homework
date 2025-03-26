// Function to fetch and display a random joke from the API
function getJoke(category = 'Any') {
    // Change the title based on the category
    let title = 'Joke Of The Day';
    if (category === 'Pun') {
        title = 'A Random Pun';
    } else if (category !== 'Any') {
        title = `A Random ${category} Joke`;
    }

    // Update the page title
    document.getElementById('title').textContent = title;

    // Build the API URL
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

    // Make the XMLHttpRequest to fetch the joke
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    // This function runs when the request is successful
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            let jokeText = '';

            // Check if the joke is of type 'single' or 'twopart'
            if (data.type === 'single') {
                jokeText = data.joke;
            } else if (data.type === 'twopart') {
                // If it's a two-part joke, include the setup and delivery
                jokeText = `${data.setup} ... ${data.delivery}`;
            }

            // Display the joke in the 'joke-container'
            document.getElementById('joke-container').textContent = jokeText;
        } else {
            document.getElementById('joke-container').textContent = 'Sorry, something went wrong! Please try again.';
        }
    };

    // This function runs when there is an error with the request
    xhr.onerror = function () {
        document.getElementById('joke-container').textContent = 'Error fetching joke. Please try again later.';
    };

    // Send the request
    xhr.send();
}

// Fetch a random joke from the 'Any' category when the page loads
window.onload = function () {
    getJoke();  // Default to 'Any' category on page load
};

// Add event listeners to the buttons for each category
document.getElementById('programming').addEventListener('click', function () {
    getJoke('Programming');
});
document.getElementById('misc').addEventListener('click', function () {
    getJoke('Misc');
});
document.getElementById('pun').addEventListener('click', function () {
    getJoke('Pun');
});
document.getElementById('spooky').addEventListener('click', function () {
    getJoke('Spooky');
});
document.getElementById('christmas').addEventListener('click', function () {
    getJoke('Christmas');
});
