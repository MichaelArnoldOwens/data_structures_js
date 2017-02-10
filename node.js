class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  constructor(value, next) {
    this._value = value;
    this._next = next;
  }

  set next(node) {
    this._next = node;
  }

  set value(value) {
    this._value = value;
  }

  get next() {
    return this._next;
  }

  get value() {
    return this._value;
  }
}

class LinkedList {
  constructor(node, next) {
    this._next = next;
    this._node = node;
  }
}
