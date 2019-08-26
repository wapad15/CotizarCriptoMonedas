//instanciamos ambas clases para tener acceso a todos los metodos
const cotizador = new Cotizador();
const ui = new Interfaz();

//obtener el formulacio
const formulario = document.getElementById("formulario");

//evenlisenert de cuando se envia el  formulario
formulario.addEventListener("submit", e => {
  e.preventDefault();

  //leer la moneda seleccionada
  const monedaSelect = document.getElementById("moneda");
  const monedaSeleccionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  //leer la criptomoneda seleccionada
  const criptoMonedaSelect = document.getElementById("criptomoneda");
  const criptoMonedaSeleccionada =
    criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

  //comprovamos que ambos campos este llenos
  if (criptoMonedaSeleccionada === "" || monedaSeleccionada === "") {
    ui.mostrarMensaje(
      "ambos campos son obligatorios",
      "deep-orange darken-4 card-panel",
    );
  } else {
    //todo correcto ,tomar valores del select y ejecutar la busqueda
    cotizador
      .obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
      .then(data => {
        ui.mostrarResultado(
          data.resultado[0],
          monedaSeleccionada.toLowerCase(),
        );
      });
  }
});
