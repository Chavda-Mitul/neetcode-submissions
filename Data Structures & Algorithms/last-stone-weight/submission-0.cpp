class Solution {
    priority_queue<int> pq;

public:
    int lastStoneWeight(vector<int>& stones) {
        for(auto ele : stones) {
            pq.push(ele);
        }

        while(pq.size() > 1) {
            int stoneOne = pq.top();
            pq.pop();

            if(pq.size() > 0) {
                int stoneTwo = pq.top();
                pq.pop();
            
                int smashedStone = stoneOne - stoneTwo;
                if(smashedStone != 0) {
                    pq.push(smashedStone);
                }
            }
        }

        if(pq.size() > 0){
            return pq.top();
        }else{
            return 0;
        }
    }
};
