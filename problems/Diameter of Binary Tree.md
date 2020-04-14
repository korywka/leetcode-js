# Diameter of Binary Tree

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

**Example:**
Given a binary tree

```
          1
         / \
        2   3
       / \     
      4   5    
```

Return **3**, which is the length of the path [4,2,1,3] or [5,2,1,3].

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
    let longest = 0;
    
    function depth(root) {
        if (root === null) return 0;
        let leftHeight = depth(root.left);
        let rightHeight = depth(root.right);
        longest = Math.max(longest, leftHeight + rightHeight);
        return (1 + Math.max(leftHeight, rightHeight));
    }
    
    depth(root);
    
    return longest;
};
```