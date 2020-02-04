  //................ Izračun starosti.............
  

  var dateParts;
  var starost;
  var datRojstva;

 function starostFunction()
 {
  datRojstva = document.getElementById("datRojstva").value ;
  var dateParts = datRojstva.split(".");  
// month is 0-based, that's why we need dataParts[1] - 1
  var datRojstva = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);  //datRojstva = dateObject
 //** var datRojstva = new Date(dateObject.toString());
  var d1 = Date.parse(datRojstva);
  var d2 = Date.parse(Date());
  var d3 = d2 - d1;
  var n = 1000*60*60*24*365.25;
// window.alert ("n= " + n);
  var starost = ~~(d3 / n);
 //window.alert (starost);
  document.getElementById("starost").value = starost; 
}

var as = ["1", "2", "3", "4", "5"];
var mal = ["1", "2", "3", "4"];
var allNumb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function isNumber(evt, a)
{ 
   // var allowed_characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var allowed_characters = a;
    
    if (allowed_characters.indexOf(evt.key) > -1) {
        return true;
    }

    return false;
}