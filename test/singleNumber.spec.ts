import { singleNumber } from '../algorithm/singleNumber'

describe('只出现一次的数字', () => {
    test('singleNumber', () => {
        expect(singleNumber([2,2,1])).toEqual(1)
        expect(singleNumber([4,1,2,1,2])).toEqual(4)
    })
})