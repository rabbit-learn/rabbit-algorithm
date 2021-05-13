import { canPermutePalindrome } from '../algorithm/palindromePermutation'

describe('回文排列', () => {
    test('canPermutePalindrome', () => {
        expect(canPermutePalindrome("tactcoa")).toEqual(true)
        expect(canPermutePalindrome("tactco")).toEqual(false)
        expect(canPermutePalindrome("abc")).toEqual(false)
        expect(canPermutePalindrome("lol")).toEqual(true)
    })
})