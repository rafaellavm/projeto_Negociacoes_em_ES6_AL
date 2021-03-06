class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //coloca a função dentro da variável com associação com o document
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes(function (model) {
            this._negociacoesView.update(model);
        });

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);


    }

    adiciona(event) {

        event.preventDefault();

        //console.log(this._criaNegociacao());
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        //this._negociacoesView.update(this._listaNegociacoes);

        this._limpaFormulario();

    }

    apaga(event) {

        this._listaNegociacoes.esvazia();
        //this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {

        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        );

    }
    //underline pra ser só chamado pela classe controller, só pode ser chanado dentro dela
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';

        this._inputData.focus();
    }
}