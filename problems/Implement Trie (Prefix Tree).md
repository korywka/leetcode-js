# Implement Trie (Prefix Tree)

Implement a trie with `insert`, `search`, and `startsWith` methods.

**Example:**

```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
```

**Note:**

* You may assume that all inputs are consist of lowercase letters `a-z`.
* All inputs are guaranteed to be non-empty strings.

```javascript
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let cur = this;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (!cur.children[c]) {
      cur.children[c] = new Trie();
    }
    cur = cur.children[c];
  }
  cur.isWordEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let cur = this;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (!cur.children[c]) {
      return false;
    }
    cur = cur.children[c];
  }
  return cur.isWordEnd === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let cur = this;
  for (let i = 0; i < prefix.length; i++) {
    const c = prefix[i];
    if (!cur.children[c]) {
      return false;
    }
    cur = cur.children[c];
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
```