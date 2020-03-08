const Memory = require("./memory");

const memory = new Memory();

class Array {
  //initialize array
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  //Add value to array by pushing
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  //Allocate more memory for array
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  //Retrieve a value by index
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    return memory.get(this.ptr + index);
  }

  //Remove a value from the end of the array
  pop() {
    if (this.length === 0) {
      throw new Error("Index error");
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  //Insert value into array at a given index
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  //Remove values from the array at a given index
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index error");
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

function main() {
  //Set capacity of Array
  Array.SIZE_RATIO = 3;

  //Create an instance of the Array class
  const practiceArray = new Array();

  //Add an item to the array using the push method
  practiceArray.push(3);
  practiceArray.push(15);
  practiceArray.push(19);
  practiceArray.push(45);
  practiceArray.push(10);

  //Use the pop method to remove an item
  practiceArray.pop(); //I would expect this to remove value 10, change the length to 4, capacity remains the same, pointer -> 3
  practiceArray.pop(); //I would expect this to remove value 45, change the length to 3, capacity remains the same, pointer -> 3
  practiceArray.pop(); //I would expect this to remove value 19, change the length to 2, capacity remains the same, pointer -> 3

  console.log(
    "Array Class ->",
    practiceArray,
    "First item in array ->",
    practiceArray.get(0)
  );

  //Remove remaining values to clear array.
  practiceArray.pop();
  practiceArray.pop();

  //Add new item
  practiceArray.push("tauhida");

  //Print first items
  console.log("First item ->", practiceArray.get(0));
}

main();
