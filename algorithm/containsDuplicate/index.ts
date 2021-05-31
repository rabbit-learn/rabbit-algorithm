/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-23
 * @description 丑数
 * @param {number} num 目标值
 * @return {boolean} 函数返回值
 */
export const isUgly = (num: number): boolean => {
  if (num < 1) {
    return false;
  } else if (num === 1) {
    return true;
  } else {
    let n = divide(num);
    if (n === -1) {
      return false;
    } else if (n === 1) {
      return true;
    }
    while (n > 1) {
      n = divide(n);
      if (n === -1) {
        return false;
      }
    }
    return true;
  }
};

const divide = (n: number) => {
  if (n % 2 === 0) {
    return Math.floor(n / 2);
  } else if (n % 3 === 0) {
    return Math.floor(n / 3);
  } else if (n % 5 === 0) {
    return Math.floor(n / 5);
  } else {
    return -1;
  }
};
