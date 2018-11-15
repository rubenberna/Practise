// Person constructor

function Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    // common way to calculate age
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    // math abs just makes it an absolute number
  }
}

const ruben = new Person('Carlos', 30, '9-10-1983');

console.log(ruben.calculateAge());

//  String object

const name1 = 'Jeff'; // typeof string
const name2 = new String('Jeff'); // typeof object

console.log(name2 === 'Jeff' ? 'Yes' : 'No'); // It's not a string


 