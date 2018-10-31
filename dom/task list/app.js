// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //DOM load event gets tasks in local storage
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove taks event
  taskList.addEventListener('click', removeTask)
  // Clear taks
  clearBtn.addEventListener('click', clearTasks)
  // Fliter tasks
  filter.addEventListener('keyup', filterTask)
  
}

// Get tasks from local storage
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));

  }

  tasks.forEach(function(task){
      // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  })
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  //Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}


// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    //local storage only takes strings, so parse becomes a JS object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
  // parent of the icon clicked is the a tag
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      // remove the node
    e.target.parentElement.parentElement.remove();

    // remove from local storage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  // we first check if there are tasks in local storage
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    //local storage only takes strings, so parse becomes a JS object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    // we remove the LS item that contains the same content as the taskItem and use the splice with index to remove it from the object
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks(e) {
  // taskList.innerHTML = '';

  // Faster
  // while the there's still a first child in the tasklist, remove it
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }

  clearTasksFromLocalStorage()
}

function clearTasksFromLocalStorage(){
  localStorage.clear('tasks')
}

function filterTask(e) {
  // to lowercase to be able to match it
  const text = e.target.value.toLowerCase();

  // querySelectorAll brings a node list that we can loop through
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    // if item contains text 
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })


}