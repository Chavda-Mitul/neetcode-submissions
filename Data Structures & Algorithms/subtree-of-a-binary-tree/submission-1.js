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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        
        if(!root) {
            return false;
        }
        var result;
        if(root.val === subRoot.val){
            result =  this.isSameSubTree(root,subRoot);
            if(result){
                return true;
            }
        }
        
        let left = this.isSubtree(root.left,subRoot);

        let right = this.isSubtree(root.right,subRoot);

        return left || right;
    }

    isSameSubTree(p, q) {
        if(!p && !q){
            return true;
        }

        if((p && !q) || (!p && q)){
            return false;
        }

        let left = this.isSameSubTree(p.left,q.left);
        let right = this.isSameSubTree(p.right,q.right);

        return p.val === q.val && left && right;
    }
}
