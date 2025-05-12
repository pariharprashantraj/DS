// Input: "A man, a plan, a canal: Panama"
// Output: true

// Input: "race a car"
// Output: false
function palindrome(str) {
  const orgStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = orgStr.split("").reverse().join("");
  console.log(orgStr);
  return orgStr === reverseStr;
}

function palindromeWithoutReverse(str) {
  const orgStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let right = 0;
  let left = orgStr.length - 1;
  while (right < left) {
    if (orgStr[right] !== orgStr[left]) {
      return false;
    }
    right++;
    left--;
  }
  console.log(orgStr);
  return true;
}
console.log(palindrome("A man, a plan, a canal: Panama"));
console.log(palindromeWithoutReverse("A man, a plan, a canal: Panama"));
