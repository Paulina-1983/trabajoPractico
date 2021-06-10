module.exports = {
    suma : (a,b) => a + b,
    resta : (a,b) => a - b,
    multiplicacion : (a,b) => a * b,
    division : (a,b) => (a == 0 || b == 0) ? 'No es posible dividir por 0' : a / b
}