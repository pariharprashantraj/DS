function findAnagram(arr) {
  const anagramMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let sortedWord = arr[i].split("").sort().join("");
    if (anagramMap.has(sortedWord)) {
      anagramMap.get(sortedWord)?.push(arr[i]);
    } else {
      anagramMap.set(sortedWord, [arr[i]]);
    }
  }
  const result = [];
  for (let [key, value] of anagramMap.entries()) {
    result.push(value);
  }
  return result;
}

console.log(findAnagram(["eat", "tea", "tan", "ate", "nat", "bat", "baat"]));
