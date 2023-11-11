document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = Users.find(user => user.email === email && user.password === password);

        if (!validUser) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario y/o contraseña incorrectos',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: `Bienvenido ${validUser.name}`,
            showConfirmButton: false,
            timer: 2000,
        }).then(() => {
            localStorage.setItem('login_success', JSON.stringify(validUser));
            window.location.href = '/index.html';
        });
    });
});
