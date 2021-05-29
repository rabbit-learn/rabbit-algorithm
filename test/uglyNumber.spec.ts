import { isUgly } from "../algorithm/uglyNumber";

describe("计数质数", () => {
  test("isUgly", () => {
    expect(isUgly(6)).toEqual(true);
    expect(isUgly(8)).toEqual(true);
    expect(isUgly(14)).toEqual(false);
  });
});
