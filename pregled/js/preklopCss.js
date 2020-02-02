function osebniFunction()
 {

 var w = document.getElementById("frm")["ime"].value;
 var x= document.getElementById("frm")["priimek"].value;
 var y = document.getElementById("frm")["datRojstva"].value;
 var z = document.getElementById("frm")["stevMaticna"].value;

  if (w == "") {
    alert("Name must be filled out");
    return false;
  }

else if (x == "") {
    alert("priimek must be filled out");
    return false;
  }

else if (y == "") {
    alert("datum rojstva must be filled out");
    return false;
  }

  else if (z == "") {
    alert("matična številka must be filled out");
    return false;
  }


 else {

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
}