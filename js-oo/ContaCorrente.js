export class ContaCorrente{
    /* public */
    agencia;
    cliente;

    /* private */
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        const contaExterna = conta.depositar(valorSacado)
    }
}