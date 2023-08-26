let aPerson = {
    names: `joy`,
    age: 25,
    address: `Dhaka`,
    phone: `01788450096`,
    email: `joyhasan32@gmail.com`

}

console.log(aPerson);
// R-side and l-side will be same ( oje ,arry , anything)
const {names, age} = aPerson;// use proparty name is a veriable.
console.log(names,age);

// arry destructuring
let num = [50,510,5,41,5]
const [one,two] = num;
console.log(one,two);

//function distructuring
const squar =(x,y)=> [x*2, y*2];
const [xValue,yValue] = squar(2,4);
console.log(xValue,yValue);





