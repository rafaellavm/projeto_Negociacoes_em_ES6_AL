class Negociacao{

    constructor(data,valor,quantidade){

        //com underline as propriedades não podem ser acessadas
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getVolume(){

        return this._quantidade * this._valor;
    }

    //método acessador
    getData(){

        return this._data;
    }

     //método acessador
    getQuantidade(){

        return this._quantidade;
    }

     //método acessador
    getValor(){

        return this._valor;
    }
}