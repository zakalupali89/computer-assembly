const currentEarn = document.querySelector('.main-screen__money>div:first-child .currency')?.textContent.replaceAll(' ', '');
const targetEarn = document.querySelector('.main-screen__money>div:last-child .currency')?.textContent.replaceAll(' ', '');
const filledBar = document.querySelector('.filled-bar');
const lengthFilledBar = currentEarn / targetEarn * 100;
filledBar.style.width = `${lengthFilledBar}%`;

