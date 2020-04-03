function compare(bin, hex) {
  let b = convertFromBase(bin, 2);
  let h = convertFromBase(hex, 16);
  return b == h;
}

function convertFromBase(str, base) {
  if (base < 2 || (base >= 10 && base !== 16)) return -1;
  let val = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let d = toDigit(str[i]);
    if (d < 0 || d >= base) {
      return -1;
    }
    val += d * Math.pow(base, str.length - 1 - i);
  }
  return val;
}

function toDigit(c) {
  if (c >= '0' && c <= '9') {
    return c - '0';
  } else if (c >= 'a' && c <= 'f') {
    return 10 + (c.charCodeAt(0) - 'a'.charCodeAt(0));
  } else {
    return -1;
  }
}

console.log(compare('101000100001', 'a21'));
// console.log(compare('111', 'a21'));

// console.log(convertFromBase('111', 2));
// console.log(convertFromBase('101000100001', 2));
// console.log(convertFromBase('a21', 16));
