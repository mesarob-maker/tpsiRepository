let count = 0;

const counterDisplay = document.getElementById('counter');
const btnInc = document.getElementById('btn-increment');
const btnDec = document.getElementById('btn-decrement');

btnInc.onclick = function() {
  count++;
  counterDisplay.textContent = count;
};

btnDec.onclick = function() {
  count--;
  counterDisplay.textContent = count;
};