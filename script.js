var numero1 = undefined;
var numero2 = undefined;
var operacion;
var caja = document.getElementById("resultado");

function clickNumero(numero) {
  caja.innerHTML = numero;
}

function operacion(sender) {
  numero1 = caja.innerHTML;
  operacion = sender;
  caja.innerHTML = operacion;
}
function limpiar() {
  caja.innerHTML = 0;
  numero1 = undefined;
  operacion = undefined;
  numero2 = undefined;
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
}
