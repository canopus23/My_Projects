

document.addEventListener('DOMContentLoaded', function () {
  // Select elements
  const buttons = document.querySelectorAll('.button');
  const body = document.querySelector('body');
  const UpText = document.querySelector('#UpText');
  const DownText = document.querySelector('#DownText');

  // Function to change styles
  function changeStyles(backgroundColor, textColor) {
    body.style.backgroundColor = backgroundColor;
    UpText.style.color = textColor;
    DownText.style.color = textColor;
  }

buttons.forEach(function (buttons) {
  buttons.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      UpText.style.color = 'white';
      DownText.style.color = 'white';

    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      UpText.style.color = 'black';
      DownText.style.color = 'black';
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      UpText.style.color = 'white';
      DownText.style.color = 'white';
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      UpText.style.color = 'black';
      DownText.style.color = 'black';
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
      UpText.style.color = 'white';
      DownText.style.color = 'white';
     }
    });
  });
});