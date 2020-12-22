class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(),
            ["adicionar", "limpar"],
            model => {
                this._negociacoesView.update(model)
            })

        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this.mensagem = ProxyFactory.create(
            new Mensagem(),
            ["texto"],
            model => {
                this.mensagemView.update(model)
            });

        this.mensagemView = new MensagemView($("#mensagemView"));
        this.mensagemView.update(this.mensagem);
    }

    adicionar(evento) {

        evento.preventDefault();

        this._listaNegociacoes.adicionar(this._criarNegociacao());

        this.mensagem.texto = "Negociação adicionada com sucesso!";

        this._limparCampos();
    }

    limparNegociacoes() {

        this._listaNegociacoes.limpar();
        this.mensagem.texto = "Negociações apagadas com sucesso";
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