const joke_text = document.querySelector('.joke-text');

const joke_btn = document.querySelector('.new-joke-btn');

const tweet_btn = document.querySelector('.tweet-btn');


joke_btn.addEventListener('click', getjoke);

getjoke();

function getjoke() {

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function (response) {

        return response.json();
    }).then(function(data){

        const joke = data.joke;

        joke_text.innerHTML = joke; 
    })
    
}
