function submitForm() {
    const fields = ['name', 'email', 'service', 'office', 'date', 'time'];
    let isEmpty = false;

    for (const field of fields) {
        const value = document.getElementById(field).value;
        if (value === '') {
            isEmpty = true;
            break;
        }
    }

    if (isEmpty) {
        alert('Por favor, complete todos los campos.');
        document.getElementById('appointment-form').reset();
    } else {
        alert('Formulario enviado con éxito.');
    }
}
