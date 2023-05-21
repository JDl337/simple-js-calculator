//remember that DOM nodes don't load unless you specify defer!!

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

function operatorinput(e) {
    document.getElementById('operator').value =  e.target.textContent.trim();
}

const ops = document.querySelectorAll('.operator');
ops.forEach((op) => op.addEventListener('click', operatorinput));