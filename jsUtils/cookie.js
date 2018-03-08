//cookie在浏览器中大小限制为4KB左右
/**
 * 获取cookie值
 * @param {required} name 
 */
export const getCookie = (name) => {
    let cookieName = encodeURIComponent(name) + "=",
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null,
        cookieEnd;

    if (cookieStart > -1) {
        cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd === -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
    }
    return cookieValue;
}
/**
 * 设置cookie值
 * @param {cookie名称 required} name 
 * @param {cookie值 required} value
 * @param {过期时间} opt_expires 
 * @param {cookie所在路径} opt_path 
 * @param {子域} opt_domain 
 * @param {SSL发送标签} opt_secure 
 */
export const setCookie = (name, value, opt_expires, opt_path, opt_domain, opt_secure) => {
    let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (opt_expires instanceof Date) {
        // cookie的过期时间仅支持GMT格式
        cookieText += "; expires=" + opt_expires.toGMTString();
    }
    if (opt_path) {
        // path表示cookie路径
        cookieText += "; path=" + opt_path;
    }
    if (opt_domain) {
        // 子域
        cookieText += "; domain=" + opt_domain;
    }
    if (opt_secure) {
        // 指定该标志后只有在SSL连接时才发送cookie
        cookieText += "; secure";
    }
    document.cookie = cookieText;
}
/**
 * 删除cookie
 * @param {required} name 
 */
export const removeCookie = (name) => {
    // 删除cookie即将key设为空，将过期时间设为过去
    setCookie(name, "", new Date(0));
}