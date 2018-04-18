class NegociacaoController{

    constructor(){
        //coloca a função dentro da variável com associação com o document
       let $ = document.querySelector.bind(document);
       this.inputQuantidade = $('#quantidade');
       this.inputData = $('#data');
       this.inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();
      
      console.log(this.inputData.value);
    }
}