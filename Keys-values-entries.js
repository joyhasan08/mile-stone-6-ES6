const aPerson = {
    names: `joy`,
    age: 25,
    address: `Dhaka`,
    phone: `01788450096`,
    email: `joyhasan32@gmail.com`,
    isStudent: true,
    isEmployed: false

}
console.log(aPerson);
const objKeys = Object.keys(aPerson)
console.log(objKeys)//obj keys 
const objValues = Object.values(aPerson);
console.log(objValues);//obj valuse;
console.log(Object.entries(aPerson));//two dimentonal arry

// [
//     [ 'names', 'joy' ],
//     [ 'age', 25 ],
//     [ 'address', 'Dhaka' ],
//     [ 'phone', '01788450096' ],
//     [ 'email', 'joyhasan32@gmail.com' ],
//     [ 'isStudent', true ],
//     [ 'isEmployed', false ]
//   ]

aPerson.newEmail=`rubayedhasan123@gmail.com`
//delet proparty
delete aPerson.email;
console.log(aPerson);

const {newEmail, ...newAperson} = aPerson;// delet newEmail
console.log(newAperson);

//freeze
// Object.freeze(aPerson)
aPerson.age = `30`
console.log(aPerson);