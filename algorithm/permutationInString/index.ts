/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-30
 * @description 字符串的排列
 * @param {string} s1 目标值1
 * @param {string} s2 目标值2
 * @return {boolean} 函数返回值
 */

export const checkInclusion = (s1: string, s2: string): boolean => {
  if (s1.length < 1 && s2.length < 1) return false;
  if (s1.length < 1) return true;
  if (s2.length < 1) return false;
  let startIndex = 0,
    indexSize = 0,
    s = s1;
  for (let i = 0; i < s2.length; i++) {
    const c = s2.charAt(i);
    const index = s.indexOf(c);
    if (index > -1) {
      if (indexSize < 1) startIndex = i;
      ++indexSize;
      s = s.substring(0, index) + s.substring(index + 1);
      if (indexSize === s1.length) return true;
    } else {
      if (indexSize > 0 && i > startIndex + 1) i = startIndex;
      indexSize = 0;
      s = s1;
    }
  }
  return false;
};
