/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-07
 * @description 字符串压缩
 * @param {string} target 目标字符串
 * @return {string} 函数返回值
 */
export const compressString = (S: string): string => {
    let str = '';
    let num = 1;
    const size = S.length;
    if(size < 2) return S;
    for(let i = 0; i < size; i++) {
        const c = S.charAt(i);
        if(i === 0) {
            str += c;
            const cNext = S.charAt(i + 1);
            if(c !== cNext) {
                str += num;
                num = 1;
            }
            continue;
        }
        if(i === size - 1) {
            const cPre = S.charAt(i - 1);
            if(c === cPre) {
                ++num;
                str += num;
            }else {
                str += c; str += 1;
            }
            continue;
        }
        const cPre = S.charAt(i - 1);
        c === cPre ? ++num : str += c;
        const cNext = S.charAt(i + 1)
        if(c !== cNext) {
            str += num
            num = 1;
        }
    }
    return str.length < S.length ? str : S;
}