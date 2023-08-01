// Obtener el formulario y agregar un evento de envío
const opinionForm = document.getElementById('opinionForm');
const opinionEnviada = document.getElementById('opinionEnviada');

opinionForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const opinion = document.getElementById('opinion').value;
    const tiktok = document.getElementById('tiktok').value;
    const instagram = document.getElementById('instagram').value;

    // Mostrar la opinión enviada
    document.getElementById('nombreMostrado').textContent = nombre;
    document.getElementById('opinionMostrada').textContent = opinion;
    document.getElementById('tiktokMostrado').textContent = tiktok;
    document.getElementById('instagramMostrado').textContent = instagram;

    // Ocultar el formulario y mostrar la opinión enviada
    opinionForm.style.display = 'none';
    opinionEnviada.style.display = 'block';
});