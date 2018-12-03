function foo () {
    var a = 10;

    return function bar (num) {
        return num + a;
    }

};


var count = foo();

var num = count(10);
var num1 = count(20);
var num2 = count(30);
