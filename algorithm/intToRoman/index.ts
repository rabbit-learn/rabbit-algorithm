/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-05
 * @description 整数转罗马数字
 * @param {number} num 整数
 * @return {string} 函数返回值
 */
export const intToRoman = (num: number): string => {
    const romanArray: [number, string][] = [
        [1, 'I'],
        [4, 'IV'],
        [5, 'V'],
        [9, 'IX'],
        [10, 'X'],
        [40, 'XL'],
        [50, 'L'],
        [90, 'XC'],
        [100, 'C'],
        [400, 'CD'],
        [500, 'D'],
        [900, 'CM'],
        [1000, 'M'],
    ]
    const romanMap = new Map(romanArray);
    const list: number[] = []
    let m: number = 1;
    while (num > 0) {
        let rem = num % 10;
        if(rem === 4 || rem === 9) {
            list.push(rem * m)
        }else{
            if(rem > 4) {
                rem = rem % 5;
                for(let i = 0; i < rem; i++) {
                    list.push(m)
                }
                list.push(5 * m)
            }else{
                for (let i = 0; i < rem; i++) {
                    list.push(m)
                }
            }
        }
        m = m * 10;
        num = Math.floor(num / 10);
    }
    let index = list.length - 1, result = '';
    for (let i = index; i > -1; i--) {
        const n = list[i];
        if(romanMap.get(n)) {
            result += romanMap.get(n).toString()
        }
    }
    return result;
}