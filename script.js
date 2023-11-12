// Define un objeto que mapea números a nombres de géneros artísticos
var generos = {
    1: 'Barroco',
    2: 'Manierismo',
    3: 'Neo-Clasicismo',
    4: 'Realismo',
    5: 'Romanticismo'
};

// Función para filtrar la tabla de obras de arte
function filtrarTabla() {
    // Obtiene el valor seleccionado del elemento con id 'filtro'
    var selectedGenre = document.getElementById('filtro').value;

    // Obtiene la tabla y las filas de obras de arte
    var tablaArte = document.getElementById('tablaObras');
    var filas = tablaArte.getElementsByTagName('tr');

    // Itera sobre las filas
    for (var i = 1; i < filas.length; i++) {
        // Obtiene el elemento de la celda que contiene el género
        var casilla_genero = filas[i].getElementsByTagName('td')[5];
        // Obtiene el texto del género
        var genero = casilla_genero.textContent || casilla_genero.innerText;

        // Convierte el valor seleccionado a un número entero
        var selectedGenreValue = parseInt(selectedGenre, 10);

        // Muestra o oculta la fila según el filtro seleccionado
        if (selectedGenre === '0' || generos[selectedGenreValue] === genero) {
            filas[i].style.display = '';
        } else {
            filas[i].style.display = 'none';
        }
    }
    return false;
}

// Para mostrar la imagen con Zoom al lado

// Selecciona todas las imágenes con la clase CSS 'arte'
var imagenesArte = document.querySelectorAll('.arte');

// Itera sobre cada imagen
imagenesArte.forEach(function (imagen) {
    // Agrega un evento para el mouseover
    imagen.addEventListener('mouseover', function () {
        // Crea una nueva imagen para el zoom
        var imagenZoom = document.createElement('img');

        // Configura la fuente y atributos de la imagen de zoom
        imagenZoom.src = imagen.src;
        imagenZoom.alt = imagen.alt;
        imagenZoom.classList.add('imagenGrande');

        // Obtiene las dimensiones y posición de la imagen original
        var rect = imagen.getBoundingClientRect();

        // Posiciona la imagen de zoom al lado de la imagen original
        imagenZoom.style.position = 'absolute';
        imagenZoom.style.top = rect.top - 25 + 'px';
        imagenZoom.style.left = rect.right + 10 + 'px';

        // Agrega la imagen de zoom al cuerpo del documento
        document.body.appendChild(imagenZoom);
    });

    // Agrega un evento para el mouseout
    imagen.addEventListener('mouseout', function () {
        // Elimina la imagen de zoom del cuerpo del documento
        document.body.removeChild(document.querySelector('.imagenGrande'));
    });
});


// Abrir una ventana emergente con la información

// Función para mostrar un modal con información detallada al hacer clic en un botón de editar
function mostrarModal(botonEditar) {
    // Obtiene referencias a elementos del modal
    var modal = document.getElementById('modal');
    var modalImagen = document.getElementById('modal-imagen');
    var modalTitulo = document.getElementById('modal-titulo');
    var modalArtista = document.getElementById('modal-artista');
    var modalAno = document.getElementById('modal-ano');
    var modalGenero = document.getElementById('modal-genero');

    // Obtiene información de la fila correspondiente al botón de editar clicado
    var fila = botonEditar.closest('tr');
    var imagenSrc = fila.querySelector('img').src;
    var titulo = fila.querySelector('em').textContent;
    var artista = fila.querySelectorAll('td')[3].textContent;
    var ano = fila.querySelectorAll('td')[4].textContent;
    var genero = fila.querySelectorAll('td')[5].textContent;

    // Muestra el modal y configura sus elementos con la información obtenida
    modal.style.display = 'block';
    modalImagen.src = imagenSrc;
    modalTitulo.value = titulo;
    modalArtista.value = artista;
    modalAno.value = ano;
    modalGenero.value = genero;

    // Añade una clase a la fila seleccionada para resaltarla visualmente
    fila.classList.add('fila-seleccionada');
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
