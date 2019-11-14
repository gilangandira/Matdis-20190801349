var baca = require("readline-sync");

var a = parseInt(baca.question("Masukan Nilai A : "));

if (a > 5){
    console.log(a+" > 5 : True");
}else{
    console.log(a+" < 5 : False");
}
if (a<8){
    console.log(a+" < 8 : True");
}else{
    console.log(a+" < 8 : False");
}