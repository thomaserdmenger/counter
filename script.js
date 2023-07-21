// Get DOM elements
const headingEl = document.querySelector('.display__heading');
const counterEl = document.querySelector('.display__number');
const reloadEl = document.querySelector('.button--reload');
const buttonChangeArr = document.querySelectorAll('.button--change');

// Rotate reload button
const rotateReload = () => {
  reloadEl.classList.add('display__reload--animation');
};

const resetReload = () => {
  reloadEl.classList.remove('display__reload--animation');
};

const delayResetReload = () => {
  setTimeout(resetReload, 1500);
};

reloadEl.addEventListener('mousedown', rotateReload);
reloadEl.addEventListener('mouseup', delayResetReload);

// Clear counter
const handleClear = () => {
  counterEl.textContent = 0;
  counterNumber = 0;
  headingEl.textContent = 'Counter';
};

reloadEl.addEventListener('click', handleClear);

// Increment and decrement counter
let counterValue = counterEl.textContent;
let counterNumber = Number(counterValue);

// Helper functions
const incrementCounter = () => {
  counterNumber += 1;
  counterEl.textContent = counterNumber;
};

const decrementCounter = () => {
  counterNumber -= 1;
  counterEl.textContent = counterNumber;
};

const proMessage = () => {
  headingEl.innerHTML = 'Limit! Buy <span class="display__heading--bold">Pro</span> for > 5';
};

const handleCounter = e => {
  const button = e.target;
  const buttonValue = button.textContent;

  if (buttonValue === '+' && counterNumber >= 0 && counterNumber <= 4) {
    incrementCounter();
  } else if (buttonValue === '-' && counterNumber > 0) {
    decrementCounter();
  }

  if (counterNumber === 5) {
    proMessage();
  }
};

buttonChangeArr.forEach(button => addEventListener('click', handleCounter));

// Increase counter with space key
const handleSpaceBar = e => {
  e.preventDefault();

  if (e.keyCode === 32 && counterNumber >= 0 && counterNumber <= 4) {
    incrementCounter();
  }

  if (counterNumber === 5) {
    proMessage();
  }
};

window.addEventListener('keydown', handleSpaceBar);

// Increase counter with cursor control keys up
const handleCursorKeys = e => {
  if (e.keyCode === 38 && counterNumber >= 0 && counterNumber <= 4) {
    incrementCounter();
  }

  if (e.keyCode === 40 && counterNumber > 0) {
    decrementCounter();
  }

  if (counterNumber === 5) {
    proMessage();
  }
};

window.addEventListener('keydown', handleCursorKeys);
