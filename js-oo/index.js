import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = '12345678909';

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = '12345678908';

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(300);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 2015;
contaCorrenteAlice.cliente = cliente2;

contaCorrenteRicardo.transferir(150, contaCorrenteAlice);

console.log('Conta Corrente Ricardo = ', contaCorrenteRicardo)
console.log('Conta Corrente Alice = ', contaCorrenteAlice)