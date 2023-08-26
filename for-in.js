//besic forloop
 for (let i=0; i<5; i++){
    console.log(`index ${i}`);
 }

//for off ES6
 const numbers=[10,50,1,5,42,85,19,450,52,0,1]
 for (const num of numbers){
   console.log(`number ${num}`);
 }
 
 const nobab = ` siraj udd Dulon babu`
 for (const leter of nobab){
   console.log(leter);
 }
 
 let aPerson = {
   names: `joy`,
   age: 25,
   address: `Dhaka`,
   phone: `01788450096`,
   email: `joyhasan32@gmail.com`

}
//for in berfor es6
for(const key in aPerson){
   console.log(`${key}  ${aPerson[key]}`);
}

