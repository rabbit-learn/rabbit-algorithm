import { findMaxConsecutiveOnes } from "../algorithm/maxConsecutiveOnes";

describe("最大连续1的个数", () => {
  test("findMaxConsecutiveOnes", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
  });
});
