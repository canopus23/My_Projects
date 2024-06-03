const container = document.querySelector('.container');
const colors = ['#3A9AD9', '#E94B3C', '#F39C12', '#2ECC71', '#9B59B6', '#1ABC9C', '#F1C40F'];
const SQUARE = 460;

for(let i = 0; i < SQUARE; i++){
    const square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square) )

    square.addEventListener('mouseout',() => removeColor(square))

    container.appendChild(square);

}

function setColor(element){
    const color = randomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}

function randomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

