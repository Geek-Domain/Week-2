// Question 1: Validate Brackets
function isValidBrackets(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValidBrackets("()"));       // true
console.log(isValidBrackets("([)]"));     // false
console.log(isValidBrackets("([{}])"));   // true


// Question 2: Two Sum
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Test cases
console.log(twoSum([2,7,11,15], 9));  // [0,1]
console.log(twoSum([3,2,4], 6));      // [1,2]

// Question 4: Recommend Restaurants
function recommendRestaurants(restaurants, targetRating) {
  const sorted = restaurants.sort((a, b) => b.rating - a.rating);

  if (targetRating !== undefined) {
    return sorted.filter(r => r.rating >= targetRating);
  }
  return sorted;
}

// Test data
const restaurants = [
  { name: "Pizza Palace", rating: 4.8 },
  { name: "Curry Corner", rating: 4.2 },
  { name: "Amazing Asian", rating: 4.5 },
  { name: "Healthy Eats", rating: 3.9 },
];

console.log(recommendRestaurants(restaurants, 4.4));
/*
[
  { name: "Pizza Palace", rating: 4.8 },
  { name: "Amazing Asian", rating: 4.5 }
]
*/

// Question 6: Reverse Linked List
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

// Helpers to create and display lists
function arrayToList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Example usage
const head = arrayToList([1,2,3,4,5]);
const reversed = reverseLinkedList(head);
console.log(listToArray(reversed));  // [5,4,3,2,1]

