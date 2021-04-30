/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-01
 * @description 找出数组中重复的数字。
 * @param {number[]} nums 非负整数数组
 * @return {number} 函数返回值
 */
export const findRepeatNumber = (nums: number[]): number => {
    const arr:boolean[] = [];
    for (const value of nums) {
        if(arr[value]) return value;
        arr[value] = true
    }
    return 0;
}