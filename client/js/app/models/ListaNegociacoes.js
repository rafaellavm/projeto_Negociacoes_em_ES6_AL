class ListaNegociacoes{

    constructor(armadilha){
        this._negociacoes = [];
        this._armadilha = armadilha; //função passada por parâmetro
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    //lista as negociacoes
    get negociacoes(){
        return [].concat(this._negociacoes);//this._negociacoes;
    }

    esvazia(){

        this._negociacoes = [];
        this._armadilha(this);
    }
}