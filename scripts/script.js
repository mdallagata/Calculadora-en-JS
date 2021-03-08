const NUM0 = document
  .getElementById("0")
  .addEventListener("click", () => clickNumero(0));
const NUM1 = document
  .getElementById("1")
  .addEventListener("click", () => clickNumero(1));
const NUM2 = document
  .getElementById("2")
  .addEventListener("click", () => clickNumero(2));
const NUM3 = document
  .getElementById("3")
  .addEventListener("click", () => clickNumero(3));
const NUM4 = document
  .getElementById("4")
  .addEventListener("click", () => clickNumero(4));
const NUM5 = document
  .getElementById("5")
  .addEventListener("click", () => clickNumero(5));
const NUM6 = document
  .getElementById("6")
  .addEventListener("click", () => clickNumero(6));
const NUM7 = document
  .getElementById("7")
  .addEventListener("click", () => clickNumero(7));
const NUM8 = document
  .getElementById("8")
  .addEventListener("click", () => clickNumero(8));
const NUM9 = document
  .getElementById("9")
  .addEventListener("click", () => clickNumero(9));
const SUM = document
  .getElementById("+")
  .addEventListener("click", () => asignarOperacion("+"));
const REST = document
  .getElementById("-")
  .addEventListener("click", () => asignarOperacion("-"));
const MULT = document
  .getElementById("*")
  .addEventListener("click", () => asignarOperacion("*"));
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

function clickNumero(numero) {
  if (caja.innerHTML === "0") {
    caja.innerHTML = "";
  }
  caja.innerHTML += numero;
}

function asignarOperacion(sender) {
  numero1 = parseInt(caja.innerHTML);
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
  numero2 = parseInt(caja.innerHTML);
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
    case "/": {
      caja.innerHTML = numero1 / numero2;
      break;
    }
    case "*": {
      caja.innerHTML = numero1 * numero2;
      break;
    }
    default: {
      alert("xd");
    }
  }
}
