# Basic Calculator II

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only **non-negative** integers, `+`, `-`, `*`, `/` 
operators and empty spaces.
The integer division should truncate toward zero.

**Example 1:**

```
Input: "3+2*2"
Output: 7
```

**Example 2:**

```
Input: " 3/2 "
Output: 1
```

**Example 3:**

```
Input: " 3+5 / 2 "
Output: 5
```

```javascript
var calculate = function(s) {
  const stack = [];
  let lastOperator = '+';
  let lastNumber;

  function isNumber(n) {
    return n !== ' ' && !isNaN(Number(n));
  }

  for (let i = 0; i < s.length; i++) {
    const lastLoop = i === s.length - 1;
    const char = s[i];
    if (isNumber(char)) {
      if (typeof lastNumber === 'undefined') {
        lastNumber = char;
      } else {
        lastNumber += char; // numbers can contain several digits
      }
    }
    if (['+', '-', '*', '/'].indexOf(char) !== -1 || lastLoop) {
      lastNumber = Number(lastNumber);
      if (lastOperator === '+') {
        stack.push(lastNumber);
      } else if (lastOperator === '-') {
        stack.push(-lastNumber);
      } else if (lastOperator === '*') {
        stack[stack.length - 1] = stack[stack.length - 1] * lastNumber;
      } else if (lastOperator === '/') {
        stack[stack.length - 1] = Math.trunc(stack[stack.length - 1] / lastNumber);
      }
      lastOperator = char;
      lastNumber = undefined;
    }
  }
  return stack.reduce((acc, n) => acc + n, 0);
};
```