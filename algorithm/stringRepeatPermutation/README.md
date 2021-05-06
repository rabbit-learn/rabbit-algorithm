## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/stringRepeatPermutation/index.ts

## 题目地址(判定是否互为字符重排)

https://leetcode-cn.com/problems/check-permutation-lcci

## 题目描述

```
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例1:

输入: s1 = "abc", s2 = "bca"
输出: true 

示例2:

输入: s1 = "abc", s2 = "bad"
输出: false

说明:

0 <= len(s1) <= 100
0 <= len(s2) <= 100
```

## 代码

- 语言: TypeScript

```typescript
export const checkPermutation = (s1:string, s2: string): boolean => {
    if(s1.length !== s2.length) return false;
    for(let i = 0; i < s1.length; i++) {
        const c = s1.charAt(i)
        const index = s2.indexOf(c)
        if(index > -1) {
            s2 = s2.substring(0, index) + s2.substring(index + 1)
        }else {
            return false
        }
    }
    return true
}
```
