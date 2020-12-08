
function mergeHelper(arrOne, arrTwo) {
    let joinedArray = [];
    let i = 0;
    let k = 0;
    
    while (i < arrOne.length && k < arrTwo.length) {
        if (arrTwo[k] > arrOne[i]) {
            joinedArray.push(arrOne[i]);
            i++;
        } else {
            joinedArray.push(arrTwo[k]);
            k++;
        }
    }
    return joinedArray;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let half = Math.floor(array.length/2);
    let leftArr =  mergeSort(array.slice(0, half));
    let rightArr = mergeSort(array.slice(half));
    
    return mergeHelper(leftArr, rightArr);
    
}