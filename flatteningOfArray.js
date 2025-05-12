const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

const flatteningOfArray = (arr) => {
  if (arr.length < 1) return;
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flatteningOfArray(item));
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(flatteningOfArray(nestedArray));
