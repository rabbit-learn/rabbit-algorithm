## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/climbingStairs/index.ts

## 题目地址(爬楼梯)

https://leetcode-cn.com/problems/climbing-stairs

## 题目描述

```
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例1:

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例2:

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

## 代码

- 语言: TypeScript

```typescript
export const climbStairs = (n: number ): number => {
    let currentTotal = 1, lastTotal = 1, m = 1;
    while (m < n) {
        const temp =currentTotal;
        currentTotal += lastTotal;
        lastTotal = temp;
        ++m;
    }
    return currentTotal;
}
```
