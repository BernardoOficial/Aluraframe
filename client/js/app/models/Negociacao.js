class Negociacao {

    constructor({ dia, mes, ano }, quantidade, valor) {

        this._data = new Date(ano, (mes - 1), dia);
        this._quantidade = quantidade;
        this._valor = valor;
        this._volume = this._quantidade * this._valor;

        Object.freeze(this);
        // Vai congelar o objeto assim que criar as variáveis e atribuir os valores a elas
        // Isso vai encapsular o objeto impedindo que alteramos suas váriaveis no futuro.
        // Object.isFrozen(); - verificar se um objeto está congelado.
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._volume;
    }

}