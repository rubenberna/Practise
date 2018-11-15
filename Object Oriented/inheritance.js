// Person conscructor

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer constructor

function Customer (firstName, lastName, phone, membership) {

  // We're calling a function from another constructor
  Person.call(this, firstName, lastName)

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype)

// Make Customer.prototype return Customer() and not Person
Customer.prototype.constructore = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-555', 'Standard');

console.log(customer1);

// Overwrite person greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}, welcome to our company!`
}

console.log(customer1.greeting());
