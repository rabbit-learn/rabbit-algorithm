import { climbStairs } from '../algorithm/climbingStairs'

describe('爬楼梯', () => {
    test('climbStairs', () => {
        expect(climbStairs(2)).toEqual(2)
        expect(climbStairs(3)).toEqual(3)
    })
})