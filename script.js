var numero1 = undefined;
var numero2 = undefined;
var operacion;
var resultado = document.getElementById("resultado");

function clickNumero(numero) {
  if (
    resultado.innerHTML === 0 ||
    resultado.innerHTML === "+" ||
    resultado.innerHTML === "-" ||
    resultado.innerHTML === "*" ||
    resultado.innerHTML === "/"
  ) {
    resultado.innerHTML = numero;
  } else {
    resultado.innerHTML += numero;
  }
}

function operacion(sender) {
  numero1 = resultado.innerHTML;
  operacion = sender;
  resultado.innerHTML = operacion;
}

function calcularResultado() {
  numero2 = resultado.innerHTML;
  alert(numero1);
  alert(numero2);
  switch (operacion) {
    case "+": {
      break;
    }
    case "-": {
      resultado.innerHTML = numero1 - numero2;
      break;
    }
    case "/": {
      resultado.innerHTML = numero1 / numero2;
      break;
    }
    case "*": {
      resultado.innerHTML = numero1 * numero2;
      break;
    }
  }
}
