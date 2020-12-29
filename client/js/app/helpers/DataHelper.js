class DataHelper {

    constructor() {

        throw new Error("Esta classe não pode ser instanciada");
    }

    static textoParaData(texto) {

        let regex = /^\d{4}-\d{2}-\d{2}$/g;

        if (!regex.test(texto))
            throw new Error("A data não segue o padrão aaaa-mm-dd");

        let dataArray = texto.split(/\-/g);

        return {
            dia: Number(dataArray[2]),
            mes: Number(dataArray[1]),
            ano: Number(dataArray[0]),
        }

    }

    static dataParaTexto(data) {

        let dataArray = {
            dia: data.getDate(),
            mes: data.getMonth() + 1,
            ano: data.getFullYear()
        }

        return `${dataArray.dia}/${dataArray.mes}/${dataArray.ano}`;
    }

    static dataStringParaDate(data) {

        return {
            dia: new Date(data).getDate(),
            mes: new Date(data).getMonth() + 1,
            ano: new Date(data).getFullYear(),
        }
    }


}