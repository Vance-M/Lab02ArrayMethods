
const filterMethod = (arr, callback) => {

    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
            if(callback(arr[i])){
                newArr[i] = arr[i]
            }
        };
    }
    return newArr;
}

module.exports = filterMethod;
