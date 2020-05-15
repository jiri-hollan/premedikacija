
var hb = {min:100, max:150};
var ks = {min:3, max:6.5};
var inr = {min:0.8, max:3};
var aptc = {min:20, max:45};
var trombociti = {min:150, max:400};
var kreatinin = {min:10, max:80};

 function laborFunction(ime,vrednost)
{
  min = window[ime]["min"];
  if(vrednost !="" && vrednost<min){
    alert (ime + " je pod spodnjo mejo mormale");
  }

max = window[ime]["max"];

  if(vrednost != "" && vrednost>max){
   alert (ime + " je nad zgornjo mejo mormale");
  }

}
