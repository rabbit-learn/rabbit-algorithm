import { containsDuplicate } from "../algorithm/containsDuplicate";

describe("存在重复元素", () => {
  test("containsDuplicate", () => {
    expect(containsDuplicate([1,2,3,1])).toEqual(true);
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
    expect(containsDuplicate([1,2,3,4])).toEqual(false);
  });
});
