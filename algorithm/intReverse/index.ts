/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-04-30
 * @description 整数反转
 * @param {number} x 有符号整数目标值
 * @return {number} 函数返回值
 */
export const reverse = (x: number): number => {
    const n = x;
    if(x < 0) x = x * -1;
    let sum: number = 0;
    while (x > 0) {
        const m: number = x % 10;
        const temp: number = sum;
        sum = sum * 10 + m;
        if(Math.floor(sum / 10) !== temp) return 0;
        x = Math.floor(x / 10);
    }
    if(n < 0) {
        sum = sum * -1
    }
    return sum
}