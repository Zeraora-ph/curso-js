// 1. Declare uma variavel de nome weigth
let weigth;

// 2. que tipo de dado é a variável acima?
// console.log(typeof weigth)
undefined

/* 
    3. Declare uma variavel e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
          
*/

let name = 'pedro'
let age = 18
let stars = 12.5
let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3. 

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weigth> kg.

        Atenção, substitua <name> <age> e <weigth> pelos valores de cada propriedade do objeto
*/

let student = {
    name: 'pedro',
    age: 18,
    stars: 78.5,
    isSubscribed: true,
}

// console.log(`${student.name} de idade ${student.age} pesa ${student.stars} kg.`)

/*
    5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio 
*/

let students = []

/* 
    6. Reatribua valor para avariável acima, colocando dentro dela o student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array )
*/

students = [
    student
]

// console.log(students)

/* 
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/* 
    8. Crie um novo student e coloque na posição 1 do Array students
*/

let student2 = {
    name: 'Jose',
    age: 19,
    stars: 86.5,
    isSubscribed: false,
}

students = [
    student,
    student2
]

students[1] = student2

console.log(students[1])

/* 
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
    
    console.log(a)
    var a = 1
*/

console.log(a)
var a = 1