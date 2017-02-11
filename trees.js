class TreeNode {
  constructor(value) {
    this._value = value;
    this._parent = null;
  }

  constructor(value, parent) {
    this._value = value;
    this._parent = parent;
  }

  visit() {
    return this._value;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  get parent() {
    return this._parent;
  }

  get value() {
    return this._value;
  }

  set left(treeNode) {
    this._left = treeNode;
  }
  
  set right(treeNode) {
    this._right = treeNode;
  }

  set parent(treeNode) {
    this._parent = treeNode;
  }

  set value(value) {
    this._value = value;
  }
}

// Binary Tree
class BinaryTree {
  constructor(rootNode) {
    this._root = rootNode
  }

  preOrder(treeNode) {
    if(treeNode) {
      console.log(treeNode.visit());
      preOrder(treeNode.left);
      preOrder(treeNode.right);
    }
  }

  postOrder(treeNode) {
    if(treeNode) {
      postOrder(treeNode.left);
      postOrder(treeNode.right);
      console.log(treeNode.visit());
    }
  }

  inOrder(treeNode) {
    if(treeNode) {
      inOrder(treeNode.left);
      console.log(treeNode.visit());
      inOrder(treeNode.right);
    }
  }

  get root() {
    return this._root;
  }
}
