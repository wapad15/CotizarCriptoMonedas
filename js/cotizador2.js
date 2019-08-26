class Cotizador {
  //Obtiene todo el JSON con las criptomonedas
  async obtenerMonedasAPI() {
    // fetch a la API
    const urlObtenerMonedas = await fetch(
      "https://api.coinmarketcap.com/v1/ticker/",
    );

    //respuesta en JASON  de las monedas
    const monedas = await urlObtenerMonedas.json();

    return {
      monedas,
    };
  }

  async obtenerValores(moneda, criptomoneda) {
    //convierte los selects en la url
    const urlConvertir = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${criptomoneda}/?convert=${moneda}`,
    );

    const resultado = await urlConvertir.json();

    return {
      resultado,
    };
  }
}
