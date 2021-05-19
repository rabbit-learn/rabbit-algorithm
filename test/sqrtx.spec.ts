import { mySqrt } from '../algorithm/sqrtx'

describe('x的平方根', () => {
    test('mySqrt', () => {
        expect(mySqrt(4)).toEqual(2)
        expect(mySqrt(8)).toEqual(2)
        expect(mySqrt(9)).toEqual(3)
        expect(mySqrt(16)).toEqual(4)
        expect(mySqrt(25)).toEqual(5)
    })
})