// The names of our animals.
let names = ["Sonic", "Howard", "Max", "Minnie", "Olaf"];
console.log(names);

names.push("Steven"); // Adds Steven to our list.
console.log(names);

let last = names.pop(); // Actually Steven isn't invited.
console.log(last);

let first = names.shift(); // Neither is Sonic.
console.log(first);

// Steven is in fact invited, he's at the beginning of the list now.
names.unshift("Steven");
console.log(names);

// Prints the first two names.
console.log(names.slice(0, 2));
