/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


class Celular {
    constructor(color, peso, tamaño, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;

        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando celular");

        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto() {
        alert(`Foto tomada en resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo() {
        alert(`grabanado video en ${this.resolucionDeCamara}`);
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</br></br>
        Peso: <b>${this.peso}</br></br>
        Tamaño: <b>${this.tamaño}</br></br>
        Memoria Ram: <b>${this.ram}</br></br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</br></br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, tamaño, rdc, ram, rdce) {
        super(color, peso, tamaño, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento() {
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial");

    }
    infoAltaGama() {
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
    }
}

celular1 = new CelularAltaGama("rojo", "130g", "5.2", "4K", "3GB", "Full HD");
celular2 = new CelularAltaGama("negro", "142g", "6", "4K", "4GB", "HD");

document.write(`
    ${celular1.infoAltaGama()}<br><br>
    ${celular2.infoAltaGama()}<br>`
        )

    