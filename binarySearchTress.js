// RECURSION example
function factorial (num) {
  if (num <= 2) {
    return num
  }
  else {
    return num * factorial(num -1)
  }
}

// console.log(factorial(4));

// BINARY SEARCH TREE //

//input method

function BST (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value >= this.value) {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
  }
};

/*
1. if there's no left node, put it there;
2. if there is, insert a new node under that left side node
and the same for the right. The beauty of recursion
*/

// contains method

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false
    else return this.right.contains(value);
  }
}

// depth first traversal

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);

};

function log(value) {
  console.log(value);
}

/*
With the recursion, we make sure that we reach each node starting from left,
the parent node, to the right node.
The order is an optional parameter, defining on which order we want to hit
the node:
In-order: from left to parent to right;
Pre-order (to print our tree, for example): from parent, to left, to right;
Post-order: from left sub-children, to right sub-children, to parent;
*/


// breadthFirstTraversal
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  let queue = [this];
  while (queue.length) {
    let treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
};

function logNode (node) {
  console.log(node.value);
};

/*
breadthFirstTraversal: we start by logging the root node in an array. While
the array isn't empty, we shift it out, save it in a variable and run the iteratorFunc.
We then check if there are left and right nodes and push them into the array.
Since the array is not empty, it keeps on loging the nodes and pushing the children,
until there are no more nodes
*/

let bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
}

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
}


// console.log(bst.left.right.left);
// console.log(bst.contains(10));
// console.log(bst.depthFirstTraversal(log));
// console.log(bst.depthFirstTraversal(log, 'in-order'));
// console.log(bst.depthFirstTraversal(log, 'pre-order'));
// console.log(bst.depthFirstTraversal(log, 'post-order'));
// console.log(bst.breadthFirstTraversal(logNode));
console.log(bst.getMinVal());
console.log(bst.getMaxVal());
