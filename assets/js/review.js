function guardarComentario() {
    var comentario = document.getElementById('commentInput').value;

    var apiUrl = 'https://my-json-server.typicode.com/SebaTorresZ/ProyectoFinalTorresZapata/posts';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comentario: comentario }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Comentario guardado con éxito:', data);

        document.getElementById('commentInput').value = '';

        Swal.fire({
            icon: 'success',
            title: 'Comentario guardado',
            text: 'Tu comentario se ha guardado con éxito.',
        });
    })
    .catch(error => {
        console.error('Error al guardar el comentario:', error);
    });
}
