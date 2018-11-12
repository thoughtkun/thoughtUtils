//基于John Resig的prettyDate
Date.prototype.__defineGetter__('ago', function () {
    var diff = (new Date().getTime() - this.getTime()) / 1000,
        day_diff = Math.floor(diff / 86400);
    return day_diff == 0 && (
            diff < 60 && "刚刚" ||
            diff < 120 && "1 分钟之前" ||
            diff < 3600 && Math.floor(diff / 60) + ' 分钟之前' ||
            diff < 7200 && "1 小时之前" ||
            diff < 86400 && Math.floor(diff / 3600) + " 小时之前") ||
        day_diff == 1 && "昨天" ||
        day_diff < 7 && day_diff + ' 天前' ||
        Math.ceil(day_diff / 7) + " 周前";
})