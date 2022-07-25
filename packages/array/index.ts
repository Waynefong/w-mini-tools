/**
 * 扁平化数组
 * 将[{value:1,children:[{value:2}]}]
 * 扁平化为[1,2]
 * 注意：仅匹配value值，需要递归处理的话，子级key为children
 */
export const flatArrfromData = (data: Array<any>) => {
  const resultData = <Array<any>>[];
  const flat = (arr: Array<any>) => {
    arr.forEach((item) => {
      resultData.push(item.value);
      if (item.children && item.children.length > 0) {
        flat(item.children);
      }
    });
  };
  flat(data);
  return resultData;
};

/**
 * 根据差集批量删除数据
 * 传入[1,2,3,4,5]
 * addition[6]
 * reduce[2]
 * 返回[1,3,4,5,6]
 */
export const batchAddDel = (addition: Array<any>, reduce: Array<any>, data: Array<any>) => {
  const beforeReduce = data.filter((d) => {
    let same = 0;
    reduce.forEach((r) => {
      if (d === r) {
        same++;
      }
    });
    if (same === 0) {
      return d;
    }
  });
  const beforeAddition = new Set([...beforeReduce, ...addition]);
  return [...beforeAddition];
};
