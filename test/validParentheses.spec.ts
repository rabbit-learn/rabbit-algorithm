import { isValid } from '../algorithm/validParentheses'

describe('有效的括号', () => {
    test('isValid', () => {
        expect(isValid("()")).toEqual(true)
        expect(isValid("()[]{}")).toEqual(true)
        expect(isValid("(]")).toEqual(false)
        expect(isValid("([)]")).toEqual(false)
        expect(isValid("{[]}")).toEqual(true)
    })
})