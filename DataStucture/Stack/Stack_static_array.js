items=[];
top=-1;

function Push(item){
    
    items[++top]=item;
}

function Pop(){
   
   items.splice(top--,1);

}

function print(){
    console.log(items)
}



Push(10);
Push(11);
Push(13);
console.log(items);
console.log(Pop());
console.log(Pop());
console.log(items);
