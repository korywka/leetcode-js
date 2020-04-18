Design and implement a data structure for Least Recently Used (LRU) cache.
It should support the following operations: `get` and `put`.

`get(key)` - Get the value (will always be positive) of the key if the key exists
in the cache, otherwise return -1.

`put(key, value)` - Set or insert the value if the key is not already present.
When the cache reached its capacity, it should invalidate the least recently used
item before inserting a new item.

The cache is initialized with a **positive** capacity.

**Follow up:**
Could you do both operations in O(1) time complexity?

```
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

```javascript
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.capacity = capacity;
    this.cache = {};
  }

  insert(node) {
    if (this.size < 2) { // first insert or single node list
      this.head = node;
      this.tail = node;
      return;
    }

    if (node.next !== null && node.prev !== null) { // was in middle, remove it from previous position
      node.next.prev = node.prev;
      node.prev.next = node.next;
    } else if (node.next === null && node.prev !== null) { // was in tail, move tail to prev
      node.prev.next = null;
      this.tail = node.prev;
    }

    if (this.head !== node) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.head.prev = null;
    }
  }

  removeTail() {
    delete this.cache[this.tail.key];
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size -= 1;
  }

  put(key, value) {
    const existingNode = this.cache[key];
    if (existingNode) {
      existingNode.value = value;
      this.insert(existingNode);
      this.cache[key] = this.head;
    } else {
      const newNode = new Node(key, value);
      this.size += 1;
      this.insert(newNode);
      this.cache[key] = this.head;
      if (this.size > this.capacity) {
        this.removeTail();
      }
    }
  }

  get(key) {
    const node = this.cache[key];
    if (node) {
      this.insert(node);
      return node.value;
    }
    return -1;
  }
}
```