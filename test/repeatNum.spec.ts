import { findRepeatNumber } from '../algorithm/repeatNum'

describe('数组中重复的数字', () => {
    test('findRepeatNumber', () => {
        expect(findRepeatNumber([2,7,11,15,7])).toEqual(7)
        expect(findRepeatNumber([3,2,4,6])).toEqual(0)
        expect(findRepeatNumber([3,2,2,3,4])).toEqual(2)
    })
})