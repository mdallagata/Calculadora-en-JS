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
const PERCENT = document
  .getElementById("%")
  .addEventListener("click", () => asignarOperacion("%"));
const SQUARE = document
  .getElementById("x²")
  .addEventListener("click", () => asignarOperacion("x²"));
const ROOT = document
  .getElementById("²√")
  .addEventListener("click", () => asignarOperacion("²√"));

const C = document
  .getElementById("c")
  .addEventListener("click", () => limpiar());
const RESULT = document
  .getElementById("result")
  .addEventListener("click", () => calcularResultado());

let _numero1;
let _numero2;
let _operador;
let _caja = document.getElementById("resultado");

function clickBtn(valor) {
  if (_caja.innerHTML === "0") {
    _caja.innerHTML = "";
  }
  _caja.innerHTML += valor;
}

function asignarOperacion(sender) {
  _numero1 = parseFloat(_caja.innerHTML);
  _caja.innerHTML = sender;
  _operador = sender;
}
function limpiar() {
  _caja.innerHTML = 0;
  _numero1 = 0;
  _numero2 = 0;
  _operador = undefined;
}

function calcularResultado() {
  _numero2 = parseFloat(_caja.innerHTML.substring(1));
  if (_operador != undefined) {
    _caja.innerHTML = _numero1 + _caja.innerHTML + "=";
  }

  switch (_operador) {
    case "+": {
      _caja.innerHTML += _numero1 + _numero2;
      break;
    }
    case "-": {
      _caja.innerHTML += _numero1 - _numero2;
      break;
    }
    case "*": {
      _caja.innerHTML += _numero1 * _numero2;
      break;
    }
    case "/": {
      _caja.innerHTML += _numero1 / _numero2;
      break;
    }
    case "%": {
      _caja.innerHTML += (_numero2 / 100) * _numero1;
      break;
    }
    case "x²": {
      _caja.innerHTML += _numero1 * _numero1;
      break;
    }
    case "²√": {
      _caja.innerHTML += Math.sqrt(_numero1);
      break;
    }

    default: {
      alert("Error, ingrese dos valores y un operador.");
    }
  }
}
