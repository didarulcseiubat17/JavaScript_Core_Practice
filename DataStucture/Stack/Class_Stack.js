class Stack{
    constructor(){
        this.stack=[];
    }
    
    push(element) { 
        this.stack.push(element); 
    }
    
    pop(){
        this.stack.pop();
    
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }
        
    isEmpty(){
        return this.stack.length===0;
    }

    clear(){
        this.stack=[];
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack);
}
    
}

stack = new Stack();
console.log(stack)
stack.push(1);
stack.push(2);
console.log(stack)
stack.push(3);
stack.push(4);
stack.print();
