/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-26
 * @description 按奇偶排序数组
 * @param {number[]} A 目标值
 * @return {number[]} 函数返回值
 */
export const sortArrayByParity = (A: number[]): number[] => {
  const B: number[] = []
  let eventIndex: number = 0;
  let oddIndex: number = 0;
  for(let value of A) {
    if(value % 2 === 0){
      B[eventIndex] = value;
      ++eventIndex;
    }else{
      B[oddIndex] = value;
      --oddIndex;
    }
  }
  return B;
};
