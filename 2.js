function convertirTempCaF(gCelsius) {
    gCelsius = gCelsius*9/5+32
    return gCelsius
}

function convertirTempCaK(gCelsius) {
    gCelsius = gCelsius*1 + 273.15
    return gCelsius
}


    
    let gCelsius = prompt("temperatura en celsius")
 
    while(isNaN(gCelsius)) {
        gCelsius = prompt(`${gCelsius} no es un numero, inténtelo denuevo`);
    }

console.log(`${convertirTempCaF(gCelsius)}ºƒ\n`, `${convertirTempCaK(gCelsius)}ºK`)
