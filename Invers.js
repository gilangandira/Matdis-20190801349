
var dataA = [[1,2,3,4],[4,5,6,7],[2,4,6,8],[8,6,5,4]];

var B1 = (dataA[1][1]*dataA[2][2]*dataA[3][3]) + (dataA[1][2]*dataA[2][3]*dataA[3][1])
        +(dataA[1][3]*dataA[2][1]*dataA[3][2]) - (dataA[1][1]*dataA[2][3]*dataA[3][2])
        -(dataA[1][2]*dataA[2][1]*dataA[3][3]) - (dataA[1][3]*dataA[2][2]*dataA[3][1]);

var B2 = (dataA[0][1]*dataA[2][3]*dataA[3][2]) + (dataA[0][2]*dataA[2][1]*dataA[3][3])
        +(dataA[0][3]*dataA[2][2]*dataA[3][1]) - (dataA[0][1]*dataA[2][2]*dataA[3][3])
        -(dataA[0][2]*dataA[2][3]*dataA[3][1]) - (dataA[0][3]*dataA[2][1]*dataA[3][2]);

var B3 = (dataA[0][1]*dataA[1][2]*dataA[3][3]) + (dataA[0][2]*dataA[1][3]*dataA[3][1])
        +(dataA[0][3]*dataA[1][1]*dataA[3][2]) - (dataA[0][1]*dataA[1][3]*dataA[3][2])
        -(dataA[0][2]*dataA[1][1]*dataA[3][3]) - (dataA[0][3]*dataA[1][2]*dataA[3][1]);

var B4 = (dataA[0][1]*dataA[1][3]*dataA[2][2]) + (dataA[0][2]*dataA[1][1]*dataA[2][3])
        +(dataA[0][3]*dataA[1][2]*dataA[2][1]) - (dataA[0][1]*dataA[1][2]*dataA[2][3])
        -(dataA[0][2]*dataA[1][3]*dataA[2][1]) - (dataA[0][3]*dataA[1][1]*dataA[2][2]);

var B5 = (dataA[1][0]*dataA[2][3]*dataA[3][2]) + (dataA[1][2]*dataA[2][0]*dataA[3][3])
        +(dataA[1][3]*dataA[2][2]*dataA[3][0]) - (dataA[1][0]*dataA[2][2]*dataA[3][3])
        -(dataA[1][2]*dataA[2][3]*dataA[3][0]) - (dataA[1][3]*dataA[2][0]*dataA[3][2]);

var B6 = (dataA[0][0]*dataA[2][2]*dataA[3][3]) + (dataA[0][2]*dataA[2][3]*dataA[3][0])
        +(dataA[0][3]*dataA[2][0]*dataA[3][2]) - (dataA[0][0]*dataA[2][3]*dataA[3][2])
        -(dataA[0][2]*dataA[2][0]*dataA[3][3]) - (dataA[0][3]*dataA[2][2]*dataA[3][0]);

var B7 = (dataA[0][0]*dataA[1][3]*dataA[3][2]) + (dataA[0][2]*dataA[1][0]*dataA[3][3])
        +(dataA[0][3]*dataA[1][0]*dataA[2][2]) - (dataA[0][0]*dataA[1][2]*dataA[3][3])
        -(dataA[0][2]*dataA[1][3]*dataA[3][0]) - (dataA[0][3]*dataA[1][0]*dataA[3][2]);

var B8 = (dataA[0][0]*dataA[1][2]*dataA[2][3]) + (dataA[0][2]*dataA[1][3]*dataA[2][0])
        +(dataA[0][3]*dataA[1][0]*dataA[2][2]) - (dataA[0][0]*dataA[1][3]*dataA[2][2])
        -(dataA[0][2]*dataA[1][0]*dataA[2][3]) - (dataA[0][3]*dataA[1][2]*dataA[2][0]);

var B9 = (dataA[1][0]*dataA[2][1]*dataA[3][3]) + (dataA[1][1]*dataA[2][3]*dataA[3][0])
        +(dataA[1][3]*dataA[2][0]*dataA[3][1]) - (dataA[1][0]*dataA[2][3]*dataA[3][1])
        -(dataA[1][1]*dataA[2][0]*dataA[3][3]) - (dataA[1][3]*dataA[2][1]*dataA[3][0]);

var B10 = (dataA[0][0]*dataA[2][3]*dataA[3][1]) + (dataA[0][1]*dataA[2][0]*dataA[3][3])
         +(dataA[0][3]*dataA[2][1]*dataA[3][0]) - (dataA[0][0]*dataA[2][1]*dataA[3][3])
         -(dataA[0][1]*dataA[2][3]*dataA[3][0]) - (dataA[0][3]*dataA[2][0]*dataA[3][1]);

var B11 = (dataA[0][0]*dataA[1][1]*dataA[3][3]) + (dataA[0][1]*dataA[1][3]*dataA[3][0])
         +(dataA[0][3]*dataA[1][0]*dataA[3][1]) - (dataA[0][0]*dataA[1][3]*dataA[3][1])
         -(dataA[0][1]*dataA[1][0]*dataA[3][3]) - (dataA[0][3]*dataA[1][1]*dataA[3][0]);

var B12 = (dataA[0][0]*dataA[1][3]*dataA[2][1]) + (dataA[0][1]*dataA[1][0]*dataA[2][3])
         +(dataA[0][3]*dataA[1][1]*dataA[2][0]) - (dataA[0][0]*dataA[1][1]*dataA[2][3])
         -(dataA[0][1]*dataA[1][3]*dataA[2][0]) - (dataA[0][3]*dataA[1][0]*dataA[2][1]);

var B13 = (dataA[1][0]*dataA[2][2]*dataA[3][1]) + (dataA[1][1]*dataA[2][0]*dataA[3][0])
         +(dataA[1][2]*dataA[2][1]*dataA[3][0]) - (dataA[1][0]*dataA[2][1]*dataA[3][2])
         -(dataA[1][1]*dataA[2][2]*dataA[3][0]) - (dataA[1][2]*dataA[2][0]*dataA[3][1]);

var B14 = (dataA[0][0]*dataA[2][1]*dataA[3][2]) + (dataA[0][1]*dataA[2][2]*dataA[3][0])
         +(dataA[0][2]*dataA[2][0]*dataA[3][1]) - (dataA[0][0]*dataA[2][2]*dataA[3][1])
         -(dataA[0][1]*dataA[2][0]*dataA[3][2]) - (dataA[0][2]*dataA[2][1]*dataA[3][0]);
                
var B15 = (dataA[0][0]*dataA[1][2]*dataA[3][1]) + (dataA[0][1]*dataA[1][0]*dataA[3][2])
         +(dataA[0][2]*dataA[1][1]*dataA[]3[0]) - (dataA[0][0]*dataA[1][1]*dataA[3][2])
         -(dataA[0][1]*dataA[1][2]*dataA[3][0]) - (dataA[0][2]*dataA[1][0]*dataA[3][1]);

var B16 = (dataA[0][0]*dataA[1][1]*dataA[2][2]) + (dataA[0][1]*dataA[1][2]*dataA[2][0])
         +(dataA[0][2]*dataA[1][0]*dataA[2][1]) - (dataA[0][0]*dataA[1][2]*dataA[2][1])
         -(dataA[0][1]*dataA[1][0]*dataA[2][2]) - (dataA[0][2]*dataA[1][1]*dataA[2][0]);

console.log("           |",B1,B2,B3,B4,"|")
console.log("Minor  =   |",B5,B6,B7,B8,"|")
console.log("           |",B9,B10,B11,B12,"|")
console.log("           |",B13,B14,B15,B16,"|")

