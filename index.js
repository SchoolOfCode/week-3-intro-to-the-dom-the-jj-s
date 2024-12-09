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
console.log(ulElement.childNodes);

//c

console.log(ulElement.children);

//d
console.log(ulElement.firstChild, ulElement.lastElementChild);

//Ticket 3

//a
document.getElementById("title").style.color = "red";

//b

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically added paragraph.";
document.body.appendChild(newParagraph);

//c

const firstPElement = (document.querySelector(".content").textContent =
  "This paragraph has been updated");

//d

document.querySelectorAll(".content")[1].title = "Hover over me!";

//e
//Instructions:
// Select the <ul> element with the id of "itemList".
// Add a new class "styled-list" to it using JavaScript.
// Select the <li> element with the content "🍌 Banana".
// Remove the class "list-item" from it using JavaScript.
// Expected Outcome:
// The <ul> element should now have an additional class "styled-list".
// The <li> with the content "🍌 Banana" should no longer have the class "list-item".

const itemListE = document.querySelector("#itemList");
itemListE.classList.add("styled-list");
const listItemListE = itemListE.children[1];

listItemListE.classList.remove("list-item");

//f

// Instructions:
// Select the <li> element with the content "🍇 Date".
// Remove it from the DOM using JavaScript.
// Expected Outcome:
// The <li> with the content "🍇 Date" should no longer appear in the page.

itemListE.children[3].remove();
