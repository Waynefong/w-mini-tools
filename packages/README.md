# 🥳 wTools

分享一些我工作上用到的小工具（封装方法）,不定时更新，欢迎 star🌟

### 🔖 **flatArrFromData**

- 扁平化数组
- 注意：仅匹配 value 值，需要递归处理的话，子级 key 为 children

```js
  import { flatArrFromData } from 'wTools';
  const inputData = [{ value: 1, children: [{ value: 2 }] }]; //源数据
  console.log(flatArrFromData(inputData)); //[1, 2]
```

### 🔖 **batchAddDel**

- 根据差集批量删除数据

```js
  import { batchAddDel } from 'wTools';
  const inputData = [1, 2, 3, 4, 5]; //源数据
  const addition = [6]; //新增数据
  const reduce = [2]; //删减数据
  console.log(batchAddDel(addition, reduce, inputData)); //[1, 3, 4, 5, 6]
```
