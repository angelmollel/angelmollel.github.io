const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const usRadio = document.getElementById('us');
const ukRadio = document.getElementById('uk');

const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if (customName.value.trim() !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name); 
  }

  if (ukRadio.checked) {
    const weightInPounds = 300;
    const temperatureInFahrenheit = 94;

    const weightInStones = Math.round(weightInPounds / 14) + ' stone';
    const temperatureInCelsius = Math.round(((temperatureInFahrenheit - 32) * 5 / 9)) + ' centigrade';

    newStory = newStory.replaceAll('94 fahrenheit', temperatureInCelsius);
    newStory = newStory.replaceAll('300 pounds', weightInStones);
  }

  story.textContent = newStory;
}
