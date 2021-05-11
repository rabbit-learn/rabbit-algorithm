/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-11
 * @description URL化
 * @param {string} S 目标字符串
 * @param {number} lenght 整数目标值
 * @return {string} 函数返回值
 */
export const replaceSpaces = (S: string, length: number): string => {
    return S.substring(0, length).replace(/' '/g, "%20")
}