/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-22
 * @description 计数质数
 * @param {number} n 目标值
 * @return {number} 函数返回值
 */
export const countPrimes = (n: number ): number => {
    if(n < 3) return 0;
    let num = 1;
    for (let i = 3; i < n; i+2) {
        let isPrime = true;
        for (let j = 3; j**2 < i; j+2) {
            if(i * j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) ++num;
    }
    return num;
}