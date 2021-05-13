## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/palindromePermutation/index.ts

## 题目地址(回文排列)

https://leetcode-cn.com/problems/palindrome-permutation-lcci

## 题目描述

```
给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

回文串不一定是字典当中的单词。

示例1:

输入："tactcoa"
输出：true（排列有"tacocat"、"atcocta"，等等）
```

## 代码

- 语言: TypeScript

```typescript
export const canPermutePalindrome = (s: string): boolean => {
    const size = s.length;
    let singleTime = 0;
    while(s.length > 0) {
        const c = s.charAt(0);
        let i = s.indexOf(c);
        s = s.substring(0, i) + s.substring(i + 1);
        let n = s.indexOf(c);
        if(n > -1){
            s = s.substring(0, n) + s.substring(n + 1);
        }else{
            ++singleTime;
            if(size % 2 === 0){
                return false;
            }else{
                if(singleTime !== 1) return false;
            }
        }
    }
    return true;
}
```
