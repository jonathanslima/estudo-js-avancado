import { Cliente } from './Cliente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Alice', 10000, 12345678908);
diretor.cadastrarSenha(1234);

const gerente = new Gerente('Ricardo', 5000, 12345678909);
gerente.cadastrarSenha(5678)

const cliente = new Cliente('Jonathan', 98765432101, 9090);

const diretorLogado = SistemaAutenticacao.login(diretor, 1234)
const gerenteLogado = SistemaAutenticacao.login(gerente, 5678)
const clienteLogado = SistemaAutenticacao.login(cliente, 9090)

console.log('diretorLogado: ', diretorLogado);
console.log('gerenteLogado: ', gerenteLogado);
console.log('clienteLogado: ', clienteLogado);






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
