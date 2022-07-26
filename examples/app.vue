<template>
  <ul>
    <li v-for="(item, index) in resultData" :key="index">{{ index }}：{{ item }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { flatArrFromData, batchAddDel, filterDataByCondition, setDataByStyleRecursion } from "../packages/index";
const resultData = reactive({
  flatResult: <Array<any>>[],
  batchResult: <Array<any>>[],
  filterResult: <Array<any>>[],
  setDataResult: <Array<any>>[],
});
function testFlatArrFromData() {
  const inputData = [{ value: 1, children: [{ value: 2 }] }];
  resultData.flatResult = flatArrFromData(inputData);
}
function testBatchAddDel() {
  const inputData = [1, 2, 3, 4, 5];
  const addition = [6];
  const reduce = [2];
  resultData.batchResult = batchAddDel(addition, reduce, inputData);
}
function testFilterDataByCondition() {
  const condition = { isDisable: false };
  const filterData = [
    { label: "a", value: 1, isDisable: false },
    { label: "b", value: 2, isDisable: true },
    { label: "c", value: 3 },
  ];
  resultData.filterResult = filterDataByCondition(filterData, condition);
}
function testSetDataByStyleRecursion() {
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
  resultData.setDataResult = setDataByStyleRecursion(inputData, style, recursionKey);
}
onMounted(() => {
  testFlatArrFromData();
  testBatchAddDel();
  testFilterDataByCondition();
  testSetDataByStyleRecursion();
});
</script>
