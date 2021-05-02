import { isUnique } from '../algorithm/strIsUnique'

describe('判定字符是否唯一', () => {
    test('isUnique', () => {
        expect(isUnique('leetcode')).toEqual(false)
        expect(isUnique('abc')).toEqual(true)
        expect(isUnique('code')).toEqual(true)
    })
})