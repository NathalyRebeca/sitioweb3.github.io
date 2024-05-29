document.addEventListener('DOMContentLoaded', function() {
    // Mostrar mensaje de bienvenida
    alert('¡Bienvenido al perfil profesional de Nathaly Rebeca!');

    // Resaltar elementos al pasar el mouse
    const sections = document.querySelectorAll('.contact, .experience, .education, .skills, .learning');
    sections.forEach(section => {
        section.addEventListener('mouseover', function() {
            section.style.backgroundColor = '#f0f0f0';
        });
        section.addEventListener('mouseout', function() {
            section.style.backgroundColor = '#fff';
        });
    });
});
