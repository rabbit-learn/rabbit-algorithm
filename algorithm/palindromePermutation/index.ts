/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-12
 * @description 回文排列
 * @param {string} s 目标字符串
 * @return {boolean} 函数返回值
 */
export const canPermutePalindrome = (s: string): boolean => {
    const size = s.length;
    let singleTime = 0;
    while(s.length > 0) {
        const c = s.charAt(0);
        let i = s.indexOf(c);
        s = s.substring(0, i) + s.substring(i + 1);
        let n = s.indexOf(c);
        if(n > -1){
            s = s.substring(0, n) + s.substring(n + 1);
        }else{
            ++singleTime;
            if(size % 2 === 0){
                return false;
            }else{
                if(singleTime !== 1) return false;
            }
        }
    }
    return true;
}