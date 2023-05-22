/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const horaActual = new Date().getHours();

if (horaActual >= 6 && horaActual < 12) {
    document.write('Buenos dias');
    
}else if(horaActual >= 12 && horaActual < 20){
    document.write('Buenas tardes');
}else {
    document.write('Buenas noches');
}


const currentTime = new Date();
const currentHour = currentTime.toLocalTimeString();
document.write(currentHour);