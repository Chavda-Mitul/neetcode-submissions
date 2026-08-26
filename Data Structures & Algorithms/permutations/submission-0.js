class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const store = [];
        const res = [];
        const map = Array(nums.length).fill(false);
        this.helper(res, map, store, nums);
        return store;
    }

    helper(res, map, store, nums) {
        if(res.length == nums.length) {
            store.push([...res]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(!map[i]) {
                res.push(nums[i]);
                map[i] = true;
                this.helper(res, map, store, nums);
                map[i] = false;
                res.pop();
            }
        }
    }
}
