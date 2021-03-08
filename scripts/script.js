const NUM0 = document
  .getElementById("0")
  .addEventListener("click", () => clickBtn(0));
const NUM1 = document
  .getElementById("1")
  .addEventListener("click", () => clickBtn(1));
const NUM2 = document
  .getElementById("2")
  .addEventListener("click", () => clickBtn(2));
const NUM3 = document
  .getElementById("3")
  .addEventListener("click", () => clickBtn(3));
const NUM4 = document
  .getElementById("4")
  .addEventListener("click", () => clickBtn(4));
const NUM5 = document
  .getElementById("5")
  .addEventListener("click", () => clickBtn(5));
const NUM6 = document
  .getElementById("6")
  .addEventListener("click", () => clickBtn(6));
const NUM7 = document
  .getElementById("7")
  .addEventListener("click", () => clickBtn(7));
const NUM8 = document
  .getElementById("8")
  .addEventListener("click", () => clickBtn(8));
const NUM9 = document
  .getElementById("9")
  .addEventListener("click", () => clickBtn(9));
const DOT = document
  .getElementById(".")
  .addEventListener("click", () => clickBtn("."));
const SUM = document
  .getElementById("+")
  .addEventListener("click", () => asignarOperacion("+"));
const REST = document
  .getElementById("-")
  .addEventListener("click", () => asignarOperacion("-"));
const MULT = document
  .getElementById("*")
  .addEventListener("click", () => asignarOperacion("*"));
const DIVIDE = document
  .getElementById("/")
  .addEventListener("click", () => asignarOperacion("/"));
const C = document
  .getElementById("c")
  .addEventListener("click", () => limpiar());
const RESULT = document
  .getElementById("result")
  .addEventListener("click", () => calcularResultado());

let numero1;
let numero2;
let operacion;
let caja = document.getElementById("resultado");

function clickBtn(valor) {
  if (caja.innerHTML === "0") {
    caja.innerHTML = "";
  }
  caja.innerHTML += valor;
}

function asignarOperacion(sender) {
  numero1 = parseFloat(caja.innerHTML);
  caja.innerHTML = "";
  operacion = sender;
  //caja.innerHTML = operacion;
}
function limpiar() {
  caja.innerHTML = 0;
  numero1 = 0;
  numero2 = 0;
  operacion = undefined;
}

function calcularResultado() {
  numero2 = parseFloat(caja.innerHTML);
  console.log(numero1, numero2);
  switch (operacion) {
    case "+": {
      caja.innerHTML = numero1 + numero2;
      break;
    }
    case "-": {
      caja.innerHTML = numero1 - numero2;
      break;
    }
    case "*": {
      caja.innerHTML = numero1 * numero2;
      break;
    }
    case "/": {
      caja.innerHTML = numero1 / numero2;
      break;
    }

    default: {
      alert("xd");
    }
  }
}
