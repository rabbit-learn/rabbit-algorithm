import { pivotIndex } from '../algorithm/findPivotIndex'

describe('有效的括号', () => {
    test('pivotIndex', () => {
        expect(pivotIndex([])).toEqual(-1)
        expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3)
        expect(pivotIndex([1, 2, 3])).toEqual(-1)
        expect(pivotIndex([2, 1, -1])).toEqual(0)
        expect(pivotIndex([0, 0, 0, 0, 1])).toEqual(4)
    })
})