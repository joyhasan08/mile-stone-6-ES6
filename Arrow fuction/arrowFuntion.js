console.log("hello");
let aPerson = {
    names: `joy`,
    age: 25,
    address: `Dhaka`,
    phone: `01788450096`,
    email: `joyhasan32@gmail.com`

}
let aPerson2 = {
    names: `anuv jain`,
    age: 29,
    address: `Maharasta  india`,
    phone: `8945050096`,
    email: `anuv@instagram.com`

}
let aPerson3 = {
    names: `papoy`,
    age: 35,
    address: { Home: `Los Angeles`,
                office: `mumbaiu india `     },
    phone: `0096454854`,
    email: `popyeeebd231@gmail.com`

}



//arrow function
const add = (a,b) => a+b;
console.log(add(5,4));
const devison = (num1,num2) => num1/num2;
console.log(devison(10,2));
//singel perameter
const isAge = (persion)=> persion.age
console.log(isAge(aPerson));
const getAddres =(its) => its.address;
console.log(getAddres(aPerson3));
console.log(aPerson3.address.office);
//no perameter 
const errorMsg =()=> `error 404`;
console.log(errorMsg());
const getPi =()=> Math.PI;
console.log(getPi().toFixed(3));

// large arrow fuction
const doMath =(a,b,c)=>{
    let sum = a+ b;
    let result = sum /c;
    return result;
}
console.log(doMath(8,4,2));

