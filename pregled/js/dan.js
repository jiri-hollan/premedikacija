

function stevilkaFunction(a,b,c) {
//...dan od 1 do 31..........................
var b = "";
var i;
for (i = 1; i < a; i++) {
b += "<option value=" +  i + ">"  +"<br>";
}
document.getElementById(c).innerHTML = b;
}