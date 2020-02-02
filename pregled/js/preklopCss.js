function osebniFunction()
 {

priimek = document.getElementById("priimek").value;
ime = document.getElementById("ime").value;
datRojstva = document.getElementById("datRojstva").value ;
stevMaticna = document.getElementById("stevMaticna").value;
  document.getElementById("osebni").innerHTML = priimek + " " + ime + "  " + "roj: " + datRojstva + "  mat. indeks: " + stevMaticna;
  document.getElementById("imeZdravnika").value = localStorage.getItem("imeZdravnika");
document.getElementsByTagName('title')[0].innerHTML= priimek + " " + ime;

     document.getElementById("prva").style.display = "none"; 
     document.getElementById("druga").style.visibility = "visible";
     document.getElementById("tretja").style.visibility = "none";
}