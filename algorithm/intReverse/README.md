## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/twoSum/index.ts

## 题目地址(整数反转)

https://leetcode-cn.com/problems/reverse-integer

## 题目描述

```
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

注意：

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

示例1:

输入：x = 123
输出：321

示例2:

输入：x = -123
输出：-321

示例3:

输入：x = 120
输出：21

示例4:

输入：x = 0
输出：0

提示：

-2^31 <= x <= 2^31 - 1
```

## 代码

- 语言: TypeScript

```typescript
export const reverse = (x: number): number => {
  const n = x;
  if (x < 0) x = x * -1;
  let sum: number = 0;
  while (x > 0) {
    const m: number = x % 10;
    const temp: number = sum;
    sum = sum * 10 + m;
    if (Math.floor(sum / 10) !== temp) return 0;
    x = x / 10;
  }
  if (n < 0) {
    sum = sum * -1;
  }
  return sum;
};
```
