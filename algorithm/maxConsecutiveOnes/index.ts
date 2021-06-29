/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-31
 * @description 最大连续1的个数
 * @param {number[]} nums 目标值1
 * @return {number} 函数返回值
 */

export const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = 0;
  let count = 0;
  for (let num of nums) {
    if (num === 1) {
      ++count;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }
  return max;
};
