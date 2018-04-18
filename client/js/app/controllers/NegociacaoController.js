class NegociacaoController{

    adiciona(event){
        event.preventDefault();
       // alert("Chamei ação no controller");

       //coloca a função dentro da variável com associação com o document
       let $ = document.querySelector.bind(document);
       let inputQuantidade = $('#quantidade');
       let inputData = $('#data');
       let inputValor = $('#valor');

       console.log(inputData.value);
    }
}