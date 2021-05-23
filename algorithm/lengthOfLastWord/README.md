## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/lengthOfLastWord/index.ts

## 题目地址(最后一个单词的长度)

https://leetcode-cn.com/problems/length-of-last-word

## 题目描述

```
给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

示例1:

输入：s = "Hello World"
输出：5

示例2:

输入：s = " "
输出：0

提示:

1 <= s.length <= 10^4
s 仅有英文字母和空格 ' ' 组成
```

## 代码

- 语言: TypeScript

```typescript
export const lengthOfLastWord = (s: string): number => {
  let lastWordLength = 0;
  for (let i = s.length - 1; i > -1; i--) {
    if (s.charAt(i) === " ") {
      if (lastWordLength > 0) break;
    } else {
      ++lastWordLength;
    }
  }
  return lastWordLength;
};
```
