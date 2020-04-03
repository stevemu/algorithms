// console.log('result');

const isIsomorphic = function(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  for (let i = 0; i < str1.length; i += 1) {
    if (str1.indexOf(str1[i]) !== str2.indexOf(str2[i])) {
      return false;
    }
  }
  return true;
};

// let result = isIsomorphic("egg", "add");
let result = isIsomorphic("bccb", "daac");
console.log(result);
