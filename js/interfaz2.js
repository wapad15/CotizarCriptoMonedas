class Interfaz {
  constructor() {
    this.init();
  }
  init() {
    this.construirSelect();
  }
  construirSelect() {
    cotizador.obtenerMonedasAPI().then(monedas => {
      //crear un select con las opciones
      const arrregloMonedas = monedas.monedas;
      const select = document.getElementById("criptomoneda");

      //construir select desde la rest  API
      arrregloMonedas.forEach(moneda => {
        // añadir el ID y el valor , despues asignarlo al select
        const option = document.createElement("option");
        option.value = moneda.id;
        option.appendChild(document.createTextNode(moneda.name));
        select.appendChild(option);
      });
    });
  }
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement("div");
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));
    // div para mensjaes del html
    const divMensaje = document.querySelector(".mensajes");
    //agregamos el div a mensajes
    divMensaje.appendChild(div);

    //desaparece la alerta despues de 2.5 segundos
    setTimeout(() => {
      document.querySelector(".mensajes div").remove();
    }, 2500);
  }

  //imprime el resultado de la cotizacion
  mostrarResultado(resultado, moneda) {
    const resultadoAnterior = document.querySelector("#resultado > div");
    if (resultadoAnterior) {
      resultadoAnterior.remove();
    }
    // muestra el spiner
    this.mostrarSpinner();
    //construir la etiqueta de precio segun la moneda
    const etiquetaMoneda = `price_${moneda}`;
    //leer el valor del resultado
    const valor = resultado[etiquetaMoneda];
    // convierte el texto de la moneda a mayusculas
    const monedaUpper = moneda.toUpperCase();
    // convierte la hora de UNIX a horas y minutos
    const hora = new Date(resultado.last_updated * 1000);

    const horaActualizada = `${hora.getHours()}: ${hora.getMinutes()}`;
    //construir el template
    let templateHTML = "";
    templateHTML += `
        <div class="card cyan darken-3">
          <div class="card-content white-text">
              <span class="card-title">Resultado:</span>
              <p>EL precio de ${resultado.name} a moneda ${monedaUpper} es de: $ ${valor}</p>
              <p>Ultima hora: ${resultado.percent_change_1h}</p>
              <p>Ultimo dia: ${resultado.percent_change_24h}</p>
              <p>Ultimos 7 dias: ${resultado.percent_change_7d}</p>
              <p>Ultima actualizacion: ${horaActualizada} horas</p>
          </div>
        </div>
    `;
    //oculta el spiner y muestra el resultado
    setTimeout(() => {
      //imprime el resultado
      document.querySelector("#resultado").innerHTML = templateHTML;

      //oculta el spinner
      document.querySelector(".spinner img").remove();
    }, 3000);
  }
  //mostrar un spiner cuando se cotiza
  mostrarSpinner() {
    const spinnerGIF = document.createElement("img");
    spinnerGIF.src = "img/spinner.gif";
    document.querySelector(".spinner").appendChild(spinnerGIF);
  }
}
