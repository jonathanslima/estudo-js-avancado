import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('Ricardo', '12345678909');
const cliente2 = new Cliente('Alice', '12345678908');
const cliente3 = new Cliente('Camila', '12345678907');

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(300);

const contaCorrenteAlice = new ContaCorrente(2015, cliente2);
contaCorrenteRicardo.transferir(100, contaCorrenteAlice);

const contaCorrenteCamila = new ContaCorrente(2021, cliente3);
contaCorrenteRicardo.transferir(100, contaCorrenteCamila);

console.log('Conta Corrente Ricardo = ', contaCorrenteRicardo)
console.log('Conta Corrente Alice = ', contaCorrenteAlice)
console.log('Saldo Corrente Camila = ', contaCorrenteCamila)
console.log('Quantidade de contas abertas = ', ContaCorrente.qtdContasAbertas)