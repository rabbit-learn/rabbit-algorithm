/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-28
 * @description 杨辉三角 II
 * @param {number} rowIndex 目标值
 * @return {boolean} 函数返回值
 */

export const pascalsTriangle2 = (rowIndex: number): number[] => {
  const res = new Array(rowIndex + 1);
  res[0] = 1;
  for (let i = 1; i < rowIndex + 1; i++) {
    res[0] = res[i] = 1;
    for (let j = i - 1; j > 0; j--) {
      res[j] += res[j - 1];
    }
  }
  return res;
};
