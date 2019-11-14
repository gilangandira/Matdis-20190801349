var baca = require("readline-sync");

var a = parseInt(baca.question("Masukan Nilai A : "));
var b = parseInt(baca.question("Masukan Nilai B : "));

if ((a > 4) && (b < 4)) {
    console.log("True");
}else{
    console.log("False");
}

// a > 4 OR b < 4 ?
if ((a > 4) || (b < 4)) {
    console.log("True");
}else{
    console.log("False");
}