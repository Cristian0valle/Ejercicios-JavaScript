
class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.inciada = false;
        this.instalada = false;
    }

    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desintalada correctamente");
        }
    }

    abrir() {
        if (this.inicidada == false && this.instalada == true) {
            this.iniciada = true;
            alert("App iniciada");
        }
    }

    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }

    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b></br>
         `
    }
}

app = new App("17.099", "5 Estrellas", "900 MB");
app2 = new App("23.00", "3 Estrellas", "1220 MB");
app3 = new App("20.00", "4 Estrellas", "840 MB");
app4 = new App("17.099", "3 Estrellas", "1 GB");
app5 = new App("17.099", "5 Estrellas", "456 MB");
app6 = new App("43.099", "4 Estrellas", "900 MB");

document.write(
        `
        ${app.appInfo()} <br>
        ${app2.appInfo()} <br>
        ${app3.appInfo()} <br>
        ${app4.appInfo()} <br>
        ${app5.appInfo()} <br>
        ${app6.appInfo()} <br>
        `
        );