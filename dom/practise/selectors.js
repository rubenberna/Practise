// document.getElementById()
document.getElementById('task-title');

// Get things from the element
document.getElementById('task-title').id;
document.getElementById('task-title').className;

// Change styling
document.getElementById('task-title').style.background = '#999';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none'; // gets read of the node

// Change content
document.getElementById('task-title').textContent = 'Task Ruben';
document.getElementById('task-title').innerText = 'My tasks'; // same as above
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List </span>'; // insert html

// document.querySelector() -- more powerful

document.querySelector('#task-title');
document.querySelector('.card-title');
document.querySelector('h5'); // if there's more than one h5, it will get the first one

document.querySelector('li').style.color = 'red'; // only the first one
document.querySelector('ul li').style.color = 'red'; // we can get nested elements
document.querySelector('li:last-child').style.color = 'red'; //sudo classes
document.querySelector('li:nth-child(3)').style.color = 'yellow'; //select by its index
document.querySelector('li:nth-child(4)').textContent = 'Hello World'; //select by its index
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; //nth child by odd or even elements index, though it only gets the first one on the list

// MULTIPLE SELECTORS

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');

//console.log(items);
//console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // more specific than the first one

//console.log(listItems);

// document.getElementsByTagName

let lis = document.getElementsByTagName('li');

// convert HTML Collection into array

lis = Array.from(lis);
lis.reverse();

lis.forEach(function(li, index) {
    //console.log(li.className);
    li.textContent = `${index}: Hi`
})


//console.log(lis);

// document.querySelectorAll (it brings a node list. allows us to use array methods without having to convert it)

const itemsAll = document.querySelectorAll('ul.collection li.collection-item');

itemsAll.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(itemsAll);
