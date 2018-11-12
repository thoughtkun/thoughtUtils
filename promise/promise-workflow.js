function asyncFunction() {
    return new Promise(function (resolve, reject) {
        // setTimeout(() => {
        //     resolve('Async Hello world!')
        // }, 16);
    })
}
asyncFunction().then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err)
});