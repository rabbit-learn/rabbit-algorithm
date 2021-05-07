## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/compressString/index.ts

## 题目地址(字符串压缩)

https://leetcode-cn.com/problems/compress-string-lcci

## 题目描述

```
字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

示例1:

输入："aabcccccaaa"
输出："a2b1c5a3"

示例2:

输入："abbccd"
输出："abbccd"
解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。

提示:

字符串长度在[0, 50000]范围内。
```

## 代码

- 语言: TypeScript

```typescript
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
```
