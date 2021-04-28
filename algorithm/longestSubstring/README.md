## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/algorithm/longestSubstring/index.ts

## 题目地址(无重复字符的最长子串)

https://leetcode-cn.com/problems/longest-substring-without-repeating-characters

## 题目描述

```
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例4:

输入: s = ""
输出: 0

提示：

0 <= s.length <= 5 * 10^4
s 由英文字母、数字、符号和空格组成
```

## 代码

- 语言: TypeScript

```typescript
export const lengthOfLongestSubstring = (s: string): number => {
    let size: number = 0;
    if(s) {
        const charList: string[] = []
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < s.length; j++) {
                const c: string = s.charAt(j)
                if(charList.indexOf(c)) break;
                charList.push(c)
            }
            if(charList.length > size) size = charList.length;
        }
    }
    return size;
}
```

```typescript
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
```