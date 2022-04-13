Atividade 01: Maps

Crie uma função que retorna o nome dos membros de um Map que tenha o papel 'ADMIN' no sistema.

    01. Cria uma função (getAdmin) que recebe um (map):
    02. Crie um (map) e popule-o com nomes de usuários e seus papeis no sistema. (exemplo: 'Luiz' => 'Admin'
    02. Dentro de (getAdmin) utilize o loop (for...of) para retornar uma lista com os nomes dos usuários que são administradores

Atividade 02: Sets

    Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos. 

Atividade 03 - Validação de erros por tipos

- Objetivo é que a função receba um array e retorne el caso o seu tamanho corresponda ao número enviado como parâmetro na função.
  Caso contrário, um erro será lançado.

Tópicos:
- Crie uma função que recebe um array e um número
- Realize as seguintes validações:
  Se os parâmetros não forem enviados, lance um erro do tipo (referenceError).
  Se o array não for do tipo 'object', lance um erro do tipo (typeError)
  Se o número não for do tipo 'number', lance um erro do tipo (typeError)
  Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo (rangeError)
- Utilize a declaração (try...catch)
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador (instanceof)

Atividade 04 - Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

 - Crie a classe (ContaBancaria), que possui os parâmetros: 'agencia', 'numero, 'tipo' e 'saldo'.
 - Dentro de (ContaBancaria), construa o (getter e o setter de saldo)
 - Dentro de (ContaBancaria), crie os métodos: sacar e depositar
 - Crie uma classe-filha chamada (ContaCorrente) que herda todos esses parâmetros e ainda possua o parâmetro (CartaoCredito)
 - Ainda em (ContaCorrente), construa o getter e o setter de (CartaoCredito)
 - Ainda em (ContaCorrente), faça com o que o tipo seja 'conta corrente' por padrão.
 - Crie uma classe-filha chamada (ContaPoupança), que herda todos os parâmetros de (ContaBancaria)
 - Crie uma classe-filha chamada (ContaUniversitaria), que herda todos os parâmetros de (ContaBancaria).
 - Faça com que o método (saque), de (ContaUniversitaria) apenas seja capas de sacar os valores 'menores que 500 reais'.