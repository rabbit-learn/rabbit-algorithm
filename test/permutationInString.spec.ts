import { checkInclusion } from "../algorithm/permutationInString";

describe("找到所有数组中消失的数字", () => {
  test("checkInclusion", () => {
    expect(checkInclusion([4,3,2,7,8,2,3,1])).toEqual([5,6]);
  });
});
