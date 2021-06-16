/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-29
 * @description 找到所有数组中消失的数字
 * @param {number[]} nums 目标值
 * @return {number[]} 函数返回值
 */

export const findDisappearedNumbers = (nums: number[]): number[] => {
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    let index = nums[i];
    if (index > 0) {
      index = index - 1;
    } else {
      index = -index - 1;
    }
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      list.push(i + 1);
    }
  }
  return list;
};
