import { lengthOfLastWord } from '../algorithm/lengthOfLastWord'

describe('最后一个单词的长度', () => {
    test('lengthOfLastWord', () => {
        expect(lengthOfLastWord("Hello World")).toEqual(5)
        expect(lengthOfLastWord(" ")).toEqual(0)
    })
})