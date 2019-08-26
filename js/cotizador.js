class Quoting {

    constructor() {
        this.url = 'https://api.coinmarketcap.com/v1/ticker/';
    }

    async getCoins() {
        const response = await fetch(this.url);
        const json = await response.json();
        return { coins: json };
    }

    async makeConversion(coin, criptoCoin) {
        const url = 'https://api.coinmarketcap.com/v2/ticker';
        const response = await fetch(`${ url }/${ coin }/?convert=EUR`);
        const convertion = await response.json();
        return { convertion };
    }
}