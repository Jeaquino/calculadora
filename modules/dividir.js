function division(num1,num2){
    if(num2 == 0){
        return "La operacion indica no es valida, no se pude dividir por 0"
    }
    
    return num1 / num2;
}

module.exports = division;