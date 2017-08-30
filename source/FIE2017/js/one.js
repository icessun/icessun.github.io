(function () {
   document.getElementById("button").onclick=function () {
      document.getElementById("aqi-display").innerHTML=input();
      };
    function input(){
        if (! isNaN(document.getElementById("aqi-input").value) && (document.getElementById("aqi-input").value<=500 &&  document.getElementById("aqi-input").value>0)){
            return document.getElementById("aqi-input").value;
        }else {
            return "输入错误"
        }
   }
})();