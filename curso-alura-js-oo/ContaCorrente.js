import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.qtdContasAbertas += 1;
    }
    static qtdContasAbertas = 0;
}