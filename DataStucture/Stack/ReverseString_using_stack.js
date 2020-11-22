//Reverse a string using a JavaScript stack

function ReverseString(str) {
    let stack=[];

    for(let i=0;i<str.length;i++){
        stack.push(str[i]);
    }

    let reverseString='';
 
    // while(stack.length>0) {
    //     reverseString+=stack.pop();
    // }
    //console.log(stack.length)
    for (let index = 0; stack.length>0; index++) {
        //console.log(stack.pop());
       // console.log(stack)
       // console.log(stack.length)
        reverseString += stack.pop();
    }

    return reverseString;
}

hello="Didarul Amin";

console.log(ReverseString(hello));