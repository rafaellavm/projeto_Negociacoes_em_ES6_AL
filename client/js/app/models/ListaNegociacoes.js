class ListaNegociacoes{

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    //lista as negociacoes
    get negociacoes(){
        return [].concat(this._negociacoes);//this._negociacoes;
    }

    esvazia(){

        this._negociacoes = [];
    }
}