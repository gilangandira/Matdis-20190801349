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

var Determinan = hasil1+hasil2+hasil3-hasil4-hasil5-hasil6;

var adjoin1 = (dataA[1][1] * dataA[2][2] - dataA[1][2] * dataA[2][1]) * 1;
var adjoin2 = (dataA[1][0] * dataA[2][2] - dataA[1][2] * dataA[2][0]) * -1;
var adjoin3 = (dataA[1][0] * dataA[2][1] - dataA[1][1] * dataA[2][0]) * 1;
var adjoin4 = (dataA[0][1] * dataA[2][2] - dataA[0][2] * dataA[2][1]) * -1;
var adjoin5 = (dataA[0][0] * dataA[2][2] - dataA[0][2] * dataA[2][0]) * 1;
var adjoin6 = (dataA[0][0] * dataA[2][1] - dataA[0][1] * dataA[2][0]) * -1;
var adjoin7 = (dataA[0][1] * dataA[1][2] - dataA[0][2] * dataA[1][1]) * 1;
var adjoin8 = (dataA[0][0] * dataA[1][2] - dataA[0][2] * dataA[0][1]) * -1;
var adjoin9 = (dataA[0][0] * dataA[1][1] - dataA[0][1] * dataA[1][0]) * 1;

var rumus1 = 1/Determinan;

var invers1 = adjoin1 / Determinan;
var invers2 = adjoin4 / Determinan;
var invers3 = rumus1 * adjoin7;
var invers4 = rumus1 * adjoin2;
var invers5 = rumus1 * adjoin5;
var invers6 = rumus1 * adjoin8;
var invers7 = rumus1 * adjoin3;
var invers8 = rumus1 * adjoin6;
var invers9 = rumus1 * adjoin9;

console.log(("Determinan = ") +Determinan);
console.log("\n")

console.log("Hasil Awal")
console.log(adjoin1+("/")+Determinan,adjoin4+("/")+Determinan,adjoin7+("/")+Determinan);
console.log(adjoin2+("/")+Determinan,adjoin5+("/")+Determinan,adjoin8+("/")+Determinan);
console.log(adjoin3+("/")+Determinan,adjoin6+("/")+Determinan,adjoin9+("/")+Determinan);



