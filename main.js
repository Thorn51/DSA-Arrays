import memory from "./memory";

class Array {
  //initialize array
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }

  //Add value to array by pushing
  push(value) {
    this._resize(this.length + 1);
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
}
