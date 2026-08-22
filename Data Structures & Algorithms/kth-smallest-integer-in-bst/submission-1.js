/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */

    kthSmallest(root, k) {
        const result = this.helper(root, []);
        return result[k-1];
    }

    helper(root, result=[]) {
        if(!root) {
            return result;
        }

        this.helper(root.left,result);
        result.push(root.val);
        this.helper(root.right,result);
        return result;
    }

}
