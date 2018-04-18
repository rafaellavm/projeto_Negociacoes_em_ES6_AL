class NegociacaoController{

    constructor(){
        //coloca a função dentro da variável com associação com o document
       let $ = document.querySelector.bind(document);
       this._inputQuantidade = $('#quantidade');
       this._inputData = $('#data');
       this._inputValor = $('#valor');
    }

    adiciona(event){
        
        event.preventDefault();

        let data = new Date(this._inputData.value.replace(/-/g,','));

        //let negociacao = new Negociacao(this._inputData.value, this._inputValor.value, this._inputQuantidade.value);
        
        
        console.log(data);
    }
}