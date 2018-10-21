function calculate() {
    if(this.name === 'input1') {
        input1= this.value;
    } if(this.name === 'input2') {
        input2= this.value;
    }
    if(input1 && input2) {
        result = parseFloat(input1) + parseFloat(input2);
        document.getElementById('result').innerHTML = result
    } else {
        document.getElementById('result').innerHTML = '...'
    }
}

let result;
let input1;
let input2;

const allInput = document.getElementsByTagName('input')

for (let i = 0; i < allInput.length; i++) {
    allInput[i].addEventListener('keyup', calculate, false);
}

