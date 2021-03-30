import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.qtdContasAbertas += 1;
    }
    static qtdContasAbertas = 0;
    
    sacar(valor, taxa = 1.1){
        return super._sacar(valor, taxa)
    }
}