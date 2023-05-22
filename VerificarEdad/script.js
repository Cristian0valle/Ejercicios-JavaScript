/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var edad
const horaActual = new Date().getHours();
edad = prompt('Ingrese su edad: ')
acceso(edad, horaActual)

const currentTime = new Date();
const currentHour = currentTime.toLocaleTimeString();
document.write(currentHour);

function acceso(edad, horaActual) {
    if (edad >= 18 && horaActual == 2) {
        document.write('Ud ha tenido la suerte de pasar gratis');
    } else
    {
        if (edad < 18) {
            document.write('Ud es menor de edad, no puede ingresar ');
        } else {
            document.write('Ud puede pasar pero debe cancelar la entrada ');
        }
    }
}