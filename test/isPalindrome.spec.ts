import { isPalindrome } from '../algorithm/isPalindrome'

describe('整数反转(回文数)', () => {
    test('isPalindrome', () => {
        expect(isPalindrome(121)).toEqual(true)
        expect(isPalindrome(-121)).toEqual(false)
        expect(isPalindrome(10)).toEqual(false)
        expect(isPalindrome(-101)).toEqual(false)
        expect(isPalindrome(11)).toEqual(true)
    })
})