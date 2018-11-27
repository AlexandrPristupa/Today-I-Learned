console.log(this);

function Foo (a) {
    this.a = a;
    console.log(this);
};

var foo = new Foo('bar')

console.log(foo);

function bar() {
    var self = this;
    console.log(self);
}

bar();

function voo() {
    console.log(this);
    console.log(this.name);
}

voo();

var obj = {
    name: 'name',
    foo: function() {
        console.log(this.foo);
        console.log(this.name);
    },
    bar: voo
}

obj.foo();
obj.bar();

var o = {
    a: 'ad',
    b: 'klml',
    f: function() {
        return this.a;
    }
}

var g = o;

var d = g.f();

console.log(g);

console.log(d);




