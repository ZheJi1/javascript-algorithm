/**
 * Created by apple on 16-10-28.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash={};

    for(var i=0;i<nums.length;i++){
        var num;
        num= nums[i];
        if(hash[num]!==undefined){
            return[hash[num],i];
        }else{
            hash[target-num]=i;
        }
    }
    return [];

};
