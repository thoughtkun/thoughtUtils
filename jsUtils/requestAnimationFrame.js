// make sure requestAnimationFrame and cancelAnimationFrame are defined
// polyfill for browsers without native support
(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz', 'ms', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        // 首先使用各浏览器支持的requestAnimationFrame
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    // 如果上述版本都不支持
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();//当前时间
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));//调用时间等于当前时间减去上次调用时间
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        }
    }
    // 取消动画的兼容写法
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        }
    }
}());
