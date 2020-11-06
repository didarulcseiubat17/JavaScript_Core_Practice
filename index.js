async function getData() {
    return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data.then(data=>console.log(data)));