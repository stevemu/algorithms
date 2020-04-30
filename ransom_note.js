function ransomNote(magazine, note) {
  const magazineFreq = getStringFreq(magazine);
  const noteFreq = getStringFreq(note);
  return hasEnoughStrings(magazineFreq, noteFreq);
}

function getStringFreq(strings) {
  const freq = {};
  for (const str of strings) {
    if (str in strings) {
      freq[str]++;
    } else {
      freq[str] = 0;
    }
  }
  return freq;
}

function hasEnoughStrings(magazineFreq, noteFreq) {
  for (const [key, value] of Object.entries(noteFreq)) {
    if (!(key in magazineFreq) || magazineFreq[key] < value) {
      return false;
    }
  }
  return true;
}

const magazine = ['hello', 'world'];
const note = ['world'];
console.log(ransomNote(magazine, note));