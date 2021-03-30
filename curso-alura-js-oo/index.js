import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Alice', '12345678908');
const contaCorrenteAlice = new ContaCorrente(cliente1, 2015);
contaCorrenteAlice.depositar(300);
contaCorrenteAlice.sacar(10);

const ContaPoupancaAlice = new ContaPoupanca(50, cliente1, 2015);
ContaPoupancaAlice.sacar(10);

console.log('Conta Corrente Alice = ', contaCorrenteAlice)
console.log('Conta Poupança Alice = ', ContaPoupancaAlice)

// Vai dar erro abaixo
// const contaAlice = new Conta(0, cliente1, 2015);
// console.log('Conta Alice = ', contaAlice)