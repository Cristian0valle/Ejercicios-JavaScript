/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let tp = "100 minutos hacer ejercicios practicos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de tareas domesticas xd";
let descanso = "10 minutos de descanso";

console.log("Tareas");

for (var i = 0; i < 14; i++) {
    if (i == 0) {
        console.group("Semana 1");
    }
    console.groupCollapsed("Día " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    
    if (i == 7) {
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}

console.groupEnd();
console.groupEnd();