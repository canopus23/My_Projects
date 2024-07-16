document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain-container');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        raindrop.style.opacity = Math.random();
        rainContainer.appendChild(raindrop);

        // Remove the raindrop after it falls out of view
        setTimeout(() => {
            raindrop.remove();
        }, 1000);
    }

    setInterval(createRaindrop, 50);
});
