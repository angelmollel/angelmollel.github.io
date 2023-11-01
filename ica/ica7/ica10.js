document.getElementById('changeColorButton').addEventListener('click', function() {
    const targetParagraph = document.getElementById('targetParagraph');
    const colors = ['#ff5733', '#33ff57', '#5733ff', '#ff33cc', '#33ccff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    targetParagraph.style.backgroundColor = randomColor;
});

// Event listener to change the text content
document.getElementById('changeTextButton').addEventListener('click', function() {
    const targetParagraph = document.getElementById('targetParagraph');
    const newText = 'Click top left button to see more colors!';
    targetParagraph.textContent = newText;
});

