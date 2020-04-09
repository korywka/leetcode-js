# Group Anagrams

Given an array of strings, group anagrams together.

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

**Note:**  
* Note:
* The order of your output does not matter.

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort();
        if (hash[key]) {
            hash[key].push(strs[i]);
        } else {
            hash[key] = [strs[i]];
        }
    }
    return Object.values(hash);
};
```