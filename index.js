// Ticket 1
const titleElement = document.getElementById("title");
console.log(titleElement);

const contentElements = document.getElementsByClassName("content");
console.log(contentElements);

const liElements = document.getElementsByTagName("li");
console.log(liElements);

const firstHighlight = document.querySelector(".highlight");
console.log(firstHighlight);

const allHighlights = document.querySelectorAll(".highlight");
console.log(allHighlights);

// Ticket 2
//a
let firstElement = document.querySelector("#itemList").firstElementChild;
console.log(firstElement);

let parentElement = firstElement.parentNode;
console.log(parentElement);

//b
let ulElement = document.getElementById("itemList");
console.log(ulElement.childNodes)

//c

console.log(ulElement.children);

//d
console.log(ulElement.firstChild, ulElement.lastElementChild)

