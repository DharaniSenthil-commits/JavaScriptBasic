//Comment , purely for documenting code
//console.log("Hello World");

//variable declare by using let
let name = 'DQ';
console.log(name);

/* cannot be a reserved key
  should be meaningful
   cannot start with a number
   cannot contain space or - 
   case sensitive 
*/
// let firstName , lastName ;
// let firstName = 'Dharani' ,lastName;
// let firstName = 'Dharani';
// let lastName='Senthil';

// let interestRate =0.3 ;
// interestRate=1;
// console.log(interestRate);

//if you dont wanna reassign then
const interestRate=0.3;
//interestRate=1; --> will throw error
console.log(interestRate)

// Primitive or Value Type
let myName="Dharani" // String Literal
let age = 23 // Number Literal 
let isApproved = true // Boolean Literal
let fName ; // or 
let fsName=undefined // value not defined 
let selectedColor = null // value can be reassigned in future 

//Reference --> object,array,function
//object
let person={
    name :'DQ',
    age : 23
    };

    //dot notation
    person.name='Dharani';
    console.log(person.name);
    //Bracket notation
    person['name']='Queen';
    console.log(person['name']);
    //Dynamic
    let selection='name';
    person[selection]='ESD';
    console.log(person[selection]);




