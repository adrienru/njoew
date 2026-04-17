/**
 * Lógica del Dashboard
 */

function initDashboard() {
    const clockElement = document.getElementById('digital-clock');
    const dateElement = document.getElementById('date-display');

    function updateTime() {
        const now = new Date();

        // Actualizar Reloj
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;

        // Actualizar Fecha (solo una vez por carga o si cambia el día)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('es-ES', options);
    }

    // Ejecutar cada segundo
    setInterval(updateTime, 1000);
    updateTime(); // Ejecución inmediata al cargar
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initDashboard);
