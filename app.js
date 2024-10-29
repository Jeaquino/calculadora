const sumar = require('./modules/sumar');
const restar = require('./modules/restar');

const multiplicar = require('./modules/multiplicar');
const dividir = require('./modules/dividir');

const prompt = require('prompt-sync');

let num1 = prompt("Ingrese el primer valor: ")
let num2 = prompt("Ingrese el segundo valor: ")

sumar(+num1,+num2);