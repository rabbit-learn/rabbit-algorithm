## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/repeatNum/index.ts

## 题目地址(数组中重复的数字)

https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof

## 题目描述

```
找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例1:

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3

限制：

2 <= n <= 100000
```

## 代码

- 语言: TypeScript

```typescript
export const findRepeatNumber = (nums: number[]): number => {
  const arr: boolean[] = [];
  for (const value of nums) {
    if (arr[value]) return value;
    arr[value] = true;
  }
  return 0;
};
```
