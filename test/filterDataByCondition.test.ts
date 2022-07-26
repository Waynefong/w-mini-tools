import { describe, it, expect } from "vitest";
import { filterDataByCondition } from "../packages/index";

describe("测试filterDataByCondition", () => {
  it("test1", () => {
    const condition = { isDisable: true };
    const filterData = [
      { label: "a", value: 1, isDisable: true },
      { label: "b", value: 2 },
    ];
    const resultData = filterDataByCondition(filterData, condition);
    expect(resultData).toStrictEqual([{ label: "b", value: 2 }]);
  });
  it("test2", () => {
    const condition = { isDisable: false };
    const filterData = [
      { label: "a", value: 1, isDisable: false },
      { label: "b", value: 2, isDisable: true },
    ];
    const resultData = filterDataByCondition(filterData, condition);
    expect(resultData).toStrictEqual([{ label: "b", value: 2, isDisable: true }]);
  });
  it("多条件", () => {
    const condition = { isDisable: false, isDel: true };
    const filterData = [
      { label: "a", value: 1, isDisable: false },
      { label: "b", value: 2, isDisable: true, isDel: true },
    ];
    const resultData = filterDataByCondition(filterData, condition);
    expect(resultData).toStrictEqual([]);
  });
});
