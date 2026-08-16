class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
            const map = new Map();
    const n = nums.length;

    for(let i=0;i<n;i++){
        const key = target - nums[i];
        if(map.has(key)){
            const result1 = i;
            const returl2 = map.get(key);
            return [result1,returl2]
        }
        map.set(nums[i],i);
    }
    }
}
