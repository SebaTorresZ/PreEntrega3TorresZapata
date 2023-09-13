function submitForm() {
    const fields = ['name', 'email', 'service', 'date', 'time'];
    let isEmpty = false;

    for (const field of fields) {
        const value = document.getElementById(field).value;
        if (value === '') {
            isEmpty = true;
            break; // Si al menos un campo está vacío, detén la validación.
        }
    }

    if (isEmpty) {
        alert('Por favor, complete todos los campos.');
        document.getElementById('appointment-form').reset(); // Resetear el formulario si algún campo está vacío.
    } else {
        alert('Formulario enviado con éxito.');
    }
}
