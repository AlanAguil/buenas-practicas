
let contador = 0; // Estado interno del módulo para IDs

export const createUser = (data) => {
    const nuevoRegistro = {
        id: contador++,
        nombre: data.nombre,
        apellido1: data.apellido1,
        apellido2: data.apellido2,
        // Combinación de nombre completo
        nombreCompleto: data.nombre + " " + data.apellido1 + " " + data.apellido2,
        telefono: data.telefono,
        curp: data.curp,
        email: data.email,
        fechaRegistro: new Date().toISOString(),
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    return nuevoRegistro;
};
