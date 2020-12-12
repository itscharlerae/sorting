
const puppies = ['shoo', 'chow', 'biscuit', 'mr. fluff', 'kevin'];

function gimmiePairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let k = 1; k < array.length; k++) {
            console.log( `${array[i]} and ${array[k]}`);
        }
    }
}

gimmiePairs(puppies);