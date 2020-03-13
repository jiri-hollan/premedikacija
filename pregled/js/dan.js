
function danFunction() {
//...dan od 1 do 31..........................
var dan = "";
var i;
for (i = 1; i < 32; i++) {
dan += "<option value=" +  i + ">"  +"<br>";
}
document.getElementById("dnevi").innerHTML = dan;
//...mesec od 1 do 12.........
var mesec = "";
var i;
for (i = 1; i < 13; i++) {
mesec += "<option value=" +  i + ">"  +"<br>";
}
document.getElementById("meseci").innerHTML = mesec;

}