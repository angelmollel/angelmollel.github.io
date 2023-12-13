const animationDuration = 3000; // Reduced animation duration for faster appearance
const maxDigits = 10;
let gameSpeed = 150; // Initial speed in milliseconds (faster speed)

let timerInterval;

function startGame() {
    const randomNumber = Math.floor(Math.random() * 10);
    appendNumberAndAnimate(randomNumber.toString());
}

function appendNumberAndAnimate(digit) {
    const movingNumber = document.createElement('span');
    movingNumber.classList.add('moving-number');
    movingNumber.textContent = digit;
    document.body.appendChild(movingNumber);

    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = Math.random() * window.innerHeight;
    movingNumber.style.left = startPositionX + 'px';
    movingNumber.style.top = startPositionY + 'px';

    const startTime = Date.now();
    let isClicked = false;

    function animate() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        if (elapsed < animationDuration && !isClicked) {
            const progress = elapsed / animationDuration;
            const translateY = progress * (window.innerHeight + 40);
            movingNumber.style.transform = `translateY(${translateY}px)`;

            requestAnimationFrame(animate);
        } else {
            movingNumber.remove();
            resetTimer();
        }
    }

    movingNumber.addEventListener('click', function clickHandler() {
        if (!isClicked) {
            appendNumber(digit);
            isClicked = true;
            movingNumber.removeEventListener('click', clickHandler);
            resetTimer();
        } else {
            document.getElementById('warningMessage').textContent = 'Number already clicked!';
        }
    });

    animate();
}

function appendNumber(digit) {
    const phoneNumberDisplay = document.getElementById('phoneNumberDisplay');
    const currentLength = phoneNumberDisplay.value.replace(/-/g, '').length;

    if (currentLength === 3 || currentLength === 6) {
        phoneNumberDisplay.value += '-';
    }

    if (currentLength < maxDigits) {
        phoneNumberDisplay.value += digit;
    }

    if (currentLength === maxDigits - 1) {
        alert(`You entered the complete phone number: ${phoneNumberDisplay.value}`);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        startGame();
    }, gameSpeed);
}

function resetGame() {
    clearInterval(timerInterval);
    document.getElementById('phoneNumberDisplay').value = '';
    document.getElementById('warningMessage').textContent = '';
}

document.addEventListener('DOMContentLoaded', function () {
    startGame();

    // Add event listener for reset button
    document.getElementById('resetButton').addEventListener('click', resetGame);
});
