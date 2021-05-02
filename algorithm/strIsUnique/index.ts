/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-02
 * @description 判定字符是否唯一
 * @param {string} astr 目标字符串
 * @return {boolean} 函数返回值
 */
export const isUnique = (astr: string): boolean => {
    for(let i:number = 0; i < astr.length; i++) {
        for(let j:number = i + 1; j < astr.length; j++) {
            if(astr.charAt(i) === astr.charAt(j)) return false;
        }
    }
    return true;
}