class HashTable {
  constructor() {
    this.arr = [];
  }

  hashCode(str) {
    const p = 31;
    const m = 1e9 + 9;
    let hashValue = 0;
    let pPow = 1;
    for (let c of str) {
      hashValue = (hashValue + (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1) * pPow) % m;
      pPow = (pPow * p) % m;
    }
    return hashValue;
  }

  convertToIndex(hashCode) {
    return hashCode % 10;
  }

  set(key, value) {
    const hash = this.hashCode(key);
    let idx = this.convertToIndex(hash);
    if (this.arr[idx] == undefined) {
      this.arr[idx] = [
        {key, value}
      ]
    } else {
      let found = this.arr.find(([keyInArray, value]) => {
        if (keyInArray == key) return true;
        else return false;
      })
      if (found) {
        found.value = value;
      } else {
        this.arr[idx].push({
          key, value
        })
      }
    }
  }

  get(key) {
    const hash = this.hashCode(key);
    let idx = this.convertToIndex(hash);
    if (this.arr[idx] == undefined) {
      return null;
    } 

    let arr = this.arr[idx];
    for (let item of arr) {
      if (item.key == key) {
        return item.value;
      }
    }
    return null;
  }


}

let hash = new HashTable();
console.log(hash.set('a', 'aaaa'));
console.log(hash.set('b', 'bbb'));
console.log(hash.arr);
console.log(hash.get('b'));