function guardarComentario() {
    var comentario = document.getElementById('commentInput').value;

    var comentariosGuardados = localStorage.getItem('comentarios');

    if (!comentariosGuardados) {
        comentariosGuardados = [];
    } else {
        comentariosGuardados = JSON.parse(comentariosGuardados);
    }

    comentariosGuardados.push(comentario);

    localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));

    document.getElementById('commentInput').value = '';

    Swal.fire({
        icon: 'success',
        title: 'Comentario guardado',
        text: 'Tu comentario se ha guardado con éxito.',
    });
}
