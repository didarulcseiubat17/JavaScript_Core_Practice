//Extract unique objects by attribute from array of objects.
Objects=[{
  name:'geeks',
  id:10
},{
  name:'geeksforgeeks',
  id:20
},{
  name:'geeks',
  id:10
},{
  name:'geeks',
  id:9
}];

mymap=new Map();

unique=Objects.filter(el=>{
  const val=mymap.get(el.name);
  if(val){
    if(el.id<val){
      mymap.delete(el.name);
      mymap.set(el.name,el.id);
      return true;
    } else {
      return false;
    }
  }

  mymap.set(el.name,el.id);
  return true;

});
console.log(unique);
//console.log(Objects);


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

function isPrime(num){
  for(let i=2;num>i;i++){
    if(num%i==0){
      return false;
    }
  } return num>1;

}

console.log(array.filter(isPrime));

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
newarr={};

// newarr=fruits.filter(el=>el.toLowerCase().indexOf("ap") !==-1);
// console.log(newarr);
// fr={};
// console.log(fr=fruits.filter(el=>el.indexOf("an")!==-1));

let Array = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
]

let refomatted = Array.map(obj => {
    let robj = {};
    robj[obj.key] = obj.value;
    return robj;
})

console.log(refomatted);
console.log(Array);