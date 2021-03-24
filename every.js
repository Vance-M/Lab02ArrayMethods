
const everyMethod = (arr, callback) => {
    let truthy = true
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
            if(truthy = true){
                if(callback(arr[i]) === true){
                    truthy = true
                } else truthy = false;
            } return truthy;
        }
    }
    return truthy;
}

module.exports = everyMethod;
