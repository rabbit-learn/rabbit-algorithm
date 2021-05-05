import { intToRoman } from '../algorithm/intToRoman'

describe('罗马数字转整数', () => {
    test('intToRoman', () => {
        expect(intToRoman(3)).toEqual('III')
        expect(intToRoman(4)).toEqual('IV')
        expect(intToRoman(9)).toEqual('IX')
        expect(intToRoman(58)).toEqual('LVIII')
        expect(intToRoman(1994)).toEqual('MCMXCIV')
    })
})