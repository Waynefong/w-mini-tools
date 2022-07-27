/**
 * 扁平化数组
 * 将[{value:1,children:[{value:2}]}]
 * 扁平化为[1,2]
 * 注意：仅匹配value值，需要递归处理的话，子级key为children
 *  @param data 源数据
 * @returns
 */
export const flatArrFromData = (data: Array<any>) => {
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
 * @param addition 待新增数组
 * @param reduce 待删减数组
 * @param data 源数据
 * @returns
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

/**
 * 根据条件过滤数据
 * 例：condition:{isDisable:true}
 * 当filterData数据里有isDisable且值为true时，将过滤该条数据
 * 注意：仅支持一个层级
 * @param filterData 源数据
 * @param condition 过滤条件
 * @returns
 */
export const filterDataByCondition = (filterData: Array<any>, condition: Record<string, any>) => {
  if (filterData.length > 0) {
    const copyData = [...filterData];
    const keys = Object.keys(condition);
    const newData = [];
    for (let i = 0; i < copyData.length; i++) {
      let shouldAdd = 0;
      for (let j = 0; j < keys.length; j++) {
        if (copyData[i]?.[keys[j]] !== undefined && copyData[i][keys[j]] === condition[keys[j]]) {
          shouldAdd++;
        }
      }
      if (shouldAdd === 0) {
        newData.push(copyData[i]);
      }
    }
    return newData;
  }

  return [];
};

/**
 * 根据指定格式返回数据
 * 支持递归，需设置判断递归的key值，如传入数组希望将children值对应的数据也进行递归，则recursionKey传入children
 * @param data 源数据
 * @param style 期望处理后的格式
 * @param recursionKey 递归关键字，关键字需style内配置的key
 * @returns
 */
export const setDataByStyleRecursion = (data: Array<any>, style: Record<string, any>, recursionKey?: string) => {
  const keys = Object.keys(style);
  const recursion = (targetArray: Array<any>) => {
    let reData = [];
    if (targetArray?.length) {
      for (let i = 0; i < targetArray.length; i++) {
        let temp = <Record<string, any>>{};
        keys.forEach((key) => {
          if (targetArray[i]?.[style[key]] !== undefined) {
            temp[key] = targetArray[i][style[key]];
          }
        });
        // 如果传入需要递归字段，且data内含有，长度大于0，则递归处理
        if (recursionKey && targetArray[i]?.[style?.[recursionKey]]?.length > 0) {
          temp[recursionKey] = [];
          temp[recursionKey] = recursion(targetArray[i][style[recursionKey]]);
        }
        reData.push(temp);
      }
    }
    return reData;
  };
  return recursion(data);
};
