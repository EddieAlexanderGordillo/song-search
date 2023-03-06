import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
  e.preventDefault();
  // obtener datos del formulario
  const artista = document.querySelector('#artista').value;
  const cancion = document.querySelector('#cancion').value;
  if (artista === '' || cancion === '') {
    // el usuario dejo al menos un campo en blanco, mostrar error
    UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
    UI.divMensajes.classList.add('alerta__error');
    setTimeout(() => {
      UI.divMensajes.textContent = '';
      UI.divMensajes.classList.remove('alerta__error');
    }, 3000);
    return;
  } else {
    // consultar la api
    const busqueda = new API(artista, cancion);
  }
}
