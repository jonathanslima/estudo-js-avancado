import { Funcionario } from './Funcionario.js';

export class Diretor extends Funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        this._bonificacao = 2;
        this._senha;
    }

    get senha(){
        return this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}