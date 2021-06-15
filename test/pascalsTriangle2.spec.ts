import { pascalsTriangle2 } from "../algorithm/pascalsTriangle2";

describe("杨辉三角2", () => {
  test("pascalsTriangle2", () => {
    expect(pascalsTriangle2(3)).toEqual([1, 3, 3, 1]);
  });
});
