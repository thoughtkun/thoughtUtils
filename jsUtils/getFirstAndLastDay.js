/**
 * 获取一周或一个月的第一天和最后一天
 */
export default (type) => {
  let dateObj = {},
    date = new Date(),
    Wday = date.getDay(), //0-6
    Mday = date.getDate(), //1~31
    Year = date.getFullYear(),
    Month = date.getMonth(); //0~11
  switch (type) {
    case "week":
      if (Wday == 1) {
        dateObj = {
          first: date + "",
          last: date.setDate(Mday + 6) + ""
        }
      } else if (Wday == 0) {
        dateObj = {
          first: date.setDate(Mday - 6) + "",
          last: date.setDate(Mday) + ""
        }
      } else {
        dateObj = {
          first: date.setDate(Mday - Wday + 1) + "",
          last: date.setDate(Mday - Wday + 7) + ""
        }
      }
      return dateObj;
    case "month":
      dateObj = {
        first: new Date(Year, Month, 1).getTime() + "",
        last: new Date(Year, Month + 1, 0).getTime() + ""
      }
      return dateObj;
    default:
      return;
  }
}