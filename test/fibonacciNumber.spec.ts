import { fibonacci } from '../algorithm/fibonacciNumber'

describe('波那契数', () => {
    test('fibonacci', () => {
        expect(fibonacci(0)).toEqual(0)
        expect(fibonacci(1)).toEqual(1)
        expect(fibonacci(2)).toEqual(1)
        expect(fibonacci(3)).toEqual(2)
        expect(fibonacci(4)).toEqual(3)
    })
})