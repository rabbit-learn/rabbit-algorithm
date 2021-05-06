import { checkPermutation } from '../algorithm/stringRepeatPermutation'

describe('判定是否互为字符重排', () => {
    test('checkPermutation', () => {
        expect(checkPermutation('abc', 'bca')).toEqual(true)
        expect(checkPermutation('abc', 'bad')).toEqual(false)
        expect(checkPermutation('abc', 'bc')).toEqual(false)
    })
})