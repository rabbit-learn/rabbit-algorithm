import { checkInclusion } from "../algorithm/permutationInString";

describe("字符串的排列", () => {
  test("checkInclusion", () => {
    expect(checkInclusion("ab", "eidbaooo")).toEqual(true);
  });
  test("checkInclusion", () => {
    expect(checkInclusion("ab", "eidboaoo")).toEqual(false);
  });
});
