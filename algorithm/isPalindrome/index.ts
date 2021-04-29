/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-04-29
 * @description 回文数
 * @param {number} x 给定整数
 * @return {boolean} 函数返回值
 */
export const isPalindrome = (x: number): boolean => {
    if(x < 0) return false;
    let n: number = x;
    let sum: number = 0;
    while(x > 0) {
        const m: number = x % 10;
        sum = sum * 10 + m;
        x = Math.floor(x / 10);
    }
    return n == sum;
}