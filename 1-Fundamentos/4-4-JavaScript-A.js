let info = {
    personagem: 'Hurley',
    origem: 'Lost',
    nota: [4, 8, 15, 16, 23, 42],
}

/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome */

console.log("")
console.log("1) Boas vindas")
console.log("Bem-vinda, " + info.personagem)

/* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. */

info['recorrente'] = 'Sim'

console.log("")
console.log("2) Inserir chave")
console.log(info)

/* 3 - Faça um for/in que mostre todas as chaves do objeto. */

console.log("")
console.log("3) Mostrar chaves")
for (let key in info) {
    console.log(key)
}

/* 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. */

console.log("")
console.log("4) Valores das chaves")
for (let key in info) {
    console.log(info[key])
}

/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. */

let infos = {
    personagem: 'Wolverine',
    origem: 'X-men',
    nota: 'Logan',
    recorrente: 'Sim',
}

console.log("")
console.log("5) Valores das chaves")
for (let key in info) {
    if (info[key] == infos[key]) {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[key] + '/ ' + infos[key])
    }
}

/* Usando o objeto abaixo, faça os exercícios a seguir: */

let leitor = {
    nome: 'Marcelo',
    sobrenome: 'Marques',
    idade: 27,
    livrosFavoritos: [
      {
        titulo: 'A Revolução dos Bichos',
        autor: 'George Orwell',
        ano: 1945,
      },
    ],
  };

/* 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */

console.log("")
console.log("6) Acessando objetos")
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)


/* 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações: */

leitor.livrosFavoritos.push(
    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    ano: 1999,
    }
)

console.log("")
console.log("7) Inserindo objeto em Array em Objeto")
console.log(leitor.livrosFavoritos)

/* 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos". */

console.log("")
console.log("8) Concatenando valores")
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")