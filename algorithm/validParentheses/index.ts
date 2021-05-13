/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-13
 * @description 有效的括号
 * @param {string} s 目标字符串
 * @return {boolean} 函数返回值
 */
export const isValid = (s: string): boolean => {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if('({['.indexOf(c) > -1) stack.push(c);
        if(')}]'.indexOf(c) > -1) {
            if(stack.length < 1) return false;
            const top = stack.shift()
            switch (top) {
                case '(':
                    if(c === ')') {
                        stack.pop()
                    }else{
                        return false;
                    }
                    break;
                case '{':
                    if(c === '}') {
                        stack.pop()
                    }else{
                        return false;
                    }
                    break;
                case '[':
                    if(c === ']') {
                        stack.pop()
                    }else{
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return stack.length === 0;
}