function longestCommonSubsequence(str1, str2) {
  let sequence = [];
  let longer = str1.length < str2.length ? str2 : str1;
  let shorter = str1.length >= str2.length ? str2 : str1;
  let marker = 0;
  for (let i = 0; i < shorter.length; i++) {
    let current = shorter[i];
    for (let j = marker; j < longer.length; j++) {
      if (longer[j] == current) {
        sequence.push(longer[j]);
        marker = j + 1;
        break;
      }
    }
  }
  return sequence;
}

console.log(longestCommonSubsequence("ZXVVYZW", "XKYKZPW"));
//XYZW
