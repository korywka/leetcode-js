# Single Number

Given a non-empty array of integers, every element appears twice except for one.  
Find that single one.

**Example 1:**  
```
Input: [2,2,1]  
Output: 1
```

**Example 2:**  
```
Input: [4,1,2,1,2]  
Output: 4
```


```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    // XOR: 2 ^ 2 = 0; 0 ^ 1 = 1;
    result ^= nums[i];
  }
  return result;
};
```