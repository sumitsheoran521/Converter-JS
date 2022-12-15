const from = document.getElementById("from");
const to = document.getElementById("to");
const inputNumber = document.getElementById("input-number");
const resultBox = document.getElementById("result-box");

document.getElementById("convert").addEventListener("click", () => {
  // check from
  let fromValue = from.value;
  // check to
  let toValue = to.value;
  // check input number
  let inputValue = inputNumber.value;
  // convert input number "from" to "to"
  let result = convertBase(fromValue, toValue, inputValue);
  // show the result in result box
  resultBox.innerText = result;
});

function convertBase(fromBase, toBase, num) {
  // d is for decimal
  let d = parseInt(num, fromBase); // converting number into base10
  let res = d.toString(toBase); // converting base10 to required base
  return res;
}

// Swap Button Logics
document.getElementById("swap").addEventListener("click", () => {
  let temp = from.value;
  from.value = to.value;
  to.value = temp;
});
