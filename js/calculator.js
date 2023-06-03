//copied from javascript.info exercise
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
  };

  this.calculate = function(str) {

    let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

function eval() {
  const a = document.getElementById('op1').value;
  const b = document.getElementById('op2').value;
  const op = document.getElementById('operator').value;

  const cal = new Calculator();

  return cal.calculate(`${a} ${op} ${b}`);
}

function update(newresult) {
  const result = document.getElementById('op1');
  const clr1 = document.getElementById('op2');
  const clr2 = document.getElementById('operator');

  result.value = newresult;
  clr1.value = "";
  clr2.value = "";
}

function equals() {
  const res = eval();
  update(res);
}
const equal = document.getElementById('equals');
equal.addEventListener('click', equals);


function clear() {
  const op = document.getElementById('operator');
  const operand1 = document.getElementById('op1');
  const operand2 = document.getElementById('op2');

  op.value = "";
  operand1.value = "";
  operand2.value = "";
}

const clr = document.getElementById('clear');
clr.addEventListener('click', clear);


function operatorInput(e) {
  const op = document.getElementById('operator');
  const operand2 = document.getElementById('op2');
  if (op.value !== "" && operand2.value !== "") {
    equals();
    op.value =  e.target.textContent.trim();
  } else {
    op.value =  e.target.textContent.trim();
  }
}

const ops = document.querySelectorAll('.operator');
ops.forEach((op) => op.addEventListener('click', operatorInput));


function numberInput(e) {
  const op = document.getElementById('operator');
  const operand1 = document.getElementById('op1');
  const operand2 = document.getElementById('op2');

  if (op.value === "" || operand1.value === "") {
    operand1.value += e.target.textContent.trim();
  } else {
    operand2.value += e.target.textContent.trim();
  }
}

const nums = document.querySelectorAll('.number');
nums.forEach((num) => num.addEventListener('click', numberInput));

function backspace() {
  const op = document.getElementById('operator');
  const operand1 = document.getElementById('op1');
  const operand2 = document.getElementById('op2');

  if (op.value === "") {
    operand1.value = operand1.value.slice(0,-1);
  } else if (op2.value === "" ){
    op.value = "";
  } else {
    operand2.value = operand2.value.slice(0,-1);
  }
}

const bksp = document.getElementById('backspace');
bksp.addEventListener('click', backspace);
