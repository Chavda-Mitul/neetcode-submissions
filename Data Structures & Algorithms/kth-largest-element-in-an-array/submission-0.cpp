class Solution {
public:
    priority_queue<int> pq;

    int findKthLargest(vector<int>& nums, int k) {
        
        for(auto ele : nums) {
            pq.push(ele);
        }

        while(k > 1){
            pq.pop();
            k--;
        }
        
        return pq.top();
    }
};
