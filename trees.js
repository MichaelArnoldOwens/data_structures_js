class TreeNode {
  constructor(value) {
    this._value = value;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this.right;
  }

  set left(treeNode) {
    this._left = treeNode;
  }
  
  set right(treeNode) {
    this._right = treeNode;
  }
}
// Binary Search Tree