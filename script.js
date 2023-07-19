// Get DOM elements
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
  //   counterValue = 0;
  counterNumber = 0;
};

reloadEl.addEventListener('click', handleClear);

// Incement counter
let counterValue = counterEl.textContent;
let counterNumber = Number(counterValue);

const handleCounter = e => {
  const button = e.target;
  const buttonValue = button.textContent;

  if (buttonValue === '+') {
    counterNumber += 1;
    counterEl.textContent = counterNumber;
  } else if (buttonValue === '-') {
    counterNumber -= 1;
    counterEl.textContent = counterNumber;
  }
};

buttonChangeArr.forEach(button => addEventListener('click', handleCounter));
