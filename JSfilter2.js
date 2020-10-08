let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];


bigcities=[];
for (let index = 0; index < cities.length; index++) {
    if (cities[index].population > 3000000){
    bigcities.push(cities[index]);

    }
}

console.log(bigcities);

let BigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(BigCities);

//In ES6, it is even cleaner when you use the arrow function (=>).
let bigCities=cities.filter(city=>city.population>3000000);
console.log(bigCities);

cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ':' + city.population));