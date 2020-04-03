function printReverse(s, index = 0) {
  if (s == null || index >= s.length) {
    return;
  }
  printReverse(s, index + 1);
  console.log(s[index]);
}

printReverse("abc");