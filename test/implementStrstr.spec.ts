import { strStr } from '../algorithm/implementStrstr'

describe('有效的括号', () => {
    test('strStr', () => {
        expect(strStr("hello", "ll")).toEqual(2)
        expect(strStr("aaaaa", "baa")).toEqual(-1)
    })
})