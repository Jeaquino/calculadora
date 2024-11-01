const sumar = require("./modules/sumar");
const restar = require("./modules/restar");
const multiplicar = require("./modules/multiplicar");
const dividir = require("./modules/dividir");
const raiz = require("./modules/raiz");

const prompt = require("prompt-sync")();

console.log(`Bienvenido, a la calculadora. Esta aplicacion le permite realizar las siguientes operaciones
    1* Sumar
    2* Restar
    3* Dividir
    4* Multiplicar
    5* Raíz`);

let operacion = prompt("Seleccione alguna de las opciones para operar: ", null);

let num1 = prompt("Ingrese el primer valor: ", null);
let num2 = prompt("Ingrese el primer valor: ", null);

if (
  operacion.length == 0 ||
  num1.length == 0 ||
  num2.length == 0 ||
  isNaN(+operacion) ||
  isNaN(+num1) ||
  isNaN(+num2) 
) {
  console.log("No puedo continuar con la operacion");
} else {
  operacion = +operacion;
  num1 = +num1;
  num2 = +num2;

  switch (operacion) {
    case 1:
      console.log(sumar(num1, num2));
      break;
    case 2:
      console.log(restar(num1, num2));
      break;
    case 3:
      console.log(multiplicar(num1, num2));
      break;
    case 4:
      console.log(dividir(num1, num2));
      break;
    case 5:
      console.log(raiz(num1, num2));
      break;
    default:
      console.log(
        "La operacion indicada no corresponde a las opciones disponibles"
      );
  }
}
