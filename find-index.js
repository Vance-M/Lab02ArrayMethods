
const findIndexMethod = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            return [i];
        }
    }
}

module.exports = findIndexMethod;
