document.getElementById('registro-form').addEventListener('submit', function(e) {
    // Evitar el envío del formulario si las contraseñas no coinciden
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar-contraseña').value;
    
    if (contraseña !== confirmarContraseña) {
        alert('Las contraseñas no coinciden.');
        e.preventDefault();  // Evita que se envíe el formulario
    }
});
