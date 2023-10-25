function toggleDarkMode() {
    const currentMode = localStorage.getItem('darkMode');
    const body = document.body;

    if (currentMode === 'dark') {

        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'light');
    } else {

        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'dark');
    }
}

document.getElementById('toggle-dark-mode-button').addEventListener('click', toggleDarkMode);

const currentMode = localStorage.getItem('darkMode');
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
}
