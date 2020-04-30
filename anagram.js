//  https://www.youtube.com/watch?v=3MwRGPPB4tw&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=12

function anagram(s1, s2) {
  const count1 = getCount(s1);
  const count2 = getCount(s2);

  return getDelta(count1, count2);
}

function getCount(s) {
  let map = {};
  for (const c of s) {
    if (c in map) {
      map[c]++;
    } else {
      map[c] = 1;
    }
  }
  return map;
}

function getDelta(map1, map2) {
  let diff = 0;
  for (const c of 'abcdefghijklmnopqrstuvwxyz') {
    if ((c in map1) && (c in map2)) {
      diff += Math.abs(map1[c] - map2[c]);
    } else if (c in map1) {
      diff += map1[c];
    } else if (c in map2) {
      diff += map2[c];
    }
  }
  return diff;
}

// let r = anagram('glue', 'legs');
let r = anagram('hello', 'billion');
console.log(r);