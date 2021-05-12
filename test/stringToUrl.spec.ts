import { replaceSpaces } from '../algorithm/stringToUrl'

describe('URL化', () => {
    test('replaceSpaces', () => {
        expect(replaceSpaces("Mr John Smith    ", 13)).toEqual('Mr%20John%20Smith')
        expect(replaceSpaces("               ", 5)).toEqual('%20%20%20%20%20')
    })
})