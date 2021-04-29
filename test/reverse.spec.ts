import { reverse } from '../algorithm/intReverse'

describe('整数反转', () => {
    test('reverse', () => {
        expect(reverse(123)).toEqual(321)
        expect(reverse(-123)).toEqual(-321)
        expect(reverse(120)).toEqual(21)
        expect(reverse(0)).toEqual(0)
    })
})