// swapping in a normal way
let a = 3;
let b = 5;
console.log(a, b);

let c = a;
a = b;
b = c;
console.log(a, b);

// destructuring (a js way)
let d = 7;
let e = 9;
console.log(d, e);

[d , e] = [e, d];
console.log(d, e);