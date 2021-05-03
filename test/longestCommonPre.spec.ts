import { longestCommonPrefix } from '../algorithm/longestCommonPre'

describe('最长公共前缀', () => {
    test('longestCommonPrefix', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl')
        expect(longestCommonPrefix(["dog","racecar","car"])).toEqual('')
    })
})