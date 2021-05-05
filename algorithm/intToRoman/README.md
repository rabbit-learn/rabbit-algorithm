## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/intToRoman/index.ts

## 题目地址(整数转罗马数字)

https://leetcode-cn.com/problems/integer-to-roman

## 题目描述

```
罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

示例1:

输入: 3
输出: "III"

示例2:

输入: 4
输出: "IV"

示例3:

输入: 9
输出: "IX"

示例4:

输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.

示例5:

输入: 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

## 代码

- 语言: TypeScript

```typescript
export const romanToInt = (s: string): number => {
  const romanMap = new Map();
  romanMap.set("I", 1);
  romanMap.set("V", 5);
  romanMap.set("X", 10);
  romanMap.set("L", 50);
  romanMap.set("C", 100);
  romanMap.set("D", 500);
  romanMap.set("M", 1000);
  let result = 0,
    size = s.length;
  for (let i = 0; i < size; i++) {
    const c = s.charAt(i);
    if (i + 1 < size) {
      const nextC = s.charAt(i + 1);
      let isLeap = false;
      switch (c) {
        case "I":
          if (nextC === "V") {
            result += 4;
            isLeap = true;
          } else if (nextC === "X") {
            result += 9;
            isLeap = true;
          } else {
            result += romanMap.get(c);
          }
          break;
        case "X":
          if (nextC === "L") {
            result += 40;
            isLeap = true;
          } else if (nextC === "C") {
            result += 90;
            isLeap = true;
          } else {
            result += romanMap.get(c);
          }
          break;
        case "C":
          if (nextC === "D") {
            result += 400;
            isLeap = true;
          } else if (nextC === "M") {
            result += 900;
            isLeap = true;
          } else {
            result += romanMap.get(c);
          }
          break;
        default:
          result += romanMap.get(c);
          break;
      }
      if (isLeap) {
        ++i;
      }
    } else {
      result += romanMap.get(c);
    }
  }
  return result;
};
```
