function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));

console.log('-----------------------------');

var integers = [1,2,3,4,5,6,7,8];
var integers_plus_10 = integers.map(function(integer) {
    return integer+10;
});
console.log(integers_plus_10);

console.log('-----------------------------');
console.log(
integers.reduce(function(sum, integer) {
    return sum+integer;
})
)
console.log('-----------------------------');

function curry(fn) {
    var args = [];
    return function curring() {
        args = args.concat([].slice.call(arguments));
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return curring;
        }
    };
}

function add(a, b, c, d) {
   return a+b+c+d;
}

console.log(curry(add)(1)(2)(3)(4));

console.log('-----------------------------');

function counter(init) {
    var start = init;
    return function(inc) {
        inc = inc || 1;
        start+=inc;
        return start;
    };
}
var start10 = counter(10);
var start2 = counter(2);

console.log(start10());
console.log(start10(5));
console.log(start2(2));
console.log(start2(2));

console.log('-----------------------------');

for (var i = 0; i <= 9; i++) {
    setTimeout(function() {
        console.log(i);
    }, i*1000);
}

console.log('-----------------------------');

for (var i = 0; i <= 9; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    })(i);
}

console.log('-----------------------------');

function Person(name) {
    this.name = name;
    this.getName = function() {
        return this.name;
    };
}
var jan = new Person('Jan Kowalski');
console.log(jan.getName());

console.log('-----------------------------');

function Person(name) {
    "use strict";
    this.person_name = name;
    this.getName = function() {
        return this.person_name;
    };
}
var jan = new Person('Jan Kowalski');
var jan_name = jan.getName;

console.log(jan_name.apply(jan));
console.log(jan_name.call(jan));

var jan_name = jan.getName.bind(jan);
console.log(jan_name);




