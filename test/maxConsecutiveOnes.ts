import { checkInclusion } from "../algorithm/permutationInString";

describe("最大连续1的个数", () => {
  test("checkInclusion", () => {
    expect(checkInclusion("ab", "eidbaooo")).toEqual(true);
  });
  test("checkInclusion", () => {
    expect(checkInclusion("ab", "eidboaoo")).toEqual(false);
  });
});
