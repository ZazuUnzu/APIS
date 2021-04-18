

function manejarTipoArchivo(evt) {
    var miArchivo = evt.target.files[0]; // Objeto de tipo FileList 
        // Si no es un archivo de tipo video, lanzar alert.
        if (!miArchivo.type.match('video.*')) {
            alert ('Por favor, selecciona un archivo de vídeo válido.');
        } else {
        var reader = new FileReader();
        reader.onprogress = alert('Cargando');
        reader.onloadend = (function () {
            return function (e) {
                var zonaVideo = document.createElement('div'); //Creamos un elemento 'div'.
                document.getElementById('zonaVideo').innerHTML = ['<video id="miVideo" width="640px" src="', e.target.result, 
                '" title="', '"/>'].join(''),'<br>'; //No entiendo por qué si cierro la etiqueta vídeo me deja de funcionar.

                document.getElementById('zonaVideo').insertBefore(zonaVideo, null);
                document.getElementById('botonera').classList.toggle('showhide');
            };
        })(miArchivo); // No comprendo esta expresión.

        reader.readAsDataURL(miArchivo);
    }
}