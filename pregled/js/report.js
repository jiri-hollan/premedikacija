
 function reportFunction()
 {
     document.getElementById("prva").style.display = "none"; 
     document.getElementById("druga").style.display = "none";
     document.getElementById("tretja").style.visibility = "visible";


nalepka = document.getElementById("priimek").value;
nalepka = "priimek in ime: " + "<b>" + nalepka + " " + document.getElementById("ime").value + "</b>" + "<br>";
nalepka = nalepka + "dat. rojstva: " +  "<b>" + document.getElementById("datRojstva").value + "</b>" + "<br>" ;
nalepka = nalepka + "matična št. " +  "<b>" + document.getElementById("stevMaticna").value + "</b>" ;
//alert(nalepka);
document.getElementById("nalepkaR").innerHTML=nalepka;
//---------------------------------------------------------------
obravnava = danes;
obravnava = "<h3>" + obravnava + " " + "za odd. " + document.getElementById("zaOdd").value + "</h3>" ;
document.getElementById("obravnavaR").innerHTML=obravnava;

diagnoza =  "Op.diagnoza: " +    "<b>" + document.getElementById("dgOperativna").value + "</b>";
document.getElementById("diagnozaR").innerHTML=diagnoza;
diagnoza =  "predvidena op.: " +    "<b>" + document.getElementById("opNacrtovana").value + "</b>";
document.getElementById("operacijaR").innerHTML=diagnoza;

meritve =  "starost: " + "<b>" + document.getElementById("starost").value + " let " + "</b>";
meritve =  meritve + " teža: " + "<b>" + document.getElementById("teza").value + " kg " + "</b>";
meritve =  meritve + " višina: " + "<b>" + document.getElementById("visina").value + " m " + "</b>";

alert(typeof meritve + meritve);
document.getElementById("meritveR").innerHTML=meritve;

spa=document.getElementById("sp").innerHTML;
//alert(typeof spa + spa);
//document.getElementById("diagnozaR").innerHTML=spa;
//document.getElementById("nalepkaR").innerHTML=spa;

}