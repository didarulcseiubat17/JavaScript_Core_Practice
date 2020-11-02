// (() => {
//     let x=3, y=4;
//     try {
//         throw new Error();
//     } catch (t) {
//         (x = 1), ( y = 2);
//         console.log(x); 
//        console.log(y);
//     }
//     console.log(x);
//     console.log(y);
// })();


// number=[1,2,3,4,5,6];

// let sum=number.reduce(function (acc,cur) {
//     return acc+cur;
// })
// console.log(sum)

// let summ = number.reduce((acc, cur)=> 
//      acc + cur);
// console.log(summ)

let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 699
},
{
    product: 'Screen Protector',
    qty: 1,
    price: 9.98
},
{
    product: 'Memory Card',
    qty: 2,
    price: 20.99
}
];

//let total = shoppingCart.reduce((acc, curr){return acc + curr.qty * curr.price;},0);

console.log([...'Lydia']);