// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2
// "=" significa Recebe

// ==    igual
console.log(one == 1); // true
console.log(one == "1"); // true

//  !=      diferente
console.log(two != two); // false
console.log(two != 1); // true
console.log(one != "1"); // false

//  ===     estritamente igual
console.log(one === "1"); // false
console.log(one === 1); // true

//  !==     estritamente diferente
console.log(one !== "2"); // true
console.log(two !== 2); // false

//  >   Maior
console.log(one > two); //false

// >=   Maior igual
console.log(two >= 1); // true
console.log(one >= 1); // true

//  <=  Menor igual
console.log(one <= two); // true
console.log(one <= 1); // true
console.log(one <= 0); // false