// Simulación de funcionalidad de búsqueda avanzada
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        if (query.includes('redes')) {
            window.location.href = 'services/social-media.html';
        } else if (query.includes('automatización') || query.includes('ia')) {
            window.location.href = 'services/automation.html';
        } else if (query.includes('web')) {
            window.location.href = 'services/web-dev.html';
        } else {
            alert('No se encontraron resultados para: ' + query);
        }
    });
});