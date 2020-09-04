calculator = document.getElementById("calculator");

function input(num) {
  calculator.value += num;
}

function clr() {
  calculator.value = "";
}


function result() {
  calculator.value = eval(calculator.value);
}



