
/**
 * 传入一个数字参数，得到连续的数字数组
 * @param {Number} num [正常时间格式，如：2019-04-01 13:10:10]
 * 例如，传入 num 为 4，得到 ['00', '01', '02', '03']
 */
export function getArrayByNum(num) {
  if (num <= 0) return [];
  return [].map.call([...Array(num).keys()], item =>
    String(item).padStart(2, 0)
  );
}

/**
 * 获取当前时间信息：年月日时分秒
 */
export function getCurrTime() {
  const date = new Date();
  this.currTime = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  };
}

/**
 * 将正常时间格式转化为时间戳
 * @param {String} time [正常时间格式，如：2019-04-01 13:10:10]
 */
export function transToTimestamp(time = null) {
  // 没有对 time 做合法性校验
  // 假设传入的 time 都是合法的时间格式：2019-04-01 13:10:10
  const date = new Date(time);
  const timestamp = date.getTime(); // 13 位数字，精确到毫秒
  return timestamp;
}

/**
 * 将时间戳转化为时间
 * @param {String} timestamp 时间戳，默认值是当前时间的时间戳
 * @param {String} formats 最终返回的时间格式
 * YYYY|MM|DD|hh|mm|ss，分别是年/月/日/时/分/秒，可自由组合成想要的时间格式
 */
export function dateFormat(timestamp, formats) {
  formats = formats || "YYYY-MM-DD hh:mm:ss";
  var date = timestamp ? new Date(timestamp) : new Date();
  var obj = {
    YYYY: String(date.getFullYear()).padStart(2, 0),
    MM: String(date.getMonth() + 1).padStart(2, 0),
    DD: String(date.getDate()).padStart(2, 0),
    hh: String(date.getHours()).padStart(2, 0),
    mm: String(date.getMinutes()).padStart(2, 0),
    ss: String(date.getSeconds()).padStart(2, 0)
  };
  return formats.replace(/YYYY|MM|DD|hh|mm|ss/gi, function (matches) {
    return obj[matches];
  });
}

/**
 * 将时间戳转化为星期几
 * @param {String} timestamp 时间戳
 */
export function getWeekDay(timestamp) {
  // 一周的第一天是周日
  const obj = ["日", "一", "二", "三", "四", "五", "六"];
  const index = new Date(timestamp).getDay();
  return "星期" + obj[index];
}