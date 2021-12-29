let selection = ['A', 'A', 'A', 'A', 'B', 'C', 'A'];
let myMap = new Map();
let mapSelection = new Map();

myMap.set('A', 4);
myMap.set('B', 1);
myMap.set('C', 1);
myMap.set('D', 0);

// myMap.forEach(items => {
//     console.log(items);
// });
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.get('E'));

for (i = 0; i < selection.length; i++) {
    mapSelection.set(selection[i], (mapSelection.get(selection[i]) || 0) + 1);
}
for (const [key, value] of mapSelection) {
    console.log(key + ":" + value);
}
let newArray  = mapSelection.values();
console.log(typeof(newArray))
console.log(...newArray);
console.log(...mapSelection.entries())