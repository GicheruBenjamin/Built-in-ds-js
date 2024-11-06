
//Sets are collections of unique values.
let geometricShapes = new Set(["circle", "square", "triangle", "circle", "square", "triangle"]);
console.log(geometricShapes);

//Add adds a new element to the set.
geometricShapes.add("pentagon");
console.log(geometricShapes);

//Delete removes an element from the set.
geometricShapes.delete("pentagon");
console.log(geometricShapes);

//Has checks if an element is in the set.
console.log(geometricShapes.has("pentagon"));
console.log(geometricShapes.has("circle"));


//Size returns the number of elements in the set.
console.log(geometricShapes.size);

//Keys returns an iterator over the values in the set.
console.log(geometricShapes.keys());

//Values returns an iterator over the values in the set.
console.log(geometricShapes.values());

//Entries returns an iterator over the key/value pairs in the set.
console.log(geometricShapes.entries());

//Clear removes all elements from the set.
geometricShapes.clear();
console.log(geometricShapes);