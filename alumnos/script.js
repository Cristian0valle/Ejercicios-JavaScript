/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const obtenerInformacion = (materia)=>{
    materias={
        fisica:["Perez", "pedro", "kie", "ñafle"],
        programacion:["hugo", "mateo", "cris", "robian"],
        quimica:["ardin", "alos", "cadrin", "erna"]
    }
    
    if (materia[materias]!== undefined) {
        return[materias[materia], materia];
    }else{
        return false;
    }
}

const mostrarInformacion=(materia)=>{
    let informacion=obtenerInformacion(materia);
    if (informacion!==false) {
        let profesor = informacion[0][0];
        alumnos=informacion[0];
        alumnos.shift();
        document.write(`el profesor de <b>${informacion[1]}</b> es: <b style="color:red>${profesor}</b><br: los alumnos son: <b style="color:blue">${alumnos}</br><br><br>`);
        
    }
    const cantidadDeClases
}




mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("quimica");
