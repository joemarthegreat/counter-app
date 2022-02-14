let counter = document.getElementById("counter-number");
let count = 0;
let saveResult = document.getElementById("save-result");
//increment the number function 
function increment() {
  count += 1;
  counter.innerText = count;
}
//saving function
function save() {
  saveResult.textContent += count + "-";
  counter.innerText = 0;
  count = 0;
}
