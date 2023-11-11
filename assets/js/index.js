document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('login_success')) || false;

    if (!user) {
        Swal.fire({
            icon: 'info',
            title: 'Redirección',
            text: 'Serás redirigido a la página de inicio de sesión',
        }).then(() => {
            window.location.href = 'login.html';
        });
    }

    const logout = document.querySelector('#logout');

    logout.addEventListener('click', () => {
        Swal.fire({
            icon: 'info',
            title: 'Hasta pronto!',
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            localStorage.removeItem('login_success');
            window.location.href = 'login.html';
        });
    });
});
