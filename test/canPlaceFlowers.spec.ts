import { canPlaceFlowers } from '../algorithm/canPlaceFlowers'

describe('有效的括号', () => {
    test('canPlaceFlowers', () => {
        expect(canPlaceFlowers([1,0,0,0,1], 1)).toEqual(true)
        expect(canPlaceFlowers([1,0,0,0,1], 2)).toEqual(false)
    })
})