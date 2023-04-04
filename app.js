// 1-Fibonacci Series:

// function fibonacci(num) {
//   let arr = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// }

// console.log(fibonacci(10));

// 2-The sum of Array Elements:

// function arraySum(arr) {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr[0] + arraySum(arr.slice(1));
//   }
// }

// console.log(arraySum([1, 2, 3, 4, 5]));
// console.log(arraySum([10, -5, 7, 2]));
// console.log(arraySum([]));

// function sumArray(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else {
//     return arr[n - 1] + sumArray(arr, n - 1);
//   }
// }

// // example usage
// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// console.log(sumArray(arr, n)); // prints 15

// 3 Reverse a String:

// function reverseString(str) {
//   if (str.length <= 1) {
//     return str;
//   } else {
//     return reverseString(str.slice(1)) + str[0];
//   }
// }
// console.log(reverseString("hezmaH"));
//Hamzeh
//ezmaH h
// zmaH e h
// maH z e h
//ah m z e h
// H a m z e h

//Stack and Queue:

// 1.Implement a function that returns the minimum element in a stack in constant time complexity.
// class minValue {
//   constructor() {
//     this.minStack = [];
//   }

//   getMin() {
//     return this.minStack[this.minStack.length - 1];
//   }

//   pushtoArray(value) {
//     if (value <= this.getMin() || this.minStack.length === 0) {
//       this.minStack.push(value);
//     }
//   }
// }
// const stack = new minValue();
// stack.pushtoArray(20);
// stack.pushtoArray(10);
// stack.pushtoArray(30);
// stack.pushtoArray(5);
// console.log(stack.minStack);
// console.log(stack.getMin());

// 2.Given a queue of integers, reverse the order of the elements in the queue.
// function reverseQueue(queue) {
//   const stack = [];
//   while (queue.length > 0) {
//     stack.push(queue.shift());
//   }
//   while (stack.length > 0) {
//     queue.push(stack.pop());
//   }
//   return queue;
// }

// const myQueue = [1, 2, 3, 4];

// const reversedQueue = reverseQueue(myQueue);

// console.log("Reversed queue:", reversedQueue);

// 3.Implement a Queue using 2 stacks s1 and s2.

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}
const q = new Queue();

q.enqueue("apple");
q.enqueue("banana");
q.enqueue("cherry");
console.log(q.dequeue()); // "apple"
console.log(q.dequeue()); // "banana"

q.enqueue("orange");

console.log(q.dequeue()); // "cherry"
console.log(q.dequeue()); // "orange"
console.log(q.dequeue()); // null

// 4.Create a function that takes a LinkedList and deletes the middle node in it and returns it

// function deleteMiddleNode(linkedList) {
//   let slow = linkedList.head;
//   let fast = linkedList.head;

//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   let previousNode = null;
//   let currentNode = linkedList.head;

//   while (currentNode !== slow) {
//     previousNode = currentNode;
//     currentNode = currentNode.next;
//   }

//   if (previousNode) {
//     previousNode.next = currentNode.next;
//   } else {
//     linkedList.head = currentNode.next;
//   }

//   return linkedList;
// }

// 5.Create a function that takes a LinkedList and reverses it

// function reverseLinkedList(linkedList) {
//   let previousNode = null;
//   let currentNode = linkedList.head;

//   while (currentNode) {
//     let nextNode = currentNode.next;

//     currentNode.next = previousNode;

//     previousNode = currentNode;
//     currentNode = nextNode;
//   }

//   linkedList.head = previousNode;

//   return linkedList;
// }
