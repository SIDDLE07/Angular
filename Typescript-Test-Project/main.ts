/*
Typescript is a superset of Javascript.
TS transpiles to JS in browsers as TS is not fully supported in browsers
*/

//#region var vs let

//Example var
function doSomethingVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  // i is still available in the scope of nearest function when declared as var
  console.log(i);
}

//Example let
function doSomethingLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // i is not available when declared as let
  //console.log(i);
}

//#endregion

//#region variable-type
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, "a", "abcd"];

enum Color {
  Red,
  Green,
  Blue,
}
let backgroundColor = Color.Red;

//#endregion

//#region Type-Assertion
//Type assertion is a way to explicitly mention a type of variable
let message; // by default type of variable in any
message = "string"; // even after assigning string to variable the type remains any

// message is used as type string -- Method 1
var endWithC = (message as string).endsWith('c');

// message is used as type string -- Method 2
var endWithC = (<string>message).endsWith('c');

//#endregion

//#region Arrow function
let job  = function Job(){
    console.log("Job");
    
}


//#endregion

