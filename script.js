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

// Incement counter
let counterValue = counterEl.textContent;
let counterNumber = Number(counterValue);

const handleCounter = e => {
  const button = e.target;
  const buttonValue = button.textContent;

  if (buttonValue === '+' && counterNumber >= 0) {
    counterNumber += 1;
    counterEl.textContent = counterNumber;
  } else if (buttonValue === '-' && counterNumber > 0) {
    counterNumber -= 1;
    counterEl.textContent = counterNumber;
  }

  if (counterNumber === 5) {
    headingEl.innerHTML = 'Limit! Buy <span class="display__heading--bold">Pro</span> for > 5';
  }
};

buttonChangeArr.forEach(button => addEventListener('click', handleCounter));
