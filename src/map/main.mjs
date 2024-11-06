
//Maps are like objects, but they can have any data type as a key.
let europeanCities = new Map();

//set adds a new element with a specified key and value to the map.
europeanCities.set("London", "England");
europeanCities.set("Paris", "France");
europeanCities.set("Rome", "Italy");
europeanCities.set("Berlin", "Germany");
europeanCities.set("Madrid", "Spain");
europeanCities.set("Vienna", "Austria");
europeanCities.set("Stockholm", "Sweden");
europeanCities.set("Prague", "Czech Republic");
europeanCities.set("Amsterdam", "Netherlands");
europeanCities.set("Athens", "Greece");
europeanCities.set("Budapest", "Hungary");
europeanCities.set("Warsaw", "Poland");

console.log(europeanCities);

//get returns a specified element associated with the specified key.
console.log(europeanCities.get("London"));
console.log(europeanCities.get("Paris"));
console.log(europeanCities.get("Rome"));
console.log(europeanCities.get("Berlin"));
console.log(europeanCities.get("Madrid"));

//delete removes the specified element from the map.
europeanCities.delete("London");
console.log(europeanCities);

//has returns a boolean indicating whether an element with the specified key exists or not.
console.log(europeanCities.has("London"));
console.log(europeanCities.has("Paris"));
console.log(europeanCities.has("Rome"));
console.log(europeanCities.has("Berlin"));

//size returns the number of elements in the map.
console.log(europeanCities.size);

//clear removes all elements from the map.
europeanCities.clear();
console.log(europeanCities.size);

