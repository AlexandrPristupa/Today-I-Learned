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

// var intersect = function(nums1, nums2) {
//     const len1 = nums1.length;
//     const len2 = nums2.length;
//     const short = len1 > len2 ? nums2 : nums1;
//     const long = len1 > len2 ? nums1 : nums2;
  
//     const count = {}; // count occurrence

//     for (n of long) {
//         count[n] = count[n] + 1 || 1;
//     }
  
//     const intersection = [];
//     for (n of short) {
//       if (count[n] > 0) {
//         count[n]--;
//         intersection.push(n);
//       }
//     }
//     return intersection;
// };

// console.log(intersect([4,9,5], [9,4,9,8,4]));

// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// var generateMatrix = function(n) {
//     const outPut = [];
  
//     for (let i = 0; i < n; i++) {
//       outPut.push([])
//     }
  
//     for (let i = 0; i < outPut.length; i++) {
//       for (let j = 0; j < n; j++) {
//         outPut[i].push(j + 1);
//       }  
//     }
    

//     console.log(outPut);
// };

// generateMatrix(3);

class Event {
  constructor() {
    this.stack = [];
  }

  addEventListener(type, callback) {
    const event = {
      type
    };

    console.log(callback);

    if (!callback) {
      return new Error('event call back is undefined');
    }

    if (typeof callback !== 'function') {
      return new Error('event call back is don\'t a function');
    }

    this.stack.push(event);

    callback(null, event);
  }

  removeEventListener() {
    console.log(this.stack);  
  }
}


const event = new Event();

event.addEventListener('click', (error, event) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(event)
});

event.addEventListener('onchange', (error, event) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(event)
});

event.addEventListener('click', '123');
event.removeEventListener('click');
