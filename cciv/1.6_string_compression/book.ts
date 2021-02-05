function compress(s: string) {
  const compressedLength = countCompressed(s);
  if (compressedLength > s.length) {
    return s;
  }

  let compressedString = '';
  let consecutiveCount = 0;
  for (let i = 0; i < s.length; i++) {
    consecutiveCount++;
    if (i + 1 == s.length || s[i] !== s[i + 1]) {
      compressedString += s[i];
      compressedString += String(consecutiveCount);
      consecutiveCount = 0;
    }
  }
  
  return compressedString;
}

function countCompressed(s: string) {
  let compressedLength = 0;
  let consecutiveLength = 0;

  for (let i = 0; i < s.length; i++) {
    consecutiveLength++;

    if (i >= s.length || s[i] !== s[i + 1]) {
      compressedLength += 1 + String(consecutiveLength).length;
      consecutiveLength = 0;
    }
  }

  return compressedLength;
}

console.log(compress('abc'));
console.log(compress('aaabb'));