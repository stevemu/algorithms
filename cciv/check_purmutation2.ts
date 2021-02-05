// 1.2

function checkPurmutation(a: string, b: string): boolean {
  a = sortChars(a);
  b = sortChars(b);
  return a === b;
}

function sortChars(s: string): string {
  return s.split('').sort((a, b) => {
    return a.charCodeAt(0) - b.charCodeAt(0);
  }).join('');
}

console.log(checkPurmutation('abcde', 'edcba')); // true
console.log(checkPurmutation('abcde', 'edcaa')); // false
