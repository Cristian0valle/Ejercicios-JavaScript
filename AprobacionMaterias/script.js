/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



const materias = {
    fisica: [90, 6, 3, "fisica"],
    matematica: [34, 9, 2, "matematicas"],
    lenguaje: [92, 4, 3, "lenguaje"],
    quimica: [91, 6, 4, "quimica"],
    biologia: [75, 9, 1, "biologia"]

}

const aprobo = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >= 90) {
            console.log("%c asistencias en orden", "color:green");
        } else {
            console.log("%c falta de asistencia", "color:red");
        }
        if (promedio >= 7) {
            console.log("%c Promedio en orden", "color:green");

        } else {
            console.log("%c Promedio desaprobado", "color: red");
        }
    }
}

aprobo()