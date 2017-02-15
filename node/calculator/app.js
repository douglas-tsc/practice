// if you want to use environment variables instead type A=3 node app in terminal
// var a = Number(process.env.A);
// var b = Number(process.env.B);

var command = process.argv[2]
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

if(command === 'add') {
  console.log(a + b);
} else if(command === 'subtract') {
  console.log(a - b);
} else if(command === 'multiply') {
  console.log(a * b);
} else if(command === 'divide') {
  console.log(a / b);
}
