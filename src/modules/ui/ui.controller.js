
export const renderUserRow = (registro) => {
    var tabla = document.getElementById('tablaRegistros');
    
    // MALA PRACTICA: CONCATENACION DE HTML (RIESGO DE XSS SI LOS DATOS NO ESTAN SANITIZADOS)
    // BUENA PRACTICA: USAR MÉTODOS SEGUROS DEL DOM COMO textContent (VALIDACION DE ENTRADA/SALIDA)
    // Aunque movemos el código, la vulnerabilidad persiste y debe ser arreglada manualmente después.
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    // MALA PRACTICA: LOGS EN CONSOLA
    // BUENA PRACTICA: ELIMINAR LOGS EN CONSOLA
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    console.log("Fila agregada a la tabla");
};

export const getFormData = () => {
    return {
        nombre: document.getElementById('nombre').value,
        apellido1: document.getElementById('apellido1').value,
        apellido2: document.getElementById('apellido2').value,
        telefono: document.getElementById('telefono').value,
        curp: document.getElementById('curp').value,
        email: document.getElementById('email').value
    };
};

export const resetForm = () => {
    document.getElementById('registroForm').reset();
};
