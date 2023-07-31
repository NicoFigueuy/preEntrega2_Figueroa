class vuelos {
    constructor(vuelo, origen, destino, precio) {
        this.vuelo = vuelo;
        this.origen = origen;
        this.destino = destino;
        this.precio = precio
    }
}

const vuelo1 = new vuelos(505, "Montevideo", "Buenos Aires", 250)
const vuelo2 = new vuelos(708, "Montevideo", "Rio de Janeiro", 350)
const vuelo3 = new vuelos(301, "Montevideo", "Santiago de Chile", 320)
const vuelo4 = new vuelos(405, "Montevideo", "Lima", 450)
const vuelo5 = new vuelos(209, "Montevideo", "Bogota", 500)
const vuelo6 = new vuelos(505, "Montevideo", "Caracas", 510)
const vuelo7 = new vuelos(505, "Montevideo", "Santa Cruz", 390)
const vuelo8 = new vuelos(505, "Montevideo", "Guayaquil", 560)
const vuelo9 = new vuelos(505, "Montevideo", "Asuncion", 350)
const vuelo10 = new vuelos(505, "Montevideo", "San Pablo", 390)

let arrayVuelos = [vuelo1, vuelo2, vuelo3, vuelo4, vuelo5, vuelo6, vuelo7, vuelo8, vuelo9, vuelo10,]




function buscarVuelos() {
    let destinoPrompt = prompt("Elija su destino en Sudamerica").toUpperCase().trim();
    let vueloEncontrado = arrayVuelos.find(ele => ele.destino.toUpperCase().includes(destinoPrompt));

    if (vueloEncontrado) {
        alert(`El vuelo numero ${vueloEncontrado.vuelo} con destino a ${vueloEncontrado.destino} parte de ${vueloEncontrado.origen} y tiene un costo de: $${vueloEncontrado.precio}`);
    } else {
        alert(`No tenemos un vuelo con destino a ${destinoPrompt}`);
    }
}

buscarVuelos()












