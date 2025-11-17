function mostrar(op) {
    if (op === "if") presionArterial();
    if (op === "for") temperaturasPacientes();
    if (op === "while") pacientesConFiebre();
    if (op === "switch") triage();
    if (op === "do") saturacionSpO2();
}


function presionArterial() {
    let sis = Number(prompt("Ingrese presión SISTÓLICA:"));
    let dia = Number(prompt("Ingrese presión DIASTÓLICA:"));

    let clas = "";

    if (sis < 120 && dia < 80) clas = "Normal";
    else if (sis < 130 && dia < 80) clas = "Elevada";
    else if (sis < 140 || dia < 90) clas = "Hipertensión Grado 1";
    else clas = "Hipertensión Grado 2";

    resultado.innerHTML = `
        <h2>Clasificación de Presión Arterial</h2>
        <p>Sistólica: <b>${sis}</b> mmHg</p>
        <p>Diastólica: <b>${dia}</b> mmHg</p>
        <p>Resultado: <b>${clas}</b></p>
    `;
}


function temperaturasPacientes() {
    let n = Number(prompt("¿Cuántos pacientes registrarás?"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let t = Number(prompt(`Temperatura del paciente ${i} (°C):`));
        suma += t;
    }

    let promedio = (suma / n).toFixed(1);

    resultado.innerHTML = `
        <h2>Temperaturas de Pacientes</h2>
        <p>Pacientes registrados: <b>${n}</b></p>
        <p>Promedio: <b>${promedio} °C</b></p>
    `;
}


function pacientesConFiebre() {
    let temp = Number(prompt("Ingrese temperatura (0 para terminar):"));
    let cont = 0;

    while (temp !== 0) {
        if (temp >= 38) cont++;
        temp = Number(prompt("Ingrese temperatura (0 para terminar):"));
    }

    resultado.innerHTML = `
        <h2>Pacientes con Fiebre</h2>
        <p>Total ≥ 38°C: <b>${cont}</b></p>
    `;
}


function triage() {
    let code = Number(prompt("Código TRIAGE (1-4):"));
    let tipo = "";

    switch (code) {
        case 1: tipo = "Rojo – Emergencia"; break;
        case 2: tipo = "Amarillo – Urgente"; break;
        case 3: tipo = "Verde – No urgente"; break;
        case 4: tipo = "Azul – Consulta general"; break;
        default: tipo = "Código inválido";
    }

    resultado.innerHTML = `
        <h2>Clasificación TRIAGE</h2>
        <p>Resultado: <b>${tipo}</b></p>
    `;
}


function saturacionSpO2() {
    let entrada;
    let lista = [];

    do {
        entrada = prompt("Ingrese SpO2 (%) o escriba 'no' para terminar:");

        if (entrada.toLowerCase() !== "no") {
            lista.push(Number(entrada));
        }

    } while (entrada.toLowerCase() !== "no");

    resultado.innerHTML = `
        <h2>Saturaciones SpO2 Registradas</h2>
        <p>Valores: <b>${lista.join(", ")}</b></p>
    `;
}
