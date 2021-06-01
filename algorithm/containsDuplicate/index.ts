/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-24
 * @description 存在重复元素
 * @param {number[]} nums 目标值
 * @return {boolean} 函数返回值
 */
export const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set()
  for(const num of nums) {
    if(set.has(num)) return true;
    set.add(num)
  }
  return false
};
