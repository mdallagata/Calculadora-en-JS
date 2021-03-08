let numero1;
let numero2;
var operacion;
var caja = document.getElementById("resultado");

function clickNumero(numero) {
  if (caja.innerHTML == 0) {
    caja.innerHTML = "";
  }
  caja.innerHTML += numero;
}

function operacion(sender) {
  numero1 = caja.innerHTML;
  operacion = sender;
  caja.innerHTML = operacion;
}
function limpiar() {
  caja.innerHTML = 0;
}

function calcularResultado() {
  numero2 = caja.innerHTML;
  switch (operacion) {
    case "+": {
      caja.innerHTML = parseInt(numero1) + parseInt(numero2);
      break;
    }
    case "-": {
      caja.innerHTML = parseInt(numero1) - parseInt(numero2);
      break;
    }
    case "/": {
      caja.innerHTML = parseInt(numero1) / parseInt(numero2);
      break;
    }
    case "*": {
      caja.innerHTML = parseInt(numero1) * parseInt(numero2);
      break;
    }
  }
  alert(numero1);
  alert(numero2);
}
