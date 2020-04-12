# Backspace String Compare

Given two strings `S` and `T`, return if they are equal when both are typed into empty
text editors. `#` means a backspace character.

**Example 1:**
```
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
```

**Example 2:**
```
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
```

**Example 3:**
```
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
```

**Example 4:**
```
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```

```javascript
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    function cleanup(str) {
        let length = str.length;
        let cursor = 0;
        let i = 0;

        while(i < length) {
            if (str[i] !== '#') {                
                str = str.substring(0, cursor) + str[i] + str.substring(cursor + 1);
                cursor += 1;
            } else {
                cursor -= 1;
                if (cursor < 0) {
                    cursor = 0;
                }
            }

            i += 1;
        }
        
        str = str.substring(0, cursor);
        
        return str;
    }
    
    return cleanup(S) === cleanup(T);
};
```