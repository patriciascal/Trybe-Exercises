// SOMA DOS ÂNGULOS INTERNOS DE UM TRIANGULO // 

let anguloA = 90;
let anguloB = 30;
let anguloC = 60;

let somaAngulos = anguloA + anguloB + anguloC;
let angulospositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulospositivos) {
    if (somaAngulos === 180) {
        console.log ('Positive')
    } else {
        console.log ('Negative')
    }
} else {
    console.log ('Error')
}