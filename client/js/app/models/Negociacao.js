class Negociacao{

    constructor(data,valor,quantidade){

        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    obtemVolume(){

        return this.quantidade * this.valor;
    }
}