const preciosServicios = {
    terapiaUno: 20000,
    terapiaDos: 30000,
    terapiaTres: 40000,
    oficinaUno: 0,
    oficinaDos: 10000,
    oficinaTres: 20000,
    extraUno: 3000,
    extraDos: 6000,
    extraTres: 10000,
};

function calcularCostoTotal() {
    const formulario = document.getElementById("formulario");
    const terapiaSeleccionada = formulario.querySelector('input[name="terapia"]:checked');
    const oficinaSeleccionada = formulario.querySelector('input[name="oficina"]:checked');
    
    if (!terapiaSeleccionada || !oficinaSeleccionada) {
        alert("Debes seleccionar una terapia y una oficina.");
        return;
    }

    let costoTotal = preciosServicios[terapiaSeleccionada.value] + preciosServicios[oficinaSeleccionada.value];

    const checkboxes = formulario.querySelectorAll('input[name="extra"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        costoTotal += preciosServicios[checkboxes[i].value];
    }

    document.getElementById("costoTotal").textContent = "Costo Total: $" + costoTotal + " CLP";
}

function resetearCostoTotal() {
    document.getElementById("costoTotal").textContent = "Costo Total: $0 CLP";
}
