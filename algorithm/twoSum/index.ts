/**
 * @author Jack huan 最帅的坏兔子
 * @param {number[]} nums 整数数组
 * @param {number} target 整数目标值
 * @return {number[]} 函数返回值
 */
export const twoSum = (nums: number[], target: number): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(i !== j && nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return null
}