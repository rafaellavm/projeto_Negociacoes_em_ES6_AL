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

                .map((item, indice) => item - indice %2)
        );

        let negociacao = new Negociacao( 
            data,
            this._inputQuantidade.value,
            this._inputValor.value,
            );

        let diaMesAno = negociacao.data.getDate() +
        "/" + (negociacao.data.getMonth() + 1) +
        "/" + negociacao.data.getFullYear();


        console.log(diaMesAno);
    }
}