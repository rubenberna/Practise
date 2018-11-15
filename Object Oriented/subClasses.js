// Inheritance in ES6 classes -- known as sub-classes. It extends the parent class

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

// Sub-class of Person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // this calls the parent class constructor

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());
