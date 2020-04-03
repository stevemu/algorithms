/**
 * Initialize your data structure here.
 */
var Trie = function() {
	this.val = null;
	this.children = {};
	this.isEnd = false;
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
	let current = this;
	for (let i = 0; i < word.length; i++) {
			let c = word[i];
			if (c in current.children) {
					current = current.children[c];
			} else {
					let trie = new Trie();
					trie.val = c;
					current.children[c] = trie;
					current = current.children[c];
			}
	}
	
	current.isEnd = true;
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
	let current = this;
	for (let i = 0; i < word.length; i++) {
		let c = word[i];
		if (!(c in current.children)) {
			return false;
		}
		current = current.children[c];
	}
	return current.isEnd == true;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
	let current = this;
	for (let i = 0; i < word.length; i++) {
		let c = word[i];
		if (!(c in current.children)) {
			return false;
		}
		current = current.children[c];
	}
	return true;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/

var obj = new Trie();
obj.insert('app');
// console.log(obj.children['a']);
var param_2 = obj.search('apppp')
// console.log(param_2);
// var param_3 = obj.startsWith(prefix)

