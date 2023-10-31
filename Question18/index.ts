let placesToVisit: string[] = ["Switzerland", "Canada", "London", "Ankara", "Abu Dhabi"];

console.log("Original Order:", placesToVisit);

console.log("Alphabetical Order:", [...placesToVisit].sort());

console.log("Original Order (still):", placesToVisit);

console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

console.log("Original Order (still):", placesToVisit);

placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();
console.log("Original Order (again):", placesToVisit);

placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", placesToVisit);
