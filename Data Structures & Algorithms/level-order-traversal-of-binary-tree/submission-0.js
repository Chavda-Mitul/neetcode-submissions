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
     * @return {number[][]}
     */

    helper(root,level,queue){
        if(!root){
            return queue;
        }
        
        if (!queue[level]) {
            queue[level] = [];
        }

        queue[level].push(root.val);

        this.helper(root.left,level+1,queue);
        this.helper(root.right,level+1,queue);
        return queue;
    }

    levelOrder(root) {
        const queue = [];
        const level = 0;
        return this.helper(root,level,queue);
    }


}
