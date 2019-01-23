class NegociacaoController{
	// improve performance
	constructor(){
		let $ = document.querySelector.bind(document);
		this.inputData = $('#data');
		this.inputQuantidade = $('#quantidade');
		this.inputValor = $('#valor');
	}

	adiciona(event){
		event.preventDefault();
		console.log('inputData: ', this.inputData.value, '\ninputQtd: ', this.inputQuantidade.value, '\ninputVal: ', this.inputValor.value)
	}
}