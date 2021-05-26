/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-21
 * @description 只出现一次的数字
 * @param {string} s 目标值
 * @return {number} 函数返回值
 */
export const singleNumber = (nums: number[] ): number => {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]
    }
    return res;
}