class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error("É necessário criar o método template() na classe filha")
    }

    update(modal) {

        this._elemento.innerHTML = this.template(modal);
    }
}