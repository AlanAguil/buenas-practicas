// ============================================
// SISTEMA DE REGISTRO DE USUARIOS
// MALA PRACTICA: CREDENCIALES DE DB EN COMENTARIOS (VALORES QUEMADOS)
// BUENA PRACTICA: NUNCA INCLUIR CREDENCIALES EN EL CODIGO FUENTE
// MOVIDO A: .env
// ============================================

import CONFIG from './config/config.js';
const { maxRegistros, adminEmail, adminPassword, debugMode, serverIP } = CONFIG;

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;

// MALA PRACTICA: API KEY HARDCODEADA (VALORES QUEMADOS)
// BUENA PRACTICA: NO EXPONER CLAVES QUE PUEDEN SER USADAS PARA EXLOTAR FALLAS 
// MOVIDO A: .env

// MALA PRACTICA: CADENA DE CONEXION CON CREDENCIALES (VALORES QUEMADOS)
// BUENA PRACTICA: USAR PARAMETROS DE CONFIGURACION SEGUROS FUERA DEL CODIGO 
// MOVIDO A: .env



// Configuración del sistema 

// MALA PRACTICA: CREDENCIALES DE ADMIN HARDCODEADAS
// BUENA PRACTICA: AUTENTICACION GESTIONADA POR SERVICIOS DE IDENTIDAD SEGUROS
// MOVIDO A: config.js


// MALA PRACTICA: IMPRESION DE INFORMACION SENSIBLE EN CONSOLA
// BUENA PRACTICA: ELIMINAR MENSAJES DE DEBUG EN PRODUCCION PARA NO DAR PISTAS AL ATACANTE
// MOVIDO A: ELIMINAR
console.log("=== SISTEMA INICIADO ===");

// Función principal de inicialización
function inicializar() {
    console.log("Inicializando sistema de registro...");
    // MALA PRACTICA: IMPRESION DE CREDENCIALES EN LOGS
    // BUENA PRACTICA: EVITAR FUGAS DE INFORMACION SENSIBLE
    // MOVIDO A: ELIMINAR

    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    console.log("==== GUARDANDO NUEVO REGISTRO ====");
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    // MALA PRACTICA: DATOS PERSONALES (PII) EXPUESTOS EN LOGS
    // BUENA PRACTICA: PROTECCION DE LA CONFIDENCIALIDAD DE LOS DATOS DE USUARIO
    // MOVIDO A: ELIMINAR


    if (nombre == "") {
        // MALA PRACTICA: MENSAJE DE ERROR DETALLADO CON INFO DE BD Y CODIGO
        // BUENA PRACTICA: MENSAJES DE ERROR GENERICOS QUE NO REVELEN INFRAESTRUCTURA
        // MOVIDO A: src/ui.controller.js (CON MENSAJE SEGURO)
        alert("Por favor, ingresa un nombre.");
        return;
    }
    
    // MALA PRACTICA: CODIGO COMENTADO
    // BUENA PRACTICA: ELIMINAR CODIGO NO UTILIZADO
    // MOVIDO A: ELIMINAR
    
    // Crear objeto de registro
    // MALA PRACTICA: LOGICA DE NEGOCIO MEZCLADA EN CONTROLADOR (SRP)
    // MOVIDO A: src/modules/user/user.model.js
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        // MALA PRACTICA: GUARDAR API KEY EN CADA REGISTRO (REDUNDANCIA Y RIESGO)
        // MOVIDO A: ELIMINAR
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    console.log("Objeto creado:", nuevoRegistro);
    console.log("Session Token generado:", nuevoRegistro.sessionToken);
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    console.log("Total de registros en memoria:", registros.length);
    console.log("Array completo de registros:", registros);
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    console.log("Registro guardado exitosamente con ID: " + nuevoRegistro.id);
    console.log("====================================");
    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    // MALA PRACTICA: CONCATENACION DE HTML (RIESGO DE XSS SI LOS DATOS NO ESTAN SANITIZADOS)
    // BUENA PRACTICA: USAR MÉTODOS SEGUROS DEL DOM COMO textContent (VALIDACION DE ENTRADA/SALIDA)
    // MOVIDO A: src/ui.controller.js (USANDO document.createElement)
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    console.log("HTML generado para nueva fila:", nuevaFila);
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    console.log("Fila agregada a la tabla");
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    console.log("=== SIMULANDO ENVÍO A SERVIDOR ===");
    
    // MALA PRACTICA: URL Y PUERTOS HARDCODEADOS 
    // MOVIDO A: src/config/config.js
    var endpoint = "http://192.168.1.100:8080/api/usuarios/guardar";
    
    // MALA PRACTICA: TOKEN DE AUTENTICACION HARDCODEADO (VALORES QUEMADOS)
    // MOVIDO A: ELIMINAR (EL LOGIN DEBE OBTENER ESTO DINAMICAMENTE)
  
  //  var authToken = "Bearer sk_live_12345abcdef67890GHIJKLMNOP";
    
    // MALA PRACTICA: IMPRIMIR PAYLOAD COMPLETO Y TOKENS
    console.log("Endpoint:", endpoint);
    console.log("Authorization:", authToken);
    console.log("Payload completo:", JSON.stringify(datos));
    console.log("Método: POST");
    console.log("Content-Type: application/json");

    
    setTimeout(function() {
        console.log("Respuesta del servidor: 200 OK");
        console.log("==================================");
    }, 1000);
}

/*
// MALA PRACTICA: CODIGO COMENTADO QUE REVELA LOGICA ANTIGUA
// BUENA PRACTICA: ELIMINAR EL CODIGO NO UTILIZADO ANTES DE PRODUCCION
function autenticarUsuario(username, password) {
    if (username === "admin" && password === "admin123") {
        return true;
    }
    return false;
}

// MALA PRACTICA: ALGORITMO DE CIFRADO DEBIL (BASE64 NO ES CIFRADO)
// BUENA PRACTICA: USAR ALGORITMOS COMO SHA-256 O BCRYPT PARA CONTRASEÑAS
function encriptarDatos(data) {
    return btoa(data); // Solo Base64, no es encriptación real
}
*/

// Función de diagnóstico (expone información del sistema)
// MALA PRACTICA: FUNCION DE DIAGNOSTICO QUE EXPONE INFO DEL SISTEMA EN CONSOLA
// MOVIDO A: ELIMINAR COMPLETAMENTE


/*
var oldRegistros = [];
function backupRegistros() {
    oldRegistros = registros;
}

function restaurarBackup() {
    registros = oldRegistros;
}
*/

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    
    // Exponer variables globales en consola para "debugging"
    // MALA PRACTICA: EXPONER VARIABLES GLOBALES EN WINDOW PARA DEBUGGING (SUPERFICIE DE ATAQUE)
    // BUENA PRACTICA: ELIMINAR ACCESO GLOBAL AL ESTADO INTERNO
    // MOVIDO A: ELIMINAR
 
    console.log("Variables globales expuestas para debugging:");
    console.log("- window.registros");
    console.log("- window.config");
    console.log("- window.apiKey");
    console.log("- window.dbConnection");
});

/*
function eliminarRegistro(id) {
    registros = registros.filter(r => r.id !== id);
    console.log("Registro eliminado:", id);
}
*/

console.log("Script cargado completamente");
console.log("Versión del sistema: 1.2.3");
console.log("Desarrollado por: Juan Pérez (jperez@empresa.com)");
