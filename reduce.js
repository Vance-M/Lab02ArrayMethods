
const reduceMethod = (arr, callback) => {
    let initial = 0;
    for (let i = 0; i < arr.length; i++) {
       initial = callback(arr[i], initial)
    }
    return initial;
}

module.exports = reduceMethod;
