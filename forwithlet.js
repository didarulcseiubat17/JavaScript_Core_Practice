//https://medium.com/better-programming/scoping-in-javascript-for-loops-c5ffac6aa92b

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

/*output
3
3
3
*/

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

/*output
0
1
2
*/


//A common misunderstanding is that the loop has one scope such that it would be equivalent to the following while loop:

(() => {
  var i=0;
  while (i<3) {
    setTimeout(() => console.log(i), 0);
    i++;
  }
})();



//We can see that well by looking at the code that is generated if we transpile our code down to ES5 using Babel:
var _loop = function _loop(i) {
    setTimeout(function () {
        return console.log(i);
    }, 0);
};

for (var i = 0; i < 3; i++) {
    _loop(i);
}


