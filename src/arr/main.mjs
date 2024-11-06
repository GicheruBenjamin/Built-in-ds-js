
// An array is a collection of values.
let clothes = ["shirt", "pants", "shoes"];
let laps = [62, 54, 16, 88, 10, 31];
let mixed = [1, "two", 3, "four", 5, true , 3.14 ];

//Push adds to the end of the array
clothes.push("socks");
laps.push(42);
mixed.push(false);
console.log(clothes, laps, mixed);

//Pop removes from the end of the array
clothes.pop();
laps.pop();
mixed.pop();
console.log(clothes, laps, mixed);

//Shift removes from the beginning of the array
clothes.shift();
laps.shift();
mixed.shift();
console.log(clothes, laps, mixed);

//Unshift adds to the beginning of the array
clothes.unshift("hat");
laps.unshift(1);
mixed.unshift("zero");
console.log(clothes, laps, mixed);

//Splice allows you to insert or remove elements at specific indices.
clothes.splice(1, 0, "socks");
laps.splice(2 ,2 , 22, 24);
mixed.splice(2, 1, "three");
console.log(clothes, laps, mixed);

//Slice allows you to create a new array from a portion of an existing array.
let slicedClothes = clothes.slice(1, 3);
let slicedLaps = laps.slice(1, 3);
let slicedMixed = mixed.slice(1, 3);
console.log(slicedClothes, slicedLaps, slicedMixed);

//Concat combines arrays into a new array.
let combined = clothes.concat(laps, mixed);
console.log(combined);

//Reverse reverses the order of elements in an array.
let reversedClothes = clothes.reverse();
let reversedLaps = laps.reverse();
let reversedMixed = mixed.reverse();
console.log(reversedClothes, reversedLaps, reversedMixed);

//Sort sorts the elements of an array in place and returns the array.
let sortedClothes = clothes.sort();
let sortedLaps = laps.sort();
let sortedMixed = mixed.sort();
console.log(sortedClothes, sortedLaps, sortedMixed);

//indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexOfClothes = clothes.indexOf("shirt");
let indexOfLaps = laps.indexOf(16);
let indexOfMixed = mixed.indexOf(true);
console.log(indexOfClothes, indexOfLaps, indexOfMixed);

//lastIndexOf returns the last index at which a given element can be found in the array, or -1 if it is not present.
let lastIndexOfClothes = clothes.lastIndexOf("shirt");
let lastIndexOfLaps = laps.lastIndexOf(16);
let lastIndexOfMixed = mixed.lastIndexOf(true);
console.log(lastIndexOfClothes, lastIndexOfLaps, lastIndexOfMixed);

//forEach iterates over each element in an array and executes a provided function.
clothes.forEach(function(item) {
    console.log(item);
});
//map creates a new array with the results of calling a provided function on every element in the array.
let mappedClothes = clothes.map(function(item) {
    return item + "!";
});
console.log(mappedClothes);
//filter creates a new array with all elements that pass the test implemented by the provided function.
let filteredClothes = clothes.filter(function(item) {
    return item.length > 4;
});
console.log(filteredClothes);
//reduce reduces an array to a single value by applying a function to each element in the array.
let reducedClothes = clothes.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, "");
console.log(reducedClothes);
//every returns true if all elements in the array pass the test implemented by the provided function.
let everyClothes = clothes.every(function(item) {
    return item.length > 4;
});
console.log(everyClothes);
//some returns true if at least one element in the array passes the test implemented by the provided function.
let someClothes = clothes.some(function(item) {
    return item.length > 4;
});
console.log(someClothes);
//find returns the value of the first element in the array that satisfies the provided testing function.
let foundClothes = clothes.find(function(item) {
    return item.length > 4;
});
console.log(foundClothes);
//findIndex returns the index of the first element in the array that satisfies the provided testing function.
let foundIndexClothes = clothes.findIndex(function(item) {
    return item.length > 4;
});
console.log(foundIndexClothes);