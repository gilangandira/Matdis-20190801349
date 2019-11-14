
var dataA = [[1,2,3,4],[4,5,6,7],[2,4,6,8],[8,6,5,4]];
var A1 = dataA[2][1]*dataA[3][3]-dataA[2][3]*dataA[3][1];
var A2 = dataA[1][1]*dataA[3][3]-dataA[1][3]*dataA[3][1];
var A3 = dataA[1][1]*dataA[1][3]-dataA[2][3]*dataA[2][1];

var B1 = -dataA[1][2] * A1;
var B2 = dataA[2][2] * A2;
var B3 = -dataA[3][2] * A3;


var C1 = dataA[0][0]* (B1+B2+B3);
console.log(B1);
