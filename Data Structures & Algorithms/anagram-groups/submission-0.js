class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
makeKey(str) {
    const key = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
        key[str.charCodeAt(i) - 97]++;
    }
    return key.join('#');
}

groupAnagrams(strs) {
    const map = new Map();

    for(let i=0;i<strs.length;i++){
        const key = this.makeKey(strs[i]);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(strs[i]);
    }
    const result = [];

    for (const [key, value] of map) {
        result.push(value);
    }
    return result;
}
}
