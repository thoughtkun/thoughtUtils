/**
 * 对象深copy
 * @param {新对象} o1 
 * @param {旧对象} o2 
 */
export const deepClone = (o1, o2) => {
    for (let k in o2) {
        if (typeof o2[k] === 'object') {
            o1[k] = {};
            deepClone(o1[k], o2[k])
        } else {
            o1[k] = o2[k];
        }
    }
}

// 测试用例
let obj = {
    a: 1,
    b: [1, 2, 3],
    c: {}
};
let emptyObj = Object.create(null);
deepClone(emptyObj, obj);