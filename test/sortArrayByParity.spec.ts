import { sortArrayByParity } from "../algorithm/sortArrayByParity";

describe("按奇偶排序数组", () => {
  test("sortArrayByParity", () => {
    expect(sortArrayByParity([1,2,3,1])).toEqual(true);
    expect(sortArrayByParity([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
    expect(sortArrayByParity([1,2,3,4])).toEqual(false);
  });
});
