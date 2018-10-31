let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('ul.collection li.collection-item:first-child');

val = listItem;
val = list;

// Get child Nodes -- returns a node list

val = list.childNodes; // gets everything in the html file, including the line breaks

val = list.childNodes[0].nodeName; // #textContent
val = list.childNodes[1].nodeType; // 1

// 1 - element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element Nodes -- returns an HTML collection (just the elements)

val = list.children; // this one gets only the lis
val = list.children[1]; // gives us the second one
list.children[1].textContent = 'hrllo';

// Children of children

val = list.children[3].children; // [a.delete-item.secondary-content]
list.children[3].children[0].id = 'test-link';

// First child
val = list.firstChild; // gives us the first node #text
val = list.firstElementChild; // gives us the first actual elemenet (li). It avoids the text nodes, so we normally use things

// Last child

val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode; // ul
val = listItem.parentElement; // ul
val = listItem.parentElement.parentElement; // div with the card-action class

// Get next sibling
val = listItem.nextSibling; // it gives the next node -- #textContent
val = listItem.nextElementSibling.nextElementSibling; // the next next li

// Get previous sibling
val = listItem.previousSibling; // it gives the next node -- #textContent
val = listItem.previousElementSibling.previousElementSibling; // the next next li

console.log(val);
