import { setDataByStyleRecursion } from "../packages/index";
import { describe, it, expect } from "vitest";

describe("测试setDataByStyleRecursion", () => {
  it("test1", () => {
    const inputData = [
      {
        name: "Tom",
        age: 30,
        child: [
          {
            name: "Jerry",
            age: 5,
          },
        ],
      },
    ];
    const style = {
      label: "name",
      value: "age",
      children: "child",
    };
    const recursionKey = "children";
    const resultData = setDataByStyleRecursion(inputData, style, recursionKey);
    expect(resultData).toStrictEqual([{ label: "Tom", value: 30, children: [{ label: "Jerry", value: 5 }] }]);
  });
  it("多层级", () => {
    const inputData = [
      {
        name: "Tom",
        age: 30,
        sex: "male",
        child: [
          {
            name: "Jerry",
            age: 5,
          },
        ],
      },
      {
        name: "Marry",
        age: 20,
      },
      {
        name: "Max",
        age: 50,
        child: [
          {
            name: "Wayne",
            age: 25,
            child: [
              {
                name: "Leo",
                age: 1,
              },
            ],
          },
        ],
      },
    ];
    const style = {
      label: "name",
      value: "age",
      children: "child",
    };
    const recursionKey = "children";
    const resultData = setDataByStyleRecursion(inputData, style, recursionKey);
    expect(resultData).toStrictEqual([
      {
        label: "Tom",
        value: 30,
        children: [
          {
            label: "Jerry",
            value: 5,
          },
        ],
      },
      {
        label: "Marry",
        value: 20,
      },
      {
        label: "Max",
        value: 50,
        children: [
          {
            label: "Wayne",
            value: 25,
            children: [
              {
                label: "Leo",
                value: 1,
              },
            ],
          },
        ],
      },
    ]);
  });
});
