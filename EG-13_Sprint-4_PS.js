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