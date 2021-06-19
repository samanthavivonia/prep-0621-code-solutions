// Function 1

function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

// Function 2

function convertHoursToMinutes(x) {
  return x * 60;
}

var hoursToMinutes = convertHoursToMinutes(2);
console.log('Hours to Minutes', hoursToMinutes);

// Function 3

function getGreeting(x) {
  return 'Hello ' + x + '!';
}

var greeting = getGreeting('World');
console.log(greeting);

// Function 4

function addAndMultiplyByFive(x, y) {
  return ((x + y) * 5);
}

var product = addAndMultiplyByFive(10, 5);
console.log('Add 10 and 5, then multiply by 5: ' + product);

// Function 5

function multiplyAndDivideBy5(x, y) {
  return ((x * y) / 5);
}

var quotient = multiplyAndDivideBy5(35, 10);
console.log('Multiply 35 and 10, then divide by 5: ' + quotient);

// Function 6

function subtractNumbers(x, y) {
  return x - y;
}

var difference = subtractNumbers(22, 7);
console.log('The difference of 22 and 7 is: ' + difference);

// Function 7

function getCircleCircumfrence(radius) {
  return radius * 2 * 3.1415926535;
}

var circumfrence = getCircleCircumfrence(5);
console.log("The circumfrence of a circle who's radius is equal to 5 is: " + circumfrence);

// Function 8

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('Full name is: ' + fullName);

// Function 9

function cube(number) {
  return (number * number);
}

var fiveTimesfive = cube(5);
console.log('5 cubed is: ' + fiveTimesfive);
