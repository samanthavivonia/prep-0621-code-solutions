var person = {
  firstName: 'Sam',
  lastName: 'Vivonia',
  hobby: 'writing'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's full name is " + fullName);

person.job = 'UX/UI Designer';

console.log("The person's current job is " + person.job);

person.previousJob = 'UX/UI Design Assistant Instructor';

console.log("The person's previous job was " + person.previousJob);

console.log(person);
