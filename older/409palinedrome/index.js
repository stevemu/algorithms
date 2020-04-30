var longestPalindrome = function(s) {
    let charMap = {};
    for (let char of s) {
        if (char in charMap) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    let result = 0;
    for (char in charMap) {
        let charCount = charMap[char];
        let toadd = Math.floor(charCount / 2) * 2;
        result += toadd;
        if (result % 2 === 0 && charMap[char] % 2 === 1) {
            result += 1;
        }
    }

    return result;
};

console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("ccc"));

// var i = 0;
// setInterval(() => {
//     console.log('iteration ' + i);
//     i++
// }, 1000)