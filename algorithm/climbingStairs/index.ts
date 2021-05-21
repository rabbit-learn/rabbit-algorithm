/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-19
 * @description 爬楼梯
 * @param {number} n 目标值
 * @return {number} 函数返回值
 */
export const climbStairs = (n: number ): number => {
    let currentTotal = 1, lastTotal = 1, m = 1;
    while (m < n) {
        const temp = currentTotal;
        lastTotal = temp;
        ++m;
    }
    return currentTotal;
}