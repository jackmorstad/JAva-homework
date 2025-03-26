function getJoke(category = 'Any') {
    let title = 'Joke Of The Day';
    if (category === 'Pun') {
        title = 'A Random Pun';
    } else if (category !== 'Any') {
        title = `A Random ${category} Joke`;
    }

    document.getElementById('title').textContent = title;

    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            let jokeText = '';

            if (data.type === 'single') {
                jokeText = data.joke;
            } else if (data.type === 'twopart') {
                
                jokeText = `${data.setup} ... ${data.delivery}`;
            }

            document.getElementById('joke-container').textContent = jokeText;
        } else {
            document.getElementById('joke-container').textContent = 'Sorry, something went wrong! Please try again.';
        }
    };

    xhr.onerror = function () {
        document.getElementById('joke-container').textContent = 'Error fetching joke. Please try again later.';
    };

    xhr.send();
}

window.onload = function () {
    getJoke();  
};

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
