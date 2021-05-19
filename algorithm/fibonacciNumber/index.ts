/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-18
 * @description 波那契数
 * @param {number} n 目标值
 * @return {number} 函数返回值
 */
export const fibonacci = (n: number ): number => {
    const fib = (n: number): number => {
        return n === 0 || n === 1 ? n : fib(n - 1) + fib(n - 2)
    }
    return fib(n);
}