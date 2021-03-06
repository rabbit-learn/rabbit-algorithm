## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/canPlaceFlowers/index.ts

## 题目地址(有效的括号)

https://leetcode-cn.com/problems/valid-parentheses

## 题目描述

```
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

示例1:

输入：s = "()"
输出：true

示例2:

输入：s = "()[]{}"
输出：true

示例3:

输入：s = "(]"
输出：false

示例4:

输入：s = "([)]"
输出：false

示例5:

输入：s = "{[]}"
输出：true

提示:

1 <= s.length <= 10^4
s 仅由括号 '()[]{}' 组成
```

## 代码

- 语言: TypeScript

```typescript
export const isValid = (s: string): boolean => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if ("({[".indexOf(c) > -1) stack.push(c);
    if (")}]".indexOf(c) > -1) {
      if (stack.length < 1) return false;
      const top = stack.pop();
      switch (top) {
        case "(":
          if (c !== ")") {
            return false;
          }
          break;
        case "{":
          if (c !== "}") {
            return false;
          }
          break;
        case "[":
          if (c !== "]") {
            return false;
          }
          break;
        default:
          break;
      }
    }
  }
  return stack.length === 0;
};
```
