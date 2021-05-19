/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-19
 * @description x的平方根
 * @param {number} x 目标值
 * @return {number} 函数返回值
 */
export const mySqrt = (x: number ): number => {
    let i = 0;
    while(i <= x / 2) {
        if( i ** 2 === x || i ** 2 < x && (i + 1) ** 2 > x) return i;
        if((i + 1) ** 2 === x) return i + 1;
        ++i;
    }
    return i;
}