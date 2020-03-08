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

  //Allocate more memory for array
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
  }
}
