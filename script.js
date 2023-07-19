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
};

reloadEl.addEventListener('click', handleClear);
