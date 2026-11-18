
// Seleccionar los campos del formulario
const campoNombre = document.querySelector("#campo-nombre");
const campoParcial1 = document.querySelector("#campo-parcial1");
const campoParcial2 = document.querySelector("#campo-parcial2");

// Seleccionar los botones
const botonRegistrar = document.querySelector("#boton-registrar");
const botonReiniciar = document.querySelector("#boton-reiniciar");

// Seleccionar el contenedor de tarjetas
const listaTarjetas = document.querySelector("#lista-tarjetas");

// Evento para registrar alumnos
botonRegistrar.addEventListener("click", () => {

    // Capturar los valores
    const nombre = campoNombre.value;
    const parcial1 = Number(campoParcial1.value);
    const parcial2 = Number(campoParcial2.value);

    // Calcular el promedio
    const promedio = ((parcial1 + parcial2) / 2).toFixed(1);

    // Comprobar si el alumno aprobo o reprobo
    if (promedio >= 6.0) {

        listaTarjetas.innerHTML += `
            <div class="tarjeta estado-positivo">
                <h3>${nombre}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Aprobado</p>
            </div>
        `;

    } else {

        listaTarjetas.innerHTML += `
            <div class="tarjeta estado-alerta">
                <h3>${nombre}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Reprobado</p>
            </div>
        `;
    }

    // Limpiar los campos
    campoNombre.value = "";
    campoParcial1.value = "";
    campoParcial2.value = "";

    // Regresar el cursor al nombre
    campoNombre.focus();

});

// Evento para borrar la lista
botonReiniciar.addEventListener("click", () => {

    listaTarjetas.innerHTML = "";

});
