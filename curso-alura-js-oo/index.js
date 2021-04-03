import { Cliente } from './Cliente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Alice', 10000, 12345678908);
diretor.cadastrarSenha(12345);

const gerente = new Gerente('Ricardo', 5000, 12345678909);
gerente.cadastrarSenha(123456)

const logado = SistemaAutenticacao.login(gerente, 123456)

console.log(logado)






// **************************************************************************//
// import { ContaCorrente } from './Conta/ContaCorrente.js';
// import { ContaPoupanca } from './Conta/ContaPoupanca.js';

// const cliente1 = new Cliente('Alice', '12345678908');
// const contaCorrenteAlice = new ContaCorrente(cliente1, 2015);
// contaCorrenteAlice.depositar(300);
// contaCorrenteAlice.sacar(10);

// const ContaPoupancaAlice = new ContaPoupanca(50, cliente1, 2015);
// ContaPoupancaAlice.sacar(10);

// console.log('Conta Corrente Alice = ', contaCorrenteAlice)
// console.log('Conta Poupança Alice = ', ContaPoupancaAlice)

// Vai dar erro abaixo
// const contaAlice = new Conta(0, cliente1, 2015);
// console.log('Conta Alice = ', contaAlice)
// **************************************************************************//