class Negociacao{

    constructor(data,valor,quantidade){

        //com underline as propriedades não podem ser acessadas //getter de leitura
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //congelar o objeto
        Object.freeze(this);
    }

    //esse método é acessado como se fosse uma propriedade n1.quantidade
    get volume(){

        return this._quantidade * this._valor;
    }

    //método acessador
    get data(){

        return new Date(this._data.getTime());
    }

    get quantidade(){

        return this._quantidade;
    }

    get valor(){

        return this._valor;
    }
}