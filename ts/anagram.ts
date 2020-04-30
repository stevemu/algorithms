//https://www.youtube.com/watch?v=3MwRGPPB4tw&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=12

function anagram(str1: string, str2: string): number {
  let str1count = count(str1);
  let str2count = count(str2);
  return getDelta(str1count, str2count);
}

function getDelta(count1: Record<string, number>, count2: Record<string, number>) {
  let keys: string[] = Array.from(new Set([...Object.keys(count1), ...Object.keys(count2)]));
  let delta = 0;
  for (let k of keys) {
    if (k in count1 && k in count2) {
      delta += Math.abs(count1[k] - count2[k]);
    } else if (k in count1) {
      delta += count1[k];
    } else if (k in count2) {
      delta += count2[k];
    }
  }

  return delta;
}

function count(str: string): Record<string, number> {
  let hash: Record<string, number> = {};
  for (let c of str) {
    if (c in hash) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }
  return hash;
}

console.log(anagram('hello', 'billion'));
