<template>
  <ul>
    <li v-for="(item, index) in resultData" :key="index">{{ index }}：{{ item }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { flatArrFromData, batchAddDel } from "wTools";
const resultData = reactive({
  flatResult: <Array<any>>[],
  batchResult: <Array<any>>[],
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
onMounted(() => {
  testFlatArrFromData();
  testBatchAddDel();
});
</script>
