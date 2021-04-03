import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        this._bonificacao = 1.1;
        this._senha;
    }

    autenticar(senha){
        return this._senha == senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}