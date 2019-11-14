console.log("Menghitung Irisan dan Kardinal");
console.log("A {1,2,5,8,9,10}");
console.log("B {4,2,8,10,11,12}");
console.log("C {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
console.log("");

var A = [1,2,5,8,9,10];
var B = [4,2,8,10,11,12];
var C = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var input = require("array-intersection");

var Irisan1 = input(A,B);
var Irisan2 = input(B,C);
var Irisan3 = input(C,A);

console.log("Hasil Irisan A dengan B = " +Irisan1);
console.log("Hasil Irisan B dengan C = " +Irisan2);
console.log("Hasil Irisan C dengan A = " +Irisan3);

var Kardinal = A.length + C.length;
console.log("Kardinal A + Kardinal C = " +Kardinal);