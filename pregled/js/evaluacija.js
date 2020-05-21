
var hb = {min:100, max:150};
var ks = {min:3.6, max:6.1};
var inr = {min:0.8, max:1.3};
var aptc = {min:28, max:40};
var trombociti = {min:150, max:410};
var kreatinin = {min:72, max:127};

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
