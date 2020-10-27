// const bird={
//     size:'small',
// };

// const mouse={
//     name:'Mickey',
//     small:true,
// };

// console.log(mouse[bird.size]);
// console.log(mouse[bird["size"]]);

// Built -in JavaScript Constructors

// var x1 = new Object();   // A new Object object
// var x2 = new String();   // A new String object
// var x3 = new Number();   // A new Number object
// var x4 = new Boolean();  // A new Boolean object
// var x5 = new Array();  // A new Array object
// var x6 = new RegExp();   // A new RegExp object
// var x7 = new Function(); // A new Function object
// var x8 = new Date();   // A new Date object

// Use object literals { } instead of new Object().

// Use string literals "" instead of new String().

// Use number literals 12345 instead of new Number().

// Use boolean literals true / false instead of new Boolean().

// Use array literals[] instead of new Array().

// Use pattern literals / () / instead of new RegExp().

// Use function expressions() { } instead of new Function().

// var x1 = {};            // new object
// var x2 = "";            // new primitive string
// var x3 = 0;             // new primitive number
// var x4 = false;         // new primitive boolean
// var x5 = [];            // new array object
// var x6 = /()/           // new regexp object
// var x7 = function () { };  // new function object


class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({ newColor = 'green' } = {}) {
        this.newColor = newColor;
    }
}

const freddie = new Chameleon();
console.log(typeof freddie);
console.log(freddie.newColor);
//console.log(freddie.colorChange('orange'));
