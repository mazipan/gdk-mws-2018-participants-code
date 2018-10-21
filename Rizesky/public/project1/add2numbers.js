function calculate() {
    if(this.name === 'in_1') {
        input1= this.value;
    } if(this.name === 'in_2') {
        input2= this.value;
    }
    if(input1 && input2) {
        result = parseFloat(input1) + parseFloat(input2);
        document.getElementById('hasil').innerHTML = result
    } else {
        document.getElementById('hasil').innerHTML = ''
    }
}

let result;
let input1;
let input2;

const allInput = document.getElementsByTagName('input')

for (let i = 0; i < allInput.length; i++) {
    allInput[i].addEventListener('keyup', calculate, false);
}

