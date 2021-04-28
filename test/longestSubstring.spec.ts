import { lengthOfLongestSubstring, lengthOfLongestSubstring1 } from '../algorithm/longestSubstring'

describe('无重复字符的最长子串', () => {
    test('lengthOfLongestSubstring', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3)
        expect(lengthOfLongestSubstring("bbbbb")).toEqual(1)
        expect(lengthOfLongestSubstring("pwwkew")).toEqual(3)
    })
})

describe('无重复字符的最长子串', () => {
    test('lengthOfLongestSubstring1', () => {
        expect(lengthOfLongestSubstring1("abcabcbb")).toEqual(3)
        expect(lengthOfLongestSubstring1("bbbbb")).toEqual(1)
        expect(lengthOfLongestSubstring1("pwwkew")).toEqual(3)
    })
})