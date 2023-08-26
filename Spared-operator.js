const numbers=[10,50,1,5,42,85,19,450,52,0,1]
const numbers2 =  [50,50,184,186, ...numbers]
console.log(Math.max(...numbers));// this spared operators
numbers2.push(500);
console.log(numbers2);
