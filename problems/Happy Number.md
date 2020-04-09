# Happy Number

Write an algorithm to determine if a number `n` is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares of its digits,
and repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in
a cycle** which does not include 1. Those numbers for which this process **ends in 1** are happy numbers.

**Example:**

```
Input: 19
Output: true
Explanation: 
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
```

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function squareSum(num) {
        let sum = 0;
        while (num) {
            sum += (num % 10) * (num % 10);
            num = parseInt(num / 10);
        }
        return sum;
    }
    
    let slow = n;
    let fast = n;
    
    do {
        slow = squareSum(slow);
        fast = squareSum(squareSum(fast));
    }
    while (slow !== fast); // slow will "meet" ~ 1 full cycle of slow
    
    return slow === 1;
};
```