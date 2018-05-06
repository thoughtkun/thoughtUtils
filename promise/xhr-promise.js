function getURL(URL) {
    return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText))
            };
        }
        req.onerror = () => {
            reject(new Error(req.statusText))
        }
        req.send()
    })
}

var URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(value) {
    console.log(value)
}).catch(function onRejected(error) {
    console.log(error)
})