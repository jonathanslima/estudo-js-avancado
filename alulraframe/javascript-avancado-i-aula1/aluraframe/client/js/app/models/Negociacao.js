class Negociacao{

	constructor(date, qtd, val){
		/* Deixando com a convenção de só leitura */
		this._data = date;
		this._quantidade = qtd;
		this._valor = val;
	}

	getVolume(){
		return this._quantidade * this._valor;
	}

	getData(){
		return this._data;
	}

	getValor(){
		return this._valor;
	}

	getQuantidade(){
		return this._quantidade;
	}
}