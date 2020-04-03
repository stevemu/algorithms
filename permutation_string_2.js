function p(s) {
  if (s.length == 1) {
    return [s];
  }
  const last = s[s.length - 1];
  const remain = s.substring(0, s.length - 1);
  const ps = p(remain);

  let newPs = [];
  for (let p of ps) {
    newPs = [...newPs, ...addCToAllLocation(p, last)];
  }
  return newPs;
}

function addCToAllLocation(s, c) {
  let all = [];
  for (let i = 0; i <= s.length; i++) {
    const arr = s.split('');
    arr.splice(i, 0, c);
    all.push(arr.join(''));
  }
  return all;
}

console.log(p('abc'));