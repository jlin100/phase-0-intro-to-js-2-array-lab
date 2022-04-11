// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
 }
 
 function destructivelyPrependCat(name) {
     cats.unshift(name);
 }
 
 function  destructivelyRemoveLastCat() {
     cats.pop();
 }
 
 function destructivelyRemoveFirstCat() {
     cats.shift();
 }

 function appendCat(name) {
    let copyOfCats = [...cats]
    copyOfCats.push(name);
    return copyOfCats;
}

function prependCat(name) {
    let copyOfCats = [...cats]
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat(name) {
    let copyOfCats = [...cats]
    copyOfCats.pop(name);
    return copyOfCats;
}

function removeFirstCat(name) {
    let copyOfCats = [...cats]
    copyOfCats.shift(name);
    return copyOfCats;
}