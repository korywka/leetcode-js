# Move Zeroes

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Example:**

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Note:**  
1. You must do this in-place without making a copy of the array.
1. Minimize the total number of operations.

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const size = nums.length;
    let current_index = 0;
    
    for (let i = 0; i < size; i++) {
        if (nums[i] !== 0) {
            nums[current_index] = nums[i];
            current_index += 1;
        }
    }
    
    for (let i = current_index; i < size; i++) {
        nums[i] = 0;
    }
};
```