import { countPrimes } from '../algorithm/countPrimes'

describe('计数质数', () => {
    test('countPrimes', () => {
        expect(countPrimes(10)).toEqual(4)
        expect(countPrimes(0)).toEqual(0)
        expect(countPrimes(1)).toEqual(0)
        expect(countPrimes(2)).toEqual(0)
        expect(countPrimes(3)).toEqual(1)
    })
})