function isPalindrome(word) {
  // Write your algorithm here
  isPalindrome(`Kodak ad, OK`)
}

/* 
  Add your pseudocode here
*/
input :`Kodak ad, OK`
output:`true`
input :`robot`
output: `false`
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
