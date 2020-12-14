
const puppies = ['shoo', 'chow', 'biscuit', 'mr. fluff', 'kevin'];

function gimmiePairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            console.log( `${array[i]} and ${array[k]}`);
        }
    }
}

gimmiePairs(puppies);


function cbReturn(num, cb1, cb2) {
    cb1(num);
    cb2(num);
    if (cb1 > cb2) return cb1;
    return cb2;
}

function doubleIt(num) {
    return num * 2;
}

function squareIt(num) {
    return num * num;
}

console.log(cbReturn(5, doubleIt, squareIt));
console.log(cbReturn(1, doubleIt, squareIt));

// writing my own forEach function
const names = ['kafel', 'cindy', 'jon', 'paloma'];

names.forEach(name => console.log(mane));

function myForEach(array, cb) {
    for(i = 0; i < array.length; i++){
      cb(array[i]);
    }
    return 
  }
  
  function ready(person) {
    console.log(`${person} is Ready!!`);
  }
  
  myForEach(names, ready);