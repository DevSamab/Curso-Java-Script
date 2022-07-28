# Atribuição via desestruturação (objetos)

A constante **pessoa** recebe um **objeto** com os dados de uma pessoa, sendo que endereço entre como um objeto dentro de um objeto.

Ao fazer a atribuição via desestruturação utilizando **const {nome, sobrenome, idade} = pessoa;**, se colocarmos '' vazios, caso o cliente não informe, por exemplo, o elemento **nome**, ao invés de retornar **undefined**, retornará um espaço vazio.

### Exemplo:

**const {nome = ' ', sobrenome = ' ', idade = ' '} = pessoa;**
