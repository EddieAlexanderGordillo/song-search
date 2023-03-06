import * as Ui from './interfaz.js';

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
    this.consultarAPI();
  }
  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        if (resultado.lyrics) {
          const { lyrics } = resultado;
          Ui.divResultado.textContent = lyrics;
          Ui.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
        } else {
          Ui.divMensajes.textContent =
            'La canción no existe, prueba con otra búsqueda';
          Ui.divMensajes.classList.add('alerta__error');
          setTimeout(() => {
            Ui.divMensajes.textContent = '';
            Ui.divMensajes.classList.remove('alerta__error');
            Ui.formularioBuscar.reset();
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  }
}
export default API;
