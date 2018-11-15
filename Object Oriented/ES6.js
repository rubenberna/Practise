// With classes it's implied that we are writing in the prototype

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // static methods are not included in the class objects. Eg. we cannot call mary.addNumbers(); but if we call Person.addnumbers(3, 5) it works
  static addNumbers(x,y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-07-1985');
mary.getsMarried('Thompson')

console.log(mary);
