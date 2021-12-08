const name = 'Marcelo Eltz'
let name2 = ''
let pessoaDefault = {
  nome: 'Marcelo Eltz',
  idade: 33,
  trabalho: 'Programador'
}

let nomes = ['Marcelo Eltz', 'Maria Silva', 'Pedro Silva']
let pessoas = [
  {
    nome: 'Marcelo Eltz',
    idade: 33,
    trabalho: 'Programador'
  },
  {
    nome: 'Maria Silva',
    idade: 22,
    trabalho: 'UX/UI Designer'
  }
]

function alterarNome() {
  name2 = 'Maria Silva'
  console.log('Valor alterado:')
  console.log(name2)
}

function recebeEAlteraNome(novoNome) {
  name2 = novoNome
  console.log('Valor alterado recebendo um nome:')
  console.log(name2)
}

function imprimirPessoa(pessoa) {
  console.log('Nome:')
  console.log(pessoa.nome)

  console.log('Idade:')
  console.log(pessoa.idade)

  console.log('Trabalho:')
  console.log(pessoa.trabalho)
}

function adicionarPessoa(pessoa) {
  pessoas.push(pessoa)
}

function imprimirPessoas() {
  console.log('---------IMPRIMIR PESSOAS ----------')
  pessoas.forEach(item => {
    console.log('Nome:')
    console.log(item.nome)

    console.log('Idade:')
    console.log(item.idade)

    console.log('Trabalho:')
    console.log(item.trabalho)
  })
}

imprimirPessoas()

adicionarPessoa({
  nome: 'Pedro Silva',
  idade: 28,
  trabalho: 'Porteiro'
})

imprimirPessoas()
// imprimirPessoa(pessoaDefault)

// imprimirPessoa({
//   nome: 'Maria Silva',
//   idade: 25,
//   trabalho: 'UX/UI Designer'
// })

// recebeEAlteraNome('João Silva Pereira')
// recebeEAlteraNome('Maria Silva')
//alterarNome()
