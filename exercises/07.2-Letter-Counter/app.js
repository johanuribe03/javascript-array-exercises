let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"


let counts = {};
// your code here

removedSpaces = par.split(" ").join(""); //remove spaces
par2 = removedSpaces.toLowerCase(); //toLowerCase

obj = JSON.parse(par2);
console.log(par2);
count = 1;