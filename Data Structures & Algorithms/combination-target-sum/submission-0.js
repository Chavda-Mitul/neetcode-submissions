class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const sol = [];
        const result = [];
        this.combination(0, target, sol, result, nums);
        return result;
    }

    combination(idx, target, sol, result, nums) {
        if(idx >= nums.length) {
            if(target == 0) {
                result.push([...sol]);
            }
            return;
        }   

        if(nums[idx] <= target) {
            sol.push(nums[idx]);
            this.combination(idx, target - nums[idx], sol, result, nums);
            sol.pop();
        }

        this.combination(idx + 1, target, sol, result, nums);
        
    }
}
