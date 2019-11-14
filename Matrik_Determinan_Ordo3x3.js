console.log("Matrik Ordo 3x3");
console.log("Perkalian");
console.log("    [3 1 1]");
console.log("A = [5 5 6]");
console.log("    [2 4 6]");
console.log("\n");

var dataA = [[3,1,1],[5,5,6],[2,4,6]];

var hasil1 = dataA[0][0] * dataA[1][1] * dataA[2][2];
var hasil2 = dataA[0][1] * dataA[1][2] * dataA[2][0];
var hasil3 = dataA[0][2] * dataA[1][0] * dataA[2][1];
var hasil4 = dataA[0][1] * dataA[1][0] * dataA[2][2];
var hasil5 = dataA[0][0] * dataA[1][2] * dataA[2][1];
var hasil6 = dataA[0][2] * dataA[1][1] * dataA[2][0];

console.log(hasil1+hasil2+hasil3-hasil4-hasil5-hasil6);
console.log(hasil1,hasil2,hasil3,hasil4,hasil5,hasil6);