var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
  
   var a = result.forEach((element) =>element.name);
   console.log(a)
}
   