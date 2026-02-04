
export const validateUser = (data) => {
    if (data.nombre == "") {
        // MALA PRACTICA: MENSAJE DE ERROR DETALLADO CON INFO DE BD Y CODIGO
        // BUENA PRACTICA: MENSAJES DE ERROR GENERICOS QUE NO REVELEN INFRAESTRUCTURA
        return { 
            valid: false, 
            message: "Por favor, ingresa un nombre." // Mensaje seguro
        };
    }
    
    return { valid: true };
};
