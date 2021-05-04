/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-04-27
 * @description 罗马数字转整数
 * @param {string} s 罗马数字字符串
 * @return {number} 函数返回值
 */
export const romanToInt = (s: string): number => {
    const romanMap = new Map();
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
    let result = 0, size = s.length;
    for (let i = 0; i < size; i++) {
        const c = s.charAt(i)
        if(i+1 < size){
            const nextC = s.charAt(i + 1)
            let isLeap = false
            switch(c) {
                case 'I':
                    if(nextC === 'V') {
                        result += 4;
                        isLeap = true;
                    }else if(nextC === 'X') {
                        result += 9
                        isLeap = true
                    }else{
                        result += romanMap.get(c)
                    }
                    break;
                case 'X':
                    if(nextC === 'L') {
                        result += 40;
                        isLeap = true;
                    }else if(nextC === 'C') {
                        result += 90
                        isLeap = true
                    }else{
                        result += romanMap.get(c)
                    }
                    break;
                case 'C':
                    if(nextC === 'D') {
                        result += 400;
                        isLeap = true;
                    }else if(nextC === 'M') {
                        result += 900
                        isLeap = true
                    }else{
                        result += romanMap.get(c)
                    }
                    break;
                default:
                    result += romanMap.get(c)
                    break;
            }
            if(isLeap) {
                ++i
            }
        }else{
            result += romanMap.get(c);
        }
    }
    return result;
}