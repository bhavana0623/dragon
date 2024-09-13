document.addEventListener('DOMContentLoaded', function() {
    const fireContainer = document.querySelector('.fire-container');
    const fire = document.createElement('div');
    fire.classList.add('fire');
    fireContainer.appendChild(fire);
    setTimeout(() => {
        fire.remove();
    }, 1000); // Adjust the timeout to match the animation duration
});
