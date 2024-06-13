function demo(a, b) {
  return a + b;
}
console.log(demo(10, 10));

function demo1(b, c) {
  return b - c;
}

console.log(demo1(5, 3));

function demo2(d, e) {
  return d * e;
}

console.log(demo2(5, 3));

function demo3(f, g) {
  return f / g;
}

console.log(demo3(5, 3));

////////////////////////////////////////////////////////////////////

function square(sqa, sqb) {
  return sqa ** sqb;
}

console.log(square(3, 4));

function square1(num) {
  let sqvalue = num ** 2;
  return sqvalue;
}
console.log(square1(2));
///////////////////////////////////////////////////////////////////

function highest(x, y) {
  return x > y ? x : y;
}
console.log(highest(10, 20));

///////////////////////////////////////////////////////////////
/**
 *
 *  {Write a javascript function which takes three arguments  (amount , rate of interest, no of years ) returns the total value of interest}
 *
 */

function interest(p, r, t) {
  let interest = (p * r * t) / 100;
  let total = p + interest;
  return total;
}
console.log(interest(10000, 10, 3));
