import { allocate, free, copy, get, set } from "./memory";

class Array {
  //initialize array
  constructor() {
    this.length = 0;
    this.ptr = allocate(this.length);
  }
}
