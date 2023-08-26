const aPerson = [{
    names: `joy`,
    age: 25,
    address: `Dhaka`,
    phone: `01788450096`,
    email: `joyhasan32@gmail.com`,
    data : [{phone: `iphone11`, ios: `16.6`, versio: 16},
            {phone: `iphone6`, ios: `15.6`, versio: 14}],   
},
 {
    names: `anuv jain`,
    age: 29,
    address: `Maharasta  india`,
    phone: `8945050096`,
    email: `anuv@instagram.com`
},
 {
    names: `papoy`,
    age: 35,
    address: { Home: `Los Angeles`,
                office: `mumbaiu india `     },
    phone: `0096454854`,
    email: `popyeeebd231@gmail.com`
}]
console.log(aPerson[0].names);
console.log(aPerson[0].data[1].phone);
console.log(aPerson[2].address.Home);
