// DOM stands for Document Object Model
// A tree of nodes/elements created by the browser
// Object oriented representation
// JS can be used to read/write/manipulate to the DOM

// *** PART 1 *** //

// EXAMINE THE DOCUMENT OBJECT

// console.dir(document); // Shows an interactive list of all the properties of the specified object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "My item lister";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]); // Not recommended
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// SELECTORS

// 1. GET ELEMENT BY ID

// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye"; // Pays attention to the styling
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "3px solid #000";

// 2. GET ELEMENTS BY CLASS NAME

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello";
// items[1].style.fontWeight = "200";
// items[1].style.backgroundColor = "yellow";

// Error
// items.style.backgroundColor = "#f4f4f4";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// 3. GET ELEMENTS BY TAG NAME

// var li = document.getElementsByTagName("li");
// console.log(li);
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// 4. QUERY SELECTOR - Used to select only the first matching item
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var firstItem = document.querySelector(".list-group-item");
// firstItem.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.color = "orange";

// 5. QUERY SELECTOR ALL
// var titles = document.querySelectorAll(".title");
// console.log(titles);

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#ccc";
// }
// for (let i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "#f00";
// }

// *** PART 2 *** //

// TRAVERSING THE DOM
// parentNode
// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

// parentElement
// parentNode
// var itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); // Not suggested

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "#f4f4f4";

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello1";

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello1";

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);

// CREATE ELEMENTS
// createElement
// let newDiv = document.createElement("div");

// // Add class
// newDiv.className = "hello";

// // Add ID
// newDiv.id = "hello1";

// // Add attribute
// newDiv.setAttribute("title", "Hello world");

// // Create text node
// let newDivText = document.createTextNode("Hello new div!");

// // Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header .container h1");

// newDiv.style.fontSize = "32px";
// newDiv.style.fontWeight = "bold";

// // Insert div
// container.insertBefore(newDiv, h1);

// console.log(newDiv);
