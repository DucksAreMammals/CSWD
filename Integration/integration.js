// Part 1
// Create our animals
let animals = [
	{
		id: 0,
		name: "Max",
		age: 12,
		breed: "Dalmation",
	},
	{
		id: 1,
		name: "Nano",
		age: 1,
		breed: "German Shepherd",
	},
	{
		id: 2,
		name: "Peanut",
		age: 3,
		breed: "Chihuahua",
	},
	{
		id: 3,
		name: "Millie",
		age: 18,
		breed: "Beagle",
	},
];

// Part 2
// Print names
console.log(animals[0].name);
console.log(animals[1].name);
console.log(animals[2].name);
console.log(animals[3].name);

// Part 3
// Update Peanut's age
animals[2].age = 4;
console.log(animals);

// Add gender to animals
animals[0].gender = "male";
animals[1].gender = "male";
animals[2].gender = "female";
animals[3].gender = "female";

// Part 4
// Log males
console.log(animals.filter((animal) => animal.gender === "male"));

// Log Millie
let result = animals.filter((animal) => animal.name === "Millie");
console.log(result[0]);
