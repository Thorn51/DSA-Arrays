console.log("DSA - Arrays");

import Array from "./array.js";

function implementArray() {
  //Set capacity of Array
  Array.SIZE_RATIO = 3;

  //Create an instance of the Array class
  console.log("1. Implement an array class from scratch");
  const implementArray = new Array();
  console.log(implementArray);
}

function explorePush() {
  let pushArray = new Array();
  //Set capacity of Array
  Array.SIZE_RATIO = 3;
  //Add an item to the array using the push method
  console.log("2. Explore the push() method");
  pushArray.push(3);
  console.log(
    "What is the length, capacity, and memory address of your array after push(3)",
    pushArray
  );
  pushArray.push(5);
  pushArray.push(15);
  pushArray.push(19);
  pushArray.push(45);
  pushArray.push(10);

  console.log(
    "What is the length, capacity, and memory address of your array after pushing 5 more items into the array",
    pushArray
  );
}

function explorePop() {
  let popArray = new Array();

  popArray.push(3);
  popArray.push(5);
  popArray.push(15);
  popArray.push(19);
  popArray.push(45);
  popArray.push(10);

  console.log("3. Explore the pop() method");
  //Use the pop method to remove an item
  popArray.pop(); //I would expect this to remove value 10, change the length to 4, capacity remains the same, pointer -> 3
  popArray.pop(); //I would expect this to remove value 45, change the length to 3, capacity remains the same, pointer -> 3
  popArray.pop(); //I would expect this to remove value 19, change the length to 2, capacity remains the same, pointer -> 3
  console.log(
    "What is the length, capacity, and address of your array after using pop() three times",
    popArray
  );
}

function understandArray() {
  let understandArray = new Array();

  console.log("4. Understanding more about how arrays work");
  understandArray.push(1);

  //Print first items
  console.log("Print first item ->", understandArray.get(0));

  //Remove remaining values to clear array.
  understandArray.pop();

  //Add new item
  understandArray.push("tauhida");
  console.log("Print tauhida->", understandArray.get(0));
}

function stringToUrl(string) {
  console.log("5. URLify a string ->", string);

  // Empty array to store parts of each item of string
  let properUrl = [];

  // The for loop will go through each character of ths string O(n)
  for (let i = 0; i < string.length; i++) {
    // If the loop encounters an empty space replace with %20
    if (string[i] === " ") {
      properUrl.push("%20");

      // Otherwise push the character to the proper url array
    } else {
      properUrl.push(string[i]);
    }
  }
  console.log(properUrl.join(""));
  return properUrl.join("");
}

function filterArray(array) {
  console.log("6. Filtering an array");

  let arrayLessThanFive = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
    } else {
      arrayLessThanFive.push(array[i]);
    }
  }
  console.log("Input ->", array);
  console.log("Output ->", arrayLessThanFive);
  return arrayLessThanFive;
}

function sumArray(array) {
  console.log("7. Max sum in the array");

  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }

  console.log("Input ->", array);
  console.log("Output ->", total);
}

// implementArray();
// explorePush();
// explorePop();
// understandArray();
// stringToUrl("tauhida parveen");
// stringToUrl("www.thinkful.com /tauh ida parv een/li>");
// filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// sumArray([4, 6, -3, 5, -2, 1]);
