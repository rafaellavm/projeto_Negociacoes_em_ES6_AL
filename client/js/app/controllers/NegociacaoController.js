class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);//coloca a função dentro da variável com associação com o document
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
                .split('-')

                /*.map(function (item, indice) {
                    if (indice == 1) {
                        return item - 1;
                    }
                    else{
                        return item;
                    }

                })*/
        );

        console.log(data);

        //let negociacao = new Negociacao(this._inputData.value, this._inputValor.value, this._inputQuantidade.value);


        console.log(data);
    }
}