/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-20
 * @description 最后一个单词的长度
 * @param {string} s 目标值
 * @return {number} 函数返回值
 */
export const lengthOfLastWord = (s: string ): number => {
    let lastWordLength = 0;
    for (let i = s.length - 1; i > -1 ; i--) {
        if(s.charAt(i) === ' '){
            if(lastWordLength > 0) break;
        }else{
            ++lastWordLength;
        }
    }
    return lastWordLength;
}