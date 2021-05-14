/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-14
 * @description 寻找数组的中心索引
 * @param {number []}} nums 目标数组
 * @return {number} 函数返回值
 */
export const pivotIndex = (nums: number[]): number => {
    if(nums.length < 2) return -1;
    let preSum = 0, lastSum = 0;
    for (let i = 1; i < nums.length; i++) {
        lastSum += nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        if(i > 0) {
            preSum += nums[i - 1]
            lastSum -= nums[i]
        }
        if(preSum === lastSum) return i;
    }
    return -1;
}