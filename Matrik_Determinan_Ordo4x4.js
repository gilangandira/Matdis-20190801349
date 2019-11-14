console.log("Matrik Ordo 3x3");
console.log("Penjumlahan");
console.log("    [1 2 3 4]        [1 3 6 9]");
console.log("A = [4 5 6 7]    B = [2 1 2 5]");
console.log("    [2 4 6 8]        [8 6 4 1]");
console.log("    [8 6 5 4]        [5 1 7 8]");
console.log("\n");

var dataA = [[1,2,3,4],[4,5,6,7],[2,4,6,8],[8,6,5,4]];

 //Tahap 1
var D1 = dataA[0][0]*1;
var D1_1 = [dataA[1][1], dataA[1][2], dataA[1][3], dataA[2][1], dataA[2][2], dataA[2][3], dataA[3][1], dataA[3][2], dataA[3][3]];
var D2 = dataA[0][1]*-1;
var D2_1 = [dataA[1][0],dataA[1][2],dataA[1][3], dataA[2][0], dataA[2][2], dataA[2][3], dataA[3][0], dataA[3][2], dataA [3][3]];
var D3 = dataA[0][2]*1
var D3_1= [dataA[1][0], dataA[1][1], dataA[1][3], dataA[2][0], dataA[2][1], dataA[2][3], dataA[3][0], dataA[3][1], dataA[3][3]];
var D4 = dataA[0][3]*-1
var D4_1 = [dataA[1][0], dataA[1][1], dataA[1],[2], dataA[2][0], dataA[2][1], dataA[2][2], dataA [3][0], dataA[3][1], dataA[3][2]];

var B1 = dataA[0][0] * ((-dataA[1][2] * (dataA[2][1]*dataA[3][3] - dataA[2][3]*dataA[3][1])) + (dataA[2][2] * (dataA[1][1]*dataA[3][3]-dataA[1][3]*dataA[3][1])) + (-dataA[3][2]*(dataA[1][1]*dataA[1][3] - dataA[2][3]*dataA[2][1]))) ;
var B2 = -dataA[0][1] *((-dataA[1][2] * (dataA[2][0]*dataA[3][3] - dataA[3][0]*dataA[2][3])) + (dataA[2][2] * (dataA[1][0]*dataA[3][3] - dataA[1][3]*dataA[3][0])) + (dataA[3][2]*(dataA[1][0]*dataA[2][3] - dataA[1][3]*[2][0]))) ;
var B3 = dataA[0][2] * ((dataA[1][0] * (dataA[2][1]*dataA[3][3] - dataA[2][3]*dataA[3][1])) + (dataA));
var B4 = -dataA[2][3] * 
console.log(B2);
