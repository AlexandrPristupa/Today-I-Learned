// 'use strict';

// function bar() {
//     console.log(this.test);
// }

// console.log(bar)

// const foo = () => {
//     console.log(this);
// };

// foo();

// const object = {
//     bar: bar,
//     test: 'sasha'
// };

// console.log(object);

// function Foo(a) {
//     this.a = a;
// }

// function Bar(c) {
//     this.c = c;
// }

// Bar.prototype = Object.create(Foo.prototype);

// const d = new Foo('1');
// const c = new Foo('2');
// const q = new Bar('3');

// Foo.prototype.test = function() {
//     console.log(this.a);
// }

// d.test();
// console.log(d);
// console.log(c);
// console.log(q);
// q.test.call({ a: '3' })
// const object1 = {
//     test: 'test',
//     test1: 'test1'
// }

// object.bar.call(object1);
// object.bar.call(object);
