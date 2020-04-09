# Maximum Subarray

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example:**

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let local_best = nums[0];
    let global_best = local_best;
    
    for (let i = 1; i < nums.length; i++) {
        local_best = Math.max(nums[i], nums[i] + local_best);
        global_best = Math.max(local_best, global_best);
    }
    
    return global_best;
};
```