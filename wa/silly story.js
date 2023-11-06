const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const ukRadio = document.getElementById('uk');

function randomValueFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  

const storyText =
  "I went to Florida this summer which was humid and always above 100 Fahrenheit, so :insertx: decided to go to the beach. As we were swimming, we started dreaming about :inserty:, my brain , then :insertz:. Bob tried to save me from my own mind but it was too late — :insertx: told me thoughts weighed about 200 pounds on that humid, sunny day in Florida.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

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

  if (document.getElementById("uk").checked) {
    const weight = Math.round(200/14) + " stone";
    newStory = newStory.replace("200 pounds", weight);
    const temperature = Math.round("100-32") * (5/9) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature);
  }
  

  story.textContent = newStory;
  story.style.visibility = 'visible'
}



