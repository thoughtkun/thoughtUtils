//基于John Resig的prettyDate
Date.prototype.__defineGetter__('ago', function () {
    var diff = (new Date().getTime() - this.getTime()) / 1000,
        day_diff = Math.floor(diff / 86400);
    return day_diff == 0 && (
            diff < 60 && "just now" ||
            diff < 120 && "1 minute age" ||
            diff < 3600 && Math.floor(diff / 60) + 'minutes age' ||
            diff < 7200 && "1 hour ago" ||
            diff < 86400 && Math.floor(diff / 3600) + "hours ago") ||
        day_diff == 1 && "Yesterday" ||
        day_diff < 7 && day_diff + 'days ago' ||
        Math.ceil(day_diff / 7) + "weeks ago";
})