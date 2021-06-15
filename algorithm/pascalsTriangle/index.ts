/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-27
 * @description 杨辉三角
 * @param {number} numRows 目标值
 * @return {boolean} 函数返回值
 */

export const pascalsTriangle = (numRows: number): number[][] => {
  const arr = []
  for(let i = 0; i < numRows; i++) {
    const list = []
    list.push(1)
    if(i > 0) {
      const temp = arr[i - 1]
      for (let j = 1; j < temp.length; j++) {
        list.push(temp[j - 1] + temp[j])
      }
      list.push(1)
      arr.push(list)
    }else{
      arr.push(list)
    }
  }
  return arr
};
