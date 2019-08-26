const form = document.getElementById('formulario');

const quoting = new Quoting();
const ui = new Interface();

form.addEventListener('submit', e => {
    e.preventDefault();
    const coin = document.getElementById('moneda').selectedIndex;

    const criptoCoin = document.getElementById('criptomoneda');
    const criptoCoinSelected = criptoCoin.options[criptoCoin.selectedIndex].value;
    validateField(coin, criptoCoinSelected);
});

function validateField(coin, criptoCoin) {
    let data;
    if (coin === '' || criptoCoin === '') {
        ui.showMessages('Los campos son obligatorios', 'deep-orange darken-4 card-panel');
    } else {
        quoting
            .makeConversion(coin, criptoCoin)
            .then(resp => ui.showResult(resp.convertion.data));
    }
}