/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-17
 * @description 搜索插入位置
 * @param {number[]} nums 目标排序数组
 * @param {number} target 目标值
 * @return {number} 函数返回值
 */
export const searchInsert = (nums: number[], target: number ): number => {
    for (let i = 0; i < nums.length; i++) {
        if(target === nums[i] || (target < nums[i] && (i === 0 || target > nums[i - 1]))) return i;
    }
    return nums.length;
}