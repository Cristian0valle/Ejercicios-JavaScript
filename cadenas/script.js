/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let cadena = "cadena de prueba prueba";

let cadena2 = " ";

resultado = cadena.concat(" hola");
resultado2 = cadena.concat(cadena2);
resultado3 = cadena.startsWith(cadena2);
resultado4 = cadena.endsWith(cadena2);
resultado5 = cadena.includes("prueba");
resultado6 = cadena.indexOf("prueba");
resultado7 = cadena.lastIndexOf("prueba");


document.write(resultado + "<br>");
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");
document.write(resultado4 + "<br>");
document.write(resultado5 + "<br>");
document.write(resultado6 + "<br>");
document.write(resultado7 + "<br>");