let f = function () {
  this.a = 1;
  this.b = 2;
}
let a =5;
console.log("a..."+a)
let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;


console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);