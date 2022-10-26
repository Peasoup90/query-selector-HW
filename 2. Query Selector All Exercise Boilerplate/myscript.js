////////////////  Query Selector All ////////////////////

/* 
1. Given the boiler plate use query selector console log the following items on the page:​

    - The second p tag​
    - All of the list items​ with the class list
    - The text content of the third instance of the class “list”​
    - The length of the list.

*/

// Write your JavaScript below


let P2 = document.querySelectorAll("p" [1]);

console.log(P2)

let CLASS = document.querySelectorAll("ul .list");

console.log(CLASS);

let LIST = document.querySelectorAll("li" [2]);

console.log(LIST);

const LENGTH = document.querySelectorAll("ul li").length;

console.log(LENGTH);