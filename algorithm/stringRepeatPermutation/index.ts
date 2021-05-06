/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-06
 * @description 判定是否互为字符重排
 * @param {string} s1 字符串s1
 * @param {string} s2 字符串s2
 * @return {boolean} 函数返回值
 */
export const checkPermutation = (s1:string, s2: string): boolean => {
    if(s1.length !== s2.length) return false;
    for(let i = 0; i < s1.length; i++) {
        const c = s1.charAt(i)
        const index = s2.indexOf(c)
        if(index > -1) {
            s2 = s2.substring(0, index) + s2.substring(index + 1)
        }else {
            return false
        }
    }
    return true
}