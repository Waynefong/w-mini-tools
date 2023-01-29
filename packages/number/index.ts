/**
 * 数字以某个系数放大，2*100 = 200
 * 解决数字精度丢失问题，如：19.9*100 ≠ 1990
 * @param num 待转换数字
 * @param multiple 倍数
 * @returns
 */
export const numMulti = (num: number, multiple: number) => {
  var baseNum = 0;
  try {
    baseNum += num.toString().split(".")[1].length;
  } catch (e) {}
  try {
    baseNum += multiple.toString().split(".")[1].length;
  } catch (e) {}
  return (
    (Number(num.toString().replace(".", "")) * Number(multiple.toString().replace(".", ""))) / Math.pow(10, baseNum)
  );
};
