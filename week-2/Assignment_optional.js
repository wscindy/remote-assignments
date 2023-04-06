function twoSum(nums, target) {
    // your code here

    let allAnwser = []


    for (let i = 1; i < nums.length; i++) {
        const item = nums[0] + nums[i];
        allAnwser.push({ a: nums.indexOf(nums[0]), b: i, c: item })

        for (let index = 0; index < allAnwser.length; index++) {
            if (allAnwser[index].c === target) {

                return [allAnwser[index].a, allAnwser[index].b]
            }
        }



    }

    for (let i = 2; i < nums.length; i++) {
        const item = nums[1] + nums[i];
        allAnwser.push({ a: nums.indexOf(nums[1]), b: i, c: item })

        for (let index = 0; index < allAnwser.length; index++) {
            if (allAnwser[index].c === target) {

                return [allAnwser[index].a, allAnwser[index].b]
                break
            }
        }


    }


    for (let i = 3; i < nums.length; i++) {
        const item = nums[2] + nums[i];
        allAnwser.push({ a: nums.indexOf(nums[2]), b: i, c: item })


        for (let index = 0; index < allAnwser.length; index++) {
            if (allAnwser[index].c === target) {

                return [allAnwser[index].a, allAnwser[index].b]
                break
            }
        }

    }











}
/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because:
 
nums[0] + nums[1] is 9
 
*/

// twoSum([2, 7, 11, 15], 9);

twoSum([2, 7, 11, 15], 18)
    // twoSum([11, 2, 7, 11], 22);




