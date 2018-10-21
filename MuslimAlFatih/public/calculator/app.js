function sum() {
  // debugger;

  let inputNumber = document.querySelectorAll('input');
  let errorMessage = document.querySelector('.error-message');

  let inputFirst = parseInt(inputNumber[0].value);
  let inputSecond = parseInt(inputNumber[1].value);
  let total = inputFirst + inputSecond;

  if(!isNaN(total)) {
    inputNumber[2].value = total;
    errorMessage.innerHTML = "";
  } else {
    inputNumber[2].value = "";
    errorMessage.innerHTML = "Please input correct number!"
  }


}

let totalButton = document.querySelector('.total-button')
totalButton.addEventListener('click', sum)