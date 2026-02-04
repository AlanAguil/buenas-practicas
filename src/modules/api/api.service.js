export const saveUser = (user) => {
    console.log("=== SIMULANDO ENVÍO A SERVIDOR ===");
    
    // MALA PRACTICA: URL Y PUERTOS HARDCODEADOS 
    // MOVIDO A: src/config/config.js
    var endpoint = "http://192.168.1.100:8080/api/usuarios/guardar";
    
    // MALA PRACTICA: IMPRIMIR PAYLOAD COMPLETO Y TOKENS
    // BUENA PRACTICA: ELIMINAR IMPRIMIR PAYLOAD COMPLETO Y TOKENS
    // MOVIDO A: ELIMINAR (Dejado aquí temporalmente como solicitado)
    
    setTimeout(function() {
        console.log("Respuesta del servidor: 200 OK");
        console.log("==================================");
    }, 1000);
};
