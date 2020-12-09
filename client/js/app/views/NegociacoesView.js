class NegociacoesView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>

                ${model.negociacoes.map(n => `
                    
                    <tr>
                        <td>${DataHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>

                `).join("")}

                </tbody>

                <tfoot>

                    <tr>
                        <td colspan="3"></td>
                        <td>

            ${(function () {

                let total = model.negociacoes.reduce(function (acumulador, valorAtual) {
                    return acumulador + valorAtual.volume;
                }, 0)

                return total;

            })()}

                        </td>
                    </tr >

                </tfoot >
            </table >
    `
    }
}