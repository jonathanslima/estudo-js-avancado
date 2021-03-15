import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = '12345678909';

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = '12345678908';

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 100;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.sacar(50))