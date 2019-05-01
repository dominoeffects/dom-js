// array of fruits
// add 5 fruits in the array

var fruits = ['Peach', 'Lyche', 'Kiwi', 'Pineapple', 'Banana', 'Orange']
console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// for loop
// for (var i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// do while
var index = 0;
// do {
//     console.log(fruits[index]);
//     index++;
// } while ( index < fruits.length);

//while
// while(index < fruits.length){
//     console.log(fruits[index]);
//     // index++;
//     index += 1; 
// }

// && means and
// || means or
// while (hour > 18 && hour < 21) {
// }

// for in 
fruits.foo =  'test'; //converts fruits to an object
for (var i in fruits) {  // foo is a property of fruits
    console.log(i);
}

// for of
// is used more than for in statements
for (var i of fruits) {
    console.log(i);
}