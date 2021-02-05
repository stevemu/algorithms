function urily(s: string, len: number) {
  let i = 0;
  let arr = s.split('');
  while (i < s.length) {
    if (arr[i] === ' ') {
      arr.splice(i, 1, ...'%20'.split(''));
      i += 3;
    } else {
      i++;
    }
  }

  return arr.join('');

}

console.log(urily('Hi Max', 6));
