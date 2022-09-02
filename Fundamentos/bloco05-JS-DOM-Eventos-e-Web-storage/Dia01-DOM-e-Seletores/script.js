const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencias = document.getElementsByClassName('emergency-tasks')[0]
    emergencias.style.backgroundColor = 'rgb(255, 153, 230)';

const naoEmergencias = document.getElementsByClassName('no-emergency-tasks')[0];
    naoEmergencias.style.backgroundColor = 'rgb(255, 214, 51)';

const rodape = document.getElementById('footer-container');
    rodape.style.backgroundColor = 'rgb(0, 51, 51)'

const emergenciasHeader = document.querySelectorAll('.emergency-tasks h3')
    for (let index = 0; index < emergenciasHeader.length; index += 1) {
  emergenciasHeader[index].style.backgroundColor = 'rgb(165, 0, 243'}

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
    for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)'}

