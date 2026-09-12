//01. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }
    return true
};
//02. Word Pattern
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if (pattern.length !== words.length) return false
    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) !== words.indexOf(words[i])) {
            return false;
        }
    }
    return true;
};
//03. Find the Difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sortedS = s.split('').sort();
    let sortedT = t.split('').sort();
    for (let i = 0; i < sortedT.length; i++) {
        if (sortedS[i] !== sortedT[i]) {
            return sortedT[i];
        }
    }
    return sortedT[sortedT.length - 1];
};
//04. Reverse Linked List
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    while (curr) {
        let tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
    }
    return prev
};
//05. Middle of the Linked List
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let tmp1 = head
    let tmp2 = head
    while (tmp2 && tmp2.next) {
        tmp1 = tmp1.next;
        tmp2 = tmp2.next.next;
    }
    return tmp1;
};
//06. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * rightProduct;
        rightProduct *= nums[i];
    }
    return result;
};
//07. Remove Nth Node From End of List
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let curr = head;
    while (curr) {
        len++;
        curr = curr.next;
    }
    if (len == n) {
        return head.next;
    }
    curr = head;
    for (let i = 0; i < len - n - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return head;
};