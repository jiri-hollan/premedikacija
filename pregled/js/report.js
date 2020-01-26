
 function reportFunction()
 {
 	 var x;
     document.getElementById("prva").style.display = "none"; 
     document.getElementById("druga").style.display = "none";
     document.getElementById("tretja").style.visibility = "visible";

//preiskava = document.​forms["frm1"].fieldset["lab"]. ​getElementsByTagName("input")[0].name;
//alert(preiskava);
nalepka = document.getElementById("priimek").value;
nalepka = "priimek in ime:.... " + "<b>" + nalepka + " " + document.getElementById("ime").value + "</b>" + "<br>";
nalepka = nalepka + "datum rojstva:..... " +  "<b>" + document.getElementById("datRojstva").value + "</b>" + "<br>" ;
nalepka = nalepka + "matična številka:. " +  "<b>" + document.getElementById("stevMaticna").value + "</b>" ;
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
//..................................če ni vpisana vrednost............................................................................
function xFunction(x)
 {
if((x === undefined || x == null || x.length <= 0))  {
x = "....";
//alert(typeof x + x);
return x;
     }
  else {
  //x = x;
  return x;
     }
  }	
//....................................Meritve..............................................
 x = document.getElementById("starost").value;
 x = xFunction(x);
//alert(typeof x + x);
meritve =  "starost:" + "&nbsp"  + "<b>" + x + "&nbsp" + "let" + "</b>" + "&nbsp";
x = document.getElementById("teza").value;
x = xFunction(x);
meritve =  meritve +  " " + " teža:" + "&nbsp" + "<b>" + x + "&nbsp" + "kg " + "</b>" + "&nbsp";

x = document.getElementById("visina").value;
x = xFunction(x);
meritve =  meritve + " "  + " višina:" + "&nbsp" + "<b>" + x + "&nbsp" +  "m " + "</b>" + "&nbsp";

x = document.getElementById("bmi").value;
x = xFunction(x);
meritve =  meritve +  " " + " BMI:" + "&nbsp" + "<b>" + x +  "</b>" + "&nbsp";

x = document.getElementById("krTlak").value;
x = xFunction(x);
meritve =  meritve +  " " + " krvni tlak:" + "&nbsp" + "<b>" + x + "&nbsp" + "mmHg " + "</b>" + "&nbsp";

x = document.getElementById("pulz").value;
x = xFunction(x);
meritve =  meritve +  " " + " pulz:" + "&nbsp" + "<b>" + x + "&nbsp" + "/min " + "</b>";
document.getElementById("meritveR").innerHTML=meritve;

//........laboratorij...................................................................................
var text = "";
var i;
var lab = document.getElementById("lab").getElementsByTagName("label");
var vred =document.getElementById("lab").getElementsByTagName("input"); 
for (i = 0; i < lab.length; i++) {

  text += lab[i].innerHTML + vred[i].value + "," + "&nbsp" + " ";
  
  //alert(text)
}
document.getElementById("labR").innerHTML = text;
//....................EKG....................................................................

var ekg = document.getElementById("ekg").value;
document.getElementById("ekgR").innerHTML= "EKG: " + ekg;
//...........................RTG................................................................
var rtg = document.getElementById("rtg").value;
document.getElementById("rtgR").innerHTML= "RTG: " + rtg;
//..............pridružene bolezno........................................................

var prid = document.getElementById("dgPridruzene").value;
//alert(prid);
document.getElementById("pridBolezniR").innerHTML= "Pridružene bolezni: " + prid;
//................................... predhodna terapija.........................................
var pred = document.getElementById("terPredhodna").value;
document.getElementById("predTerapR").innerHTML= "Predhodna terapija: " + pred;
//............asa mallampati, alergija.........................................................
var asa = document.getElementById("asa").value;
//alert(asa);
document.getElementById("asaR").innerHTML= asa;

var mall = document.getElementById("mall").value;
//alert(mall);
document.getElementById("mallR").innerHTML= mall;

var alergija = document.getElementById("alergija").value;
//alert(alergija);
document.getElementById("alergijaR").innerHTML= alergija;


//..................Izvidi in opombe...........................................................
var izvidi = document.getElementById("izvidiInOpombe").value;
document.getElementById("izvidiR").innerHTML= "Izvidi in opombe: " + izvidi;

//preiskava = document.​forms["frm1"].fieldset["lab"]. ​getElementsByTagName("input")[0].name;
//alert(preiskava);
//spa=document.getElementById("sp").innerHTML;
//alert(typeof spa + spa);
//document.getElementById("diagnozaR").innerHTML=spa;
//document.getElementById("nalepkaR").innerHTML=spa;

}