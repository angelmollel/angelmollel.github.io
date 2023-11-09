const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg', 'pic10.jpg'];
const altTextObject = {
  'pic1.jpg': 'My Sisters and I in Tanzania',
  'pic2.jpg': 'Kelsey in Sevilla',
  'pic3.jpg': 'Standing next to the Thinker in Paris',
  'pic4.jpg': 'Some Building',
  'pic5.jpg': 'The Eiffel Tower',
  'pic6.jpg': 'Amsterdam in the Day',
  'pic7.jpg': 'Cameras in Amsterdam',
  'pic8.jpg': 'Zoe in Sevilla',
  'pic9.jpg': 'Morrocco',
  'pic10.jpg': 'Study Abroad Friends in Morrocco',
};

for (let i = 0; i < imageArray.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageArray[i]);
  newImage.setAttribute('alt', altTextObject[imageArray[i]]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function () {
    console.log('Thumbnail clicked!');
    displayedImage.src = this.src;
    displayedImage.alt = this.alt;
  });
}

btn.addEventListener('click', function () {
  console.log('Button clicked!');
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
