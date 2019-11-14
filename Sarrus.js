console.log("Matrik Ordo 4x4");
console.log("Determinan Metode Sarrus");
console.log("    [1 2 3 4]        [1 3 6 9]");
console.log("A = [4 5 6 7]    B = [2 1 2 5]");
console.log("    [2 4 6 8]        [8 6 4 1]");
console.log("    [8 6 5 4]        [5 1 7 8]");
console.log("\n");

var dataA = [[1,2,3,4],[4,5,6,7],[2,4,6,8],[8,6,5,4]];

var A1 = (dataA[0][0]*dataA[1][1]*dataA[2][2]*dataA[3][3]) - (dataA[0][1]*dataA[1][2]*dataA[2][3]*dataA[3][0]) 
        +(dataA[0][2]*dataA[1][2]*dataA[2][0]*dataA[3][1]) - (dataA[0][3]*dataA[1][0]*dataA[2][1]*dataA[3][2]) 
        -(dataA[0][0]*dataA[1][3]*dataA[2][2]*dataA[3][1]) + (dataA[0][1]*dataA[1][0]*dataA[2][3]*dataA[3][2]) 
        -(dataA[0][2]*dataA[1][1]*dataA[3][0]*dataA[3][3]) + (dataA[0][3]*dataA[1][2]*dataA[2][1]*dataA[3][0]);

var A2 =-(dataA[0][0]*dataA[1][1]*dataA[2][3]*dataA[3][2]) + (dataA[0][1]*dataA[1][2]*dataA[2][0]*dataA[3][3])
        -(dataA[0][2]*dataA[0][3]*dataA[2][1]*dataA[3][0]) + (dataA[0][3]*dataA[1][0]*dataA[2][2]*dataA[3][1])
        +(dataA[0][0]*dataA[1][3]*dataA[2][1]*dataA[3][2]) - (dataA[0][1]*dataA[1][0]*dataA[2][2]*dataA[3][3])
        +(dataA[0][2]*dataA[1][1]*dataA[2][3]*dataA[3][0]) - (dataA[0][3]*dataA[1][2]*dataA[2][0]*dataA[3][1]);

var A3 = (dataA[0][0]*dataA[1][2]*dataA[2][3]*dataA[3][1]) - (dataA[0][1]*dataA[1][3]*dataA[2][0]*dataA[3][2])
        +(dataA[0][2]*dataA[1][0]*dataA[2][1]*dataA[3][2]) - (dataA[0][3]*dataA[1][1]*dataA[2][2]*dataA[3][0])
        -(dataA[0][0]*dataA[1][2]*dataA[2][1]*dataA[3][3]) + (dataA[0][1]*dataA[1][3]*dataA[2][2]*dataA[3][0])
        -(dataA[0][2]*dataA[1][0]*dataA[2][3]*dataA[3][1]) + (dataA[0][3]*dataA[1][1]*dataA[2][0]*dataA[3][2]);

var Determinan = A1+A2+A3;
console.log("A1 = "+A1,"A2 = "+A2,"A3 = "+A3);
console.log("Determinan A = "+Determinan);
