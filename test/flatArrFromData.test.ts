import { flatArrFromData } from "../packages/index";
import { describe, it, expect } from "vitest";

describe("测试flatArrFromData", () => {
  it("test1", () => {
    const inputData = [{ value: 1, children: [{ value: 2 }] }];
    const resultData = flatArrFromData(inputData);
    expect(resultData).toStrictEqual([1, 2]);
  });
});
