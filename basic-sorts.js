
function binarySearch(array, answer) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (array[middle] !== answer && start <= end) {

        if (answer < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        } 
        middle = Math.floor((start + end) / 2);
        
    } 
    return array[middle] === answer ?  middle : - 1;
    
} 