/**
 * 通用事件绑定函数
 */

export default bindEvent = (elem, type, selector, fn) => {
    // 这样处理，可接收两种调用方式 bindEvent(div1, 'click', 'a', function () {...}) 和 bindEvent(div1, 'click', function () {...}) 
    if (fn == null) {
        fn = selector
        selector = null
    }
    //绑定事件
    elem.addEventListener(type, function (e) {
        let target
        if (selector) {
            //有selector则使用事件代理
            // 使用代理的优点：
            // 1. 代码简洁
            // 2. 减少浏览器内存占用
            target = e.target
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            fn(e)
        }
    })

}