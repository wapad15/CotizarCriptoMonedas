class Interface {

    constructor() {
        this.init();
    }

    init() {
        this.createSelect();
    }

    createSelect() {
        const select = document.getElementById('criptomoneda');
        quoting
            .getCoins()
            .then(resp => {
                resp.coins.forEach(data => {
                    const option = document.createElement('option');
                    option.value = data.name;
                    option.textContent = data.name;
                    select.appendChild(option);
                });
            })
            .catch(error => console.log(error));
    }

    showMessages(message, className) {
        const divMessage = document.querySelector('.mensajes');
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        divMessage.appendChild(div);

        setTimeout(() => div.remove(), 3000);
    }

    showResult(data) {
        const result = document.querySelector('#resultado');
        const value = data.total_supply;

        const resultPrevious = result.querySelector('div');
        if (resultPrevious)
            resultPrevious.remove();

        let html = `
            <div class='card cyan darken-3'>
                <div class='card-content white-text'>
                    <span class='card-title'>Resultado:</span>
                    <p>La equivalencia es de: ${value}</p>
                </div>
            </div>`;

        this.showSpinner();

        setTimeout(() => {
            document.querySelector('.spinner img').remove();
            result.innerHTML = html;
        }, 3000);

    }

    showSpinner() {
        const spinner = document.createElement('img');
        spinner.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinner);
    }
}