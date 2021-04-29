## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/isPalindrome/index.ts

## 题目地址(回文数)

https://leetcode-cn.com/problems/palindrome-number

## 题目描述

```
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例1:

输入: 121
输出: true

示例2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

进阶：

你能不将整数转为字符串来解决这个问题吗？
```

## 代码

- 语言: TypeScript

```typescript
export const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;
  let n: number = x;
  let sum: number = 0;
  while (x > 0) {
    const m: number = x % 10;
    sum = sum * 10 + m;
    x = Math.floor(x / 10);
  }
  return n == sum;
};
```
