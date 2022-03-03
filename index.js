/* functions
    for the most part functions are very similar in python and JS
    concept is same, define process with certain # of params/input vars and have process be repeatable
*/

// function def - similar to PY
function addNums(){
    let num1 = 3.14;
    let num2 = 7;
    return num1 + num2
}

// fucntion call - same as PY
console.log(addNums());
//console.log() to see results

// same func but with input

function addNums2(num1 , num2){
    return num1+num2;
}
console.log(addNums2(3.14, 7));

// es6 arrow func
// arrow func is written kind of like a var assignment but with steps
let addNumsArrow = (num1, num2) => {
    return num1 + num2
}

console.log(addNumsArrow(100, 200))

//arrow func w 1 input
// no need for () around input if only 1 input
let squareNum = num => {
    return num**2
}

console.log(squareNum(7));

// arrow func without input will just be ()

let helloWorld = () => {
    console.log('Hello World');
} 

// JS closure
//JS version of an anonymous and self-invoking func
// aka  a function that is called as soon as it is defined 
// we have a func def using the => syntax, where the func name ordinarily 
    //will be in a func call

(num => {return num**2})(70); // the right of a func def, and call right after
//it has no name (anonymous)

(name => {console.log(name);})('Devon'); //function calls itself

/* JS conditionals and control flow
*/

let age = 35;
if (age < 20){
    console.log('Child');
}
else if (age < 65) {
    console.log('adult');
} else {
    console.log('elderly')
}

//some operators are slightly diff n JS than they are in py
// they work the same but might be written diff
// and -> &&
// or ||

// biggest diff -> equality of val and type

// py -> print('4' == 4) this is false in py
// in JS this is true^, but not true in js when ('4' === 4)

// JS loves having many ways to do same things and ES6 loves shorthand
// Ternary operator 
//short hand for conditionals
// this replaces the if (condition)(operation) else if (condition)(operation)
// condition ? operation : condition ? operation

let age = 35;
if (age < 20){
    console.log('Child');
}
else if (age < 65) {
    console.log('adult');
} else {
    console.log('elderly')
}

let age2 = 3;

age < 20 ? console.log('Child') : age < 65 ? console.log('adult') : console.log('elderly')

let howOLD = age => {
    return age < 18 ? 'Child' : age >= 18 && age <= 65 ? 'Adult' : 'Senior'
}
console.log(howOLD(12));

//looping

//Just like most other things in JS we have a lot of diff ways to loop
//some similar to PY, some new
// spend time getting comfy with JS normal 4 loop 1st
// js normal 4 loop is most similar to py index loop 

//for i in range(len(iterable)):
// for(let i = 0; i < iterable.length; i++){}
// for(<counter variable>; <condition>; <step>){}

// example: loop through nums 0-20
// i++ is an operation we can do in JS that is the same as pythons i = i+1 or i += 1
for(let i=0; i<=20; i+=2){
    console.log(i);
}

// JS while loop same as py
let counter = 0;
while (counter < 10){
    console.log(counter);
    counter++;
}

// what about a diff while loop
// JS do-while loop
// do while loop will always run at least once, do while loops 
// condition is checked at end of loop instead of start

let n = 0;
do {
    console.log(n);
    n++;
} while (n < 10);

// looping with arrays

//declaring and defining an arr
let animals = ['Sea Urchin', 'Bengal Tiger', 'Elephant', 'Sea Whale'];

//indexing an arr is same as py
console.log(animals[1]); // Bengal Tiger

// NORMAL FOR LOOP
//I represents the array indexes
// array.length is the same as len(array) in py
for (let i=0; i<animals.length; i++);{
    console.log(`Array value at index ${i}: ${animals[i]}`);
}
// JS f string


// method 2
// a will represent index numbers
for( indecesA in animals){
    console.log(indecesA);
}

// another way to loop an array
// similar to a for in loop in python or the python map func
// through the array method array.forEach()
// array.forEach() take a func as a param and runs that func on each value in the array
console.log(animals);

animals.forEach( element => console.log(`This is a ${element}`));

// lets look at some other array methods

// tostring and join
//conversion from an array to string
//array.toString() takes in no params
let animalsStr = animals.toString()
console.log(typeof animals.toString(), animals.toString());

// array.join()
// this is just like pythons join but with the params flippes
// python : ('delimeter').join(array)
// JS : array.join('delimeter')

let animalsStr2 = animals.join(' | ');
//toString takes in no params(always ,) , for join we choose the delimeter


//Array.map(<callback function>)
//map is similar to forEach and pytohns map
// w.e the callback func returns is the value added to the new arr
let sea_animals = animals.map( element => {
    if (element.includes('Sea')) {
        return element
    } else {
        return false;
    }
})
console.log(sea_animals);

//filter -> removes any elements that the callback function removes false for

let only_sea_animals = animals.filter( element => {
    if (element.includes('Sea')) {
        return element 
    } else {
        return false
    }
});
console.log(only_sea_animals);

// reduce, can use for loop instead, not commonly used
let nums = [4.99 , 5.99, 7.99, 2232, 100003];
//reduce is used with numerical arrays to boil them down to a single value
// reduce needs a callback func w/ 2 params
    // an accumulator (what will become our ans), and a param to represent each element
let one_num = nums.reduce( (accumulator, current_num) => {return accumulator*current_num} );
console.log(one_num);
// 4.99 * 5.99 * 7.99 etc and this reduces to one num

// u cant always trust cpu decimals -> floats/decimals are not exact
// sometimes u may see 14.00001 -> this is just 14, cpu just confused about 14
// u can always fix that with Math.round() or Number.toFixed()
console.log(Math.round(14.00000001));
console.log(Math.round(3.19399393));

console.log(3.149494949.toFixed(2)); // toFixed(# of decimals)

// Array.slice(), Array.splice() 
// these can both be considered similar to py array slicing, but theyare slightly diff

// Array.slice() is just like list[::] out of place, makes new list
    // however Array.slice() does not give an option for a step, step is always one
let animalsSlice = animals.slice(1, 3); //give me a copy of index 1 up to but not including index 3 from the animals list
console.log(animalsSlice)

// Array.splice() is diff, slice is an in- place (changes og list)
// Array.splice(<starting index>, <number of indexes to remove>, <optional replacement values (can be fewer or more than #'s removed))

//before splice
console.log(animals);
//after splice
console.log(animals.splice(1, 2, 'Tiger', 'Elephant', 'Hippos'));

//splice function removed 2^, and returned as array

//after splice now has new animals in the place of the 2 indexes eliminated

// normal Array operations
// remove a value at end of list: Array.pop(index)
console.log(animals);
animals.pop(2); // array.pop() in js is diff than py -> it can ONLY remove the last value from array
console.log(animals);

//you can use slice to remove value at a specific index
animals.splice(2, 1) // rmeoves just item at index #2

// u can use a loop and delete, or loop and splice
for (let i=o; i<animals.length; i++){
    if (animals[i] == 'Hagfish') {
        //delete animals[i]; // not recommended, leaves an empty slot
        animals.splice(i, 1);
    }
}
console.log(animals);

// removing a value from an array by value requires a loop
// in py the built in remove method does what the for loop above does.
// in js we have to write out the loop or define the remove method on our own

let remove = (element, animals) => {
    for (let i=o; i<animals.length; i++){
        if (animals[i] == 'Hagfish') {
            //delete animals[i]; // not recommended, leaves an empty slot
            return animals.splice(i, 1);
        }
    }
}
//no return in line 274 will delete all because no return to stop
//return will only remove the 1st instance

remove('Thylacene', animals);
console.log(animals);

// JS does have a version of append()
// Called Array.push()
//pushes to the end of the array
animals.push('Arctic Fox');
console.log(animals);





































