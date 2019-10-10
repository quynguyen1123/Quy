let num1 = 10;
const num2 = num1;

num1 = 20;

console.log(num1);
console.log(num2);


const person ={
    name:'Teo',
    age: 3
};
//coppy

const person2={
...person
};

// tham chiếu
//const person2 = person;
person.name = 'ti';
person.age = 30;

console.log(person);
console.log(person2);