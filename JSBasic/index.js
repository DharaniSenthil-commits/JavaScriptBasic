//Comment , purely for documenting code
//console.log("Hello World");

//variable declare by using let
let name = 'DQ';
console.log(name);

let test ;
console.log(test);
test = 10;
console.log(test);
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

//array 
let selectedColors=['red','blue'];
console.log(selectedColors);
let colors=['red','blue'];
console.log(colors);
console.log(colors[0]);
console.log(colors);
colors[3]='green';
colors[4]=1;
console.log(colors)

//function
function greetnp(){
    console.log("Hello");
}
greetnp();
function greetonep(fName)
{
    console.log("Hello "+fName);
}
greetonep('Dharani');
function greettwonp(fName,lName)
{
    console.log("Hello "+fName+" "+lName);
}
greettwonp("Dharani");
greettwonp('Dharani','Senthil');


//calculate value 

function Square(number)
{
    return number*number ;
}
let output=Square(2);
console.log(output);
console.log(Square(5));

