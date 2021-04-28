/**
 * @author Jack huan 最帅的坏兔子
 * @param {string} s 源字符串
 * @return {number} 函数返回值
 */
export const lengthOfLongestSubstring = (s: string): number => {
    let size: number = 0;
    if(s) {
        let charList: string[] = []
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                const c: string = s.charAt(j)
                if(charList.indexOf(c) > -1) break;
                charList.push(c)
            }
            if(charList.length > size) size = charList.length;
            charList = []
        }
    }
    return size;
}

/**
 * @author Jack huan 最帅的坏兔子
 * @param {string} s 源字符串
 * @return {number} 函数返回值
 */
export const lengthOfLongestSubstring1 = (s: string): number => {
    let size: number = 0;
    if(s) {
        const charMap = new Map()
        let start: number = 0;
        for (let i = 0; i < s.length; i++) {
            const c: string = s.charAt(i)
            if(charMap.has(c)){
                const index: number = charMap.get(c) + 1
                if(index > start) start = index;
            }
            const length: number = i - start + 1;
            if(length > size) size = length;
            charMap.set(c, i)
        }
    }
    return size;
}