
//objects are collections of key value pairs
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue",
    miles: 10000,
    isNew: false,
    owner: {
        name: "John",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        }
    }
};

console.log(car);


//accessing properties of an object
console.log(car.make);


//updating properties of an object
car.make = "Honda";
car.model = "Accord";
car.year = 2021;
car.color = "red";
car.miles = 20000;
car.isNew = true;
car.owner.name = "Jane";
car.owner.age = 35;
car.owner.address.street = "456 Main St";
console.log(car);

//deleting properties of an object
delete car.make;
delete car.model;
delete car.year;
console.log(car);

//Keys returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
console.log(Object.keys(car));

//Values returns an array of a given object's own enumerable property values, in the same order as we get with a normal loop.
console.log(Object.values(car));

//Entries returns an array of a given object's own enumerable property [key, value] pairs, in the same order as we get with a normal loop.
console.log(Object.entries(car));

//hasOwn returns true if the specified property is a direct property of the object i.e. it is defined on the object itself (not on its prototype chain).
console.log(Object.hasOwn(car, "make"));
console.log(Object.hasOwn(car, "color"));



