/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-03
 * @description 最长公共前缀
 * @param {string[]} strs 字符串数组
 * @return {string} 函数返回值
 */
export const longestCommonPrefix = (strs: string[]): string => {
    let result: string = '';
    if(strs.length > 0) {
        if(strs.length > 1) {
            const start = strs[0];
            let resultString = '';
            let isPre = true;
            for (let i = 0; i < start.length; i++) {
                resultString = resultString.concat(start.charAt(i));
                for (let j = 1; j < strs.length; j++) {
                    if(!strs[j].startsWith(resultString)){
                        isPre = false;
                        break;
                    }
                }
                if(!isPre) {
                    break;
                }
            }
            isPre ? result = resultString : result = resultString.slice(0, resultString.length - 1)
        }else{
            result = strs[0]
        }
    }
    return result;
}