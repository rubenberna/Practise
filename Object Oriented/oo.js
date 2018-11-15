
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   // common way to calculate age
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // math abs just makes it an absolute number
  // }
}

// move calculateAge method to the prototype
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// full name in prototype
Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName
}
const mary = new Person('Mary', 'Johnson', 'March 20 1978');


// Gets married

Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

console.log(mary.getsMarried('Bernardes'));
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName')); // true
