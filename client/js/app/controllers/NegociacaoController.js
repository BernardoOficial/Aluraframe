class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        const self = this;

        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {

            get: function (target, prop, receiver) {

                let metodoIncluso = ["adicionar", "limpar"].includes(prop);
                let typeofFunction = typeof (target[prop]) === typeof (Function);

                if (metodoIncluso && typeofFunction) {

                    return function () {

                        console.log(`Acionado o método ${prop}`);
                        Reflect.apply(target[prop], target, arguments);

                        self._negociacoesView.update(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            }
            ,
            set: function (target, prop, valor, receiver) {

                console.log(`Valor antigo: ${target[prop]}, Valor novo: ${valor}`);

                return Reflect.set(target, prop, valor, receiver);
            }

        });

        // this._listaNegociacoes = new ListaNegociacoes(model =>
        //     this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this.mensagem = new Mensagem();
        this.mensagemView = new MensagemView($("#mensagemView"));
        this.mensagemView.update(this.mensagem);
    }

    adicionar(evento) {

        evento.preventDefault();

        this._listaNegociacoes.adicionar(this._criarNegociacao());

        this.mensagem.texto = "Negociação adicionada com sucesso!";
        this.mensagemView.update(this.mensagem);


        this._limparCampos();
    }

    limparNegociacoes() {

        this._listaNegociacoes.limpar();

        this.mensagem.texto = "Negociações apagadas com sucesso";
        this.mensagemView.update(this.mensagem);
    }

    _criarNegociacao() {

        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limparCampos() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

}