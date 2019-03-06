// install slim version of 
function checkMother()
{
var adress = document.getElementById("siteURL").value;

jQuery.getJSON(adress, function(data){
    var output="<ul>";
    for (var i in data.name) {
        output+="<li>" + data.name[i]+"</li>";
    }

    output+="</ul>";
    document.getElementById("out").innerHTML=output;
} );
};
function getJN()
{
    var request ="https://github.com/Contrkultya/nardy_MOORA/blob/master/pedofile.json";
   var file = new XMLHttpRequest();
   file.open('GET', request);
   file.responseType='json';
   file.send();
   file.onload=function(){
       var bivshaya = file.response;
       populateHeader(bivshaya);
       showBivshaya(bivshaya);
}
    function populateHeader(walle)
    {
        document.getElementById("out").innerHTML=name;
    }


}
