const targetEarn = document.querySelector('.currency.stats__students--text')?.textContent.replaceAll(' ', '');
const currentEarn = document.querySelector('.stats__students--count.currency')?.textContent.replaceAll(' ', '');
const filledBar = document.querySelector('.filled-bar');

const lengthFilledBar = currentEarn / targetEarn * 100;
filledBar.style.width = `${lengthFilledBar}%`;

