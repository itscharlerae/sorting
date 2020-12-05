
// function binarySearch(array, answer) {
//     let start = 0;
//     let end = array.length -1;
//     let middle = Math.floor((start + end)/2);

//     while (array[middle] !== answer && start <= end) {
//         console.log(start, middle, end);

//         if (answer === array[middle]) middle;

//         if (answer < array[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end)/2);

//     } return -1; 
// } 


let people = ['rosemary', 'alex', 'josh', 'polina', 'david', 'anna'];

function allCaps(arr) {
    let newArr = [];
    arr.forEach(name => {
        newArr.push(name.toUpperCase())
    }); return newArr;
}

console.log(allCaps(people));