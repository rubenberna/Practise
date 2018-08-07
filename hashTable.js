// Very fast runtime

function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function (key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  } let bucket = total % this.numBuckets;
  return bucket;
}

// hashes the key into a number and tells us what
// bucket to put our node in (any number divided by 30
// will give a remainder between 0 - 29)

HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
    // checks if the first node has the same key as the one we're inserting
  }
  else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return; // it stops the program from running further, in case we are updating
        // an existing key -- we don't want to append a new node
      }
      currentNode = currentNode.next;
      //while this is not the last node in the chain, convert the currentNode
      // into the next node in the chain. It will stop running when the next
      // node is equal to null
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  let index = this.hash(key);
  if (!this.buckets[index]) return null
  else {
    let currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
      // currentNode becomes null once we go through all nodes without a match,
      // and the next is null
    }
    return null;
  }
}

HashTable.prototype.retrieveAll = function() {
  let all = [];
  for (let i = 0; i < this.numBuckets; i++) {
    let currentNode = this.buckets[i];
    while (currentNode) {
      all.push(currentNode);
      currentNode = currentNode.next;
    }
  }
    return all;
};

let myHT = new HashTable(30);
// console.log(myHT.hash('Ruben'));
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@gmail.com');
myHT.insert('Dean', 'bomb@gmail.com');
myHT.insert('Megan', 'smith@gmail.com');
myHT.insert('Ruben', 'ruben@gmail.com');
myHT.insert('Joe', 'Joey@gmail.com');
myHT.insert('Fien', 'fien@gmail.com');
myHT.insert('Sam', 'sam@gmail.com');

// console.log(myHT.buckets);
// console.log(myHT.get('Dean'));
console.log(myHT.retrieveAll());
