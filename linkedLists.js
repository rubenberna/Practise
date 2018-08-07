function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  let newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  let val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  } return null;
};

LinkedList.prototype.indexOf = function (value) {
  let indexes = [];
  let currentIndex = 0;
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  } return indexes;
};

var op = new LinkedList();

op.addToHead(90);
op.addToHead(2);
op.addToTail(5);
op.addToHead(2);
op.addToTail(5);
op.addToTail(7);
op.addToTail(7);
op.addToTail(7);
op.addToTail(7);
op.addToTail(9);

console.log(op.tail.value);
console.log(op.removeTail());
console.log(op.search(2));
console.log(op.search(2));
console.log(op.indexOf(7));
