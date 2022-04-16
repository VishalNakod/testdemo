var request=new XMLHttpRequest
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json" )
request.send();
request.onload=function(){
var data=JSON.parse(request.response);
for( var i=0; i<data.length;i++)
{
    // console.log(data)
// // console.log(data[i].name,data[i].capital)
// console.log(`Country:${data[i].name}       
// Capital:${data[i].capital}
//  Latitude:${data[i].latlng[0]}
//   Logitude:${data[i].latlng[1]}`)
console.log(`Country:${data[i].name}    Flag:${data[i].flag}`)
}
}