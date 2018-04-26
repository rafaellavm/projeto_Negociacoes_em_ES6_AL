class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);//coloca a função dentro da variável com associação com o document
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();

        //let helper = new DataHelper();
        
        let negociacao = new Negociacao( 
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
            );
   
        console.log(negociacao);
        console.log(DataHelper.dataParaTexto(negociacao.data));
    }
}