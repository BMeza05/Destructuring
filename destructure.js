const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Since cars is const, it is immutable. you cannot change it. Either the error 
// will say the new variables are not defined or that cars was already declared.

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// The colon was used, so one would assume it would work, but a value was not
// given, so its just empty. 

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// the password was not put within the person variable, so when you try to set
// hashedpassword and password equal to person, it does not work. I think the 
// error will come out as undefined 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// You cannot just set one const equal to another, becauser you cannot re-assign
// those values later. Also, I think too many commas are being used if you are
// trying to access a specific index wihin the array. for the third, you are using
// too many and the console will tell you that you skipped too many

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// you are already using key for a name, so i think that will bring up an issue
//  you are already using secondkey also, so that may do the same as the last
// and since they are already within a {}, you cant really access another {}--
// that doesnt exist yet.
// secondkey[0] will bring out 1
// the comma is indicated to skip an index, but what willthiswork do? --
//it didnt use a colon, instead it used an equals sign, either it will throw some
// syntax error or it will give the next index, [1], which is 5