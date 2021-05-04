## 源码路径

https://github.com/HuanBaby1314/rabbit-algorithm/blob/main/algorithm/longestCommonPre/index.ts

## 题目地址(最长公共前缀)

https://leetcode-cn.com/problems/longest-common-prefix

## 题目描述

```
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例1:

输入：strs = ["flower","flow","flight"]
输出："fl"

示例2:

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

提示：

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
```

## 代码

- 语言: TypeScript

```typescript
export const longestCommonPrefix = (strs: string[]): string => {
  let result: string = "";
  if (strs.length > 0) {
    if (strs.length > 1) {
      const start = strs[0];
      let resultString = "";
      let isPre = true;
      for (let i = 0; i < start.length; i++) {
        resultString = resultString.concat(start.charAt(i));
        for (let j = 1; j < strs.length; j++) {
          if (!strs[j].startsWith(resultString)) {
            isPre = false;
            break;
          }
        }
        if (!isPre) {
          break;
        }
      }
      isPre
        ? (result = resultString)
        : (result = resultString.slice(0, resultString.length - 1));
    } else {
      result = strs[0];
    }
  }
  return result;
};
```
