//var a = 10;
function foo() {
    var a = 10;
    //console.log(a);
};
function bar() {
    var a = 20;
    foo();
    console.log(a)
    
};
bar(); // will print "10"