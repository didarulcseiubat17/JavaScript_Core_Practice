function isbigEnough(num) {
    return num<10; 
}

let filter=[1,5,9,10,5,30].filter(isbigEnough);
console.log(filter);