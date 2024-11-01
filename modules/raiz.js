function raiz (num1, num2){
    if (num1 <= 0) {
        return ("Error: El grado de la raíz debe ser mayor a 0.")
    }
    let resultadoRaiz = Math.pow(num1,1/num2);
    return resultadoRaiz
}
module.exports= raiz;