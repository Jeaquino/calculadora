const sumar = require("./modules/sumar");
const restar = require("./modules/restar")

function imprimir(num1,num2,cb){
    console.log(cb(num1,num2));
}

imprimir(1,2,sumar)
imprimir(1,2,restar)

const numeros = [1,2,3,4,5,6]

const numerosPares = numeros.filter(function (elemento) { 
    if(elemento % 2 == 0){
        return elemento
    }
});

const numerosImpares = numeros.filter(elemento => elemento % 2 != 0);

console.log(numerosPares);
console.log(numerosImpares);
