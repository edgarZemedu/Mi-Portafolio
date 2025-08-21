document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    
    // Alternar menú desplegable
    languageButton.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('show');
    });
    
    // Prevenir que el clic en el menú lo cierre
    languageDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Manejar selección de idioma
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            
            // Cambiar el texto y la bandera del botón
            const flagClass = this.querySelector('.flag').classList[1];
            const text = this.querySelector('span:last-child').textContent;
            
            languageButton.innerHTML = `
                <span class="flag ${flagClass}"></span>
                <span>${text}</span>
            `;
            
            // Cerrar el menú
            languageDropdown.classList.remove('show');
            
            // Aquí iría la lógica real para cambiar el idioma
            console.log('Idioma seleccionado:', selectedLang);
            
            // Para una implementación real, aquí cargarías las traducciones
            // usando una biblioteca como i18next o implementando tu propio sistema
        });
    });
});