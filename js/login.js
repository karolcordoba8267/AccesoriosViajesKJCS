function validarCredenciales() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'karolc' && password === '1234') {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = '../index.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
}