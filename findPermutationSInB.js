// CiCI p.70

function find(s, b) {
  s = sortStr(s);
  for (let i = 0; i < b.length - 4; i++) {
    let sub = b.substring(i, i + 4);
    // console.log(sortStr(sub));
    if (sortStr(sub) == s) {
      console.log(sub);
    }
  }
}

function sortStr(s) {
  return s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}

find('abbc', 'cbabadcbbabbcbabaabccbabc')
// find('babc', 'cbabadcbbabbcbabaabccbabc')