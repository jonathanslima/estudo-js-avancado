class Negociacao{

	constructor(data, qtd, val){
		/* Deixando com a convenção de só leitura */
		this._data = new Date(data.getTime());
		this._quantidade = qtd;
		this._valor = val;
		Object.freeze(this);
	}

	get volume(){
		return this._quantidade * this._valor;
	}

	get data(){
		return this._data;
	}

	get valor(){
		return this._valor;
	}

	get quantidade(){
		return this._quantidade;
	}
}