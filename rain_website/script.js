document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain-container');
    const quoteContainer = document.querySelector('.quote');
    const toggleRainButton = document.querySelector('.toggle-rain');
    let rainInterval;
    
    const quotes = [
        "The best thing one can do when it's raining is to let it rain. - Henry Wadsworth Longfellow",
        "Some people walk in the rain, others just get wet. - Roger Miller",
        "Rain is grace; rain is the sky descending to the earth; without rain, there would be no life. - John Updike"
    ];

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        raindrop.style.opacity = Math.random();
        rainContainer.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, 1000);
    }

    function startRain() {
        rainInter
