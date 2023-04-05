function twoSum(nums, target) {
    // your code here
    
        for (let index = 0; index < nums.length; index++) {
    
            const theOtherPart = target - nums[0]
    
            // ex. 9 - 2 = 7
            // 7 is the other part.
    
            const findTheOtherPart = nums.indexOf(theOtherPart, index + 1)
    
            // find '7' in array. Begins with [1], cuz [0] here is 2.
    
            if (findTheOtherPart !== -1 ) {
    
            // if found it, then return this number's position
    
                return [index , findTheOtherPart]
                
            }else{
    
                return null
            }
            
        }
    
        
    }
    /*
    For example:
    twoSum([2, 7, 11, 15], 9); Should returns:
    [0, 1] Because:
    
    nums[0] + nums[1] is 9
    
    */
    
    twoSum([2, 7, 11, 15], 9);