# 🥳 w-mini-tools

分享一些我工作上用到的小工具（封装方法）,不定时更新，欢迎 star🌟

## 安装

```shell
  npm install w-mini-tools
```

## 方法

### 🔖 **flatArrFromData**

- 扁平化数组
- 注意：仅匹配 value 值，需要递归处理的话，子级 key 为 children

```js
import { flatArrFromData } from "w-mini-tools";
const inputData = [{ value: 1, children: [{ value: 2 }] }]; //源数据
console.log(flatArrFromData(inputData)); //[1, 2]
```

### 🔖 **batchAddDel**

- 根据差集批量删除数据

```js
import { batchAddDel } from "w-mini-tools";
const inputData = [1, 2, 3, 4, 5]; //源数据
const addition = [6]; //待新增数组
const reduce = [2]; //待删减数组
console.log(batchAddDel(addition, reduce, inputData)); //[1, 3, 4, 5, 6]
```

### 🔖 **filterDataByCondition**

- 根据条件过滤数据
- 注意：仅支持一个层级

```js
const condition = { isDisable: false }; //过滤条件
const filterData = [
  { label: "a", value: 1, isDisable: false },
  { label: "b", value: 2, isDisable: true },
]; //源数据
console.log(filterDataByCondition(filterData, condition)); //[{ label: "b", value: 2, isDisable: true }]
```

### 🔖 **setDataByStyleRecursion**

- 根据指定格式返回数据
- 支持递归，需设置判断递归的 key 值，如传入数组希望将 children 值对应的数据也进行递归，则 recursionKey 传入 children
- 注意：递归关键字需 style 内配置的 key

```js
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
]; //源数据
const style = {
  label: "name",
  value: "age",
  children: "child",
}; //期望处理后的格式
const recursionKey = "children"; //递归关键字
console.log(setDataByStyleRecursion(inputData, style, recursionKey));
/**
 * [{
    label: "Tom",
    value: 30,
    children: [
      {
        label: "Jerry",
        value: 5,
      },
    ],
   }]
 */
```

### 🔖 **numMulti**

- 数字以某个系数放大，2\*100 = 200
- 解决数字精度丢失问题，如：19.9\*100 ≠ 1990

```js
const num = 19.9; //待转换数字
const multiple = 100; //倍数
console.log(numMulti(num, multiple)); //1990
```

## 其他帮助

- 不明白的，你可以来我的[ github ](https://github.com/Waynefong/w-mini-tools)看看 🧐
- 有错误的，希望你可以提出，我们一起进步 🤣

## 相关文档

[Document Link](https://waynefong.github.io/w-tools-wordpress/w-mini-tools/)
