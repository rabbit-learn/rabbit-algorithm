import { findDisappearedNumbers } from "../algorithm/findDisappearedNumbers";

describe("找到所有数组中消失的数字", () => {
  test("findDisappearedNumbers", () => {
    expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6]);
  });
});
