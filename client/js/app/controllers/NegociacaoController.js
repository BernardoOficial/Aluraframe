class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = new ListaNegociacoes(model =>
            this._negociacoesView.update(model));

        // this._listaNegociacoes = new ListaNegociacoes(this, function (model) {

        //     this._negociacoesView.update(model);
        // });

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