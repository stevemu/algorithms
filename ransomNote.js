function ransomNote(note, magazine) {
  let noteMap = [];
  for (let word of findWord(note)) {
    if (word in noteMap) {
      noteMap[word]++;
    } else 
      noteMap[word] = 1;
  }
  let magazineMap = [];
  for (let word of findWord(magazine)) {
    if (word in magazineMap) {
      magazineMap[word]++;
    } else {
      magazineMap[word] = 1;
    }
  }

  for (let [key, val] of Object.entries(noteMap)) {
    if (magazineMap[key] < val || !(key in magazineMap)) {
      return false;
    }
  }

  return true;
}

function findWord(sentence) {
  let anchor = 0;
  let forward = 0;
  let words = [];
  while (forward <= sentence.length) {
    if (sentence[forward] == ' ' || forward == sentence.length) {
      words.push(sentence.substring(anchor, forward));
      anchor = forward + 1;
    }
    forward++;
  }
  return words;
}

const r = ransomNote('this is a ransome note', 'sending a ransome1 note is bad I say is this true');
console.log(r);

// function ransomNote(note, magazine) {
//   const noteMap = {};
//   for (let c of note) {
//     if (c in noteMap) {
//       noteMap[c]++;
//     } else {
//       noteMap[c] = 1;
//     }
    
//   }
//   const magazineMap = {};
//   for (let c of magazine) {
//     if (c in magazineMap) {
//       magazineMap[c]++;
//     } else {
//       magazineMap[c] = 1;
//     }
//   }
  
//   for (let [key, val] of Object.entries(noteMap)) {
//     if (magazineMap[key] < val) {
//       return false;
//     }
//   }

//   return true;
// }

