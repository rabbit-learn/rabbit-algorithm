import { compressString } from '../algorithm/compressString'

describe('字符串压缩', () => {
    test('compressString', () => {
        expect(compressString("aabcccccaaa")).toEqual("a2b1c5a3")
        expect(compressString("abbccd")).toEqual("abbccd")
    })
})