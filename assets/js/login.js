document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        localStorage.setItem('userLoggedIn', true);
        alert('Inicio de sesión exitoso');
        loginForm.reset();
        document.getElementById('loginModal').classList.remove('show');
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        const user = {
            name,
            email,
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registro exitoso');
        registerForm.reset();
        document.getElementById('registerModal').classList.remove('show');
    });

    const isUserLoggedIn = localStorage.getItem('userLoggedIn');

    if (isUserLoggedIn === 'true') {
        
    } else {
        
    }


    const userData = localStorage.getItem('user');

    if (userData) {
        const user = JSON.parse(userData);
    }
});
