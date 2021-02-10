// This is a refresher of next gen JS features

const myName ='Nico';
console.log(myName);

//myName = 'Juan'; // here will be an error because const is not variable
console.log(myName);

let myName2 = 'Juan'; //now it will run because is a let and let is variable


// arrow functions

function printMyName(name){
  console.log(name)
};

printMyName('Max');


const printMyName2 = (name) => {
  console.log(name);
};

const multyply = (number1, number2) => {
  return number1 * number2;
};

const multy = (number) => number * 2;



//classes as ES6

class Human {
  constructor(){
    this.gender = 'male';
  }

  printGender(){
    console.log(this.gender);
  }
}


class Person extends Human {
  constructor(){
    super(); //this calls the constructor of the parent class, is a must
    this.name = 'Max';
    this.gender = 'Female';
  }

  printMyName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printGender();
person.printMyName();


//classes as ES7

class Human2 {
    gender = 'male';
  
  printGender = () => {
    console.log(this.gender);
  }
}


class Person2 extends Human2 {
  
   name = 'Max';
   gender = 'Female';
  

  printMyName = () => {
    console.log(this.name);
  }
}

const person2 = new Person2();
person2.printGender();
person2.printMyName();


// spread and rest operator

const numbers = [1, 2, 3];
const newNUmbers = [...numbers, 4];

console.log(newNUmbers);

const person3 = {
  name: 'Max'
};


const newPerson3 = {
  ...person3,
  age:28
};

console.log(newPerson3);


// filter will make the functions in every element of args, in this case check if the element is 1
const filter = (...args) => {
  return args.filter(el => el === 1);
};

console.log(filter(1,2,3));

// Destructuring
// Extract array elements or object properties and store them in variables

const numbers2 = [1, 2, 3];
[num1, ,num3] = numbers;
console.log(num1, num3);

/*
{namep} = {name:'Max', age:28}
console.log(namep);
*/


// the objects are reference in memory and primitives types are copies of the values


const numberst = [1,2,3];

const doubleNum = numberst.map((num) => {
  return num * 2;
});

console.log(numberst);
console.log(doubleNum);
