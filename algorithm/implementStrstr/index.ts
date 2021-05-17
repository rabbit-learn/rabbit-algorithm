/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-16
 * @description 实现strStr()
 * @param {string} haystack 目标字符串
 * @param {string} needle 给定查找字符串
 * @return {number} 函数返回值
 */
export const strStr = (haystack: string, needle: string ): number => {
    const needleLength: number = needle.length;
    if(needleLength === 0) return 0;
    let index: number = -1;
    let isJudge: boolean = false;
    let currentIndex: number = 0;
    let isEqual: boolean = false;
    for (let i = 0; i < haystack.length; i++) {
        const c = haystack.charAt(i);
        if(isJudge){
            if(c === needle.charAt(currentIndex)) {
                if(currentIndex === needleLength - 1){
                    isEqual = true;
                    break;
                } else {
                    ++currentIndex;
                }
            } else {
                i = index;
                index = -1;
                isJudge = false;
                currentIndex = 0;
            }
        } else {
            if(c === needle.charAt(0)) {
                index = i;
                if(currentIndex === needleLength - 1) {
                    isEqual = true;
                    break;
                } else {
                    isJudge = true;
                    ++currentIndex;
                }
            }
        }
        
    }
    return isEqual ? index : -1;
}