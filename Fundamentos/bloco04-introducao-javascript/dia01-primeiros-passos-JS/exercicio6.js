const pecaxadrez = 'rainha'

switch (pecaxadrez.toLowerCase()) { 
    case 'rei':
    console.log ('Uma casa para qualquer direção');

    break;

case 'rainha':
    console.log ('Diagonal, horizontal e vertical');
    break;

case 'bispo':
    console.log ('Diagonal');
    break;

case 'torre':
    console.log ('Somente em linha reta')
    break;

case 'cavalo':
    console.log ('Em L (duas casas em linha reta e uma para o lado');
    break;

case 'peão':
    console.log ('Uma casa para frente (duas no inicio da jogada)');
    break;

default:
    console.log ('Erro. Peça inválida') }