class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
    }

    push(data){
        if (this.head==null) {
            this.head= new Node(data);
        }else{
           let newnode = new Node(data)
            newnode.next = this.head;
            this.head = newnode ;
        }


    }

    // peek(){
    //     return this.head.data;
    // }

    // isEmpty(){
    //     if (this.head==null) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    pop(){

        if (this.head==null) {
            return true;
        }else{
            let popnode = this.head;
            this.head = this.head.next;
            popnode.next = null;
            return popnode.data;
        }

        
    }

    print(){
        if (this.head==null) {
            console.log("Stack is empty");
        }else{
            let curr = this.head;
            while (curr) {
                console.log(curr.data);
                curr = curr.next;
            }
        }
       
    }
}


stack= new Stack();
stack.push(10);
stack.push(12);
//console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
stack.print();
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.print();