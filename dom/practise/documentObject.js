let val;

val = document; // entire html file
val = document.all; // it gives an array with each tag of the html
val = document.all[2]; // the second element of the array (eg. meta tag)
val = document.all.length; // 43 elements in the DOM
val = document.head; // gives us just the head
val = document.body; // just the body
val = document.doctype; // <!DOCTYPE html>
val = document.domain; // loop back address (127.0.0.1)
val = document.URL; // the whole thing, including the protocol, the port and the page
val = document.characterSet; // UTF-8
val = document.contentType; // text/html

val = document.forms; // all the forms on the page -- instead of using a selector (not recommended)
val = document.forms[0]; // first form
val = document.forms[0].id; // the css id
val = document.forms[0].method; // get or post
val = document.forms[0].action; // action of the form

val = document.links; // all 'a' tags
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className; // string with all the classes
val = document.links[0].classList[0]; // creates a collection (hash) with all classes

val = document.images;

val = document.scripts; // all scripts
val = document.scripts[2].getAttribute('src'); // gets attributes -- "app.js"

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
