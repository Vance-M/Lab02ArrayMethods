
const mapMethod = (arr, callback) => {

    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
        newArr[i] = callback(arr[i]);
        }   else newArr[i] = arr[i];
    }
    return newArr;
}

module.exports = mapMethod;
