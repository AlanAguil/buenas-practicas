
// ============================================
// SISTEMA DE REGISTRO DE USUARIOS
// ============================================

import CONFIG from './config/config.js';
import { createUser } from './modules/user/user.model.js';
import { validateUser } from './modules/user/user.validator.js';
import { saveUser } from './modules/api/api.service.js';
import { renderUserRow, getFormData, resetForm } from './modules/ui/ui.controller.js';

  
// Variables globales (accesibles desde toda la aplicación)
var registros = [];

// MALA PRACTICA: IMPRESION DE INFORMACION SENSIBLE EN CONSOLA
console.log("=== SISTEMA INICIADO ===");

// Función principal de inicialización
function inicializar() {
    console.log("Inicializando sistema de registro...");

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
    
    // Obtener valores del controlador de UI
    const data = getFormData();
    
    // LOGS DE DEBUGGEO (MALA PRACTICA)
  
    // Validar usando el módulo validador
    const validation = validateUser(data);
    if (!validation.valid) {
        alert(validation.message);
        return;
    }
    
    // Crear objeto de registro usando el modelo
    const nuevoRegistro = createUser(data);
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
   
    // Mostrar en tabla usando UI Controller
    renderUserRow(nuevoRegistro);
    
    // Limpiar formulario
    resetForm();
    
    // Simulación de envío a servidor usando API Service
    saveUser(nuevoRegistro);
}

// Función de diagnóstico (expone información del sistema)
// MALA PRACTICA: FUNCION DE DIAGNOSTICO QUE EXPONE INFO DEL SISTEMA EN CONSOLA
// MOVIDO A: ELIMINAR COMPLETAMENTE

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    
    // Exponer variables globales en consola para "debugging"
    // MALA PRACTICA: EXPONER VARIABLES GLOBALES EN WINDOW PARA DEBUGGING
});

console.log("Script cargado completamente");
