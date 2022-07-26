import { batchAddDel } from "../packages/index";
import { describe, it, expect } from "vitest";

describe("测试batchAddDel", () => {
  it("test1", () => {
    const inputData = [1, 2, 3, 4, 5];
    const addition = [6];
    const reduce = [2];
    const resultData = batchAddDel(addition, reduce, inputData);
    expect(resultData).toStrictEqual([1, 3, 4, 5, 6]);
  });
});
