<script src="script.js"></script>

const formulario = document.getElementById("formulario-contacto");
const mensajeAlerta = document.getElementById("mensaje-alerta");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        mensajeAlerta.style.color = "#ff6b6b";
        mensajeAlerta.textContent = "Por favor, completá todos los campos.";
    } else {
        mensajeAlerta.style.color = "#4CAF50";
        mensajeAlerta.textContent = "¡Mensaje enviado correctamente!";
        formulario.reset();
    }
});