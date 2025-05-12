// Sum(1)(2)(3)()  // 6

// Sum(1)(2)(3)(4)()  // 10

// Sum(1)(2)(3)(4)(5)() // 15

function currying(a) {
  let total = a;
  function inner(b) {
    if (b === undefined) {
      return total;
    }
    total += b;
    return inner;
  }
  return inner;
}

console.log("sum", currying(1)(2)(3)(4)(5)());
