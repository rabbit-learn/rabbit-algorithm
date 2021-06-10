import { pascalsTriangle } from "../algorithm/pascalsTriangle";

describe("杨辉三角", () => {
  test("pascalsTriangle", () => {
    expect(pascalsTriangle(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
});
