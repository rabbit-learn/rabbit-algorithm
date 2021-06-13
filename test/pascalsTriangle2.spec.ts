import { pascalsTriangle2 } from "../algorithm/pascalsTriangle2";

describe("杨辉三角2", () => {
  test("pascalsTriangle2", () => {
    expect(pascalsTriangle2(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });
});
