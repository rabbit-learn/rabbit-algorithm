import { sortArrayByParity } from "../algorithm/sortArrayByParity";

describe("按奇偶排序数组", () => {
  test("sortArrayByParity", () => {
    expect(sortArrayByParity([3,1,2,4])).toEqual([2, 4, 1, 3]);
  });
});
