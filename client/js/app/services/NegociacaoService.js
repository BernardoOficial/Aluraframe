class NegociacaoService {

    obterNegociacoesDaSemana(callback) {

        let xhr = new XMLHttpRequest()

        xhr.open('GET', 'negociacoes/semana')

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    // console.log(JSON.parse(xhr.response));
                    callback(
                        null,
                        JSON.parse(xhr.response)
                            .map(objeto => new Negociacao(DataHelper.textoParaData(objeto.data), objeto.quantidade, objeto.valor))
                    )

                } else {
                    callback("Falha ao importar as negociações", null);
                }
            }

        }

        xhr.send()

    }

}