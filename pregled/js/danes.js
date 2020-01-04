 //izračun današnjeg datuma in prikaz v ljudski obliki. V <input> vložena pravilna oblika datuma za QLS
   var danes;
  function danesFunction() {
    var d = new Date();   
    var danes = d.toLocaleDateString("sl-SI");  
    //document.forms["frm1"].elements["datPregleda"].value = danes; 
  document.getElementById("lab6").innerHTML = "Datum pregleda:  " + danes;
  
  document.getElementById("datPregleda").value = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}
