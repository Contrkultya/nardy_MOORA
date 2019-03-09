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
});
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
    function populateHeader(walle){
        document.getElementById("out").innerHTML=name;
    }


}

var boolExile = false, boolFile = false;
function file_or_exile_Checker(X){
    if (X == 1)
    {
        boolFile = true;
        boolExile = false;
        document.getElementById('siteURL').value = '';
    }
    else 
    {
        boolExile = true;
        boolFile = false;
        document.getElementById('fileLocation').value = '';
    }

}
function file_or_exile(){
    if (boolFile)
    {
        //do some method for File
    }
    else if (boolExile)
    {
        //do some method for Exile
    }
}

// working function

function checkMother() {
    var mydata;
    if (document.getElementById('cock').value !== "") mydata = document.getElementById('cock').value; else
        mydata = '[{ "name": "Доска 1", "children": [{ "name": "Список задач 1.1","children": [{ "name": "Задача 1.1.1" },{ "name": "Задача 1.1.2" }]},{"name": "Список задач 1.2","children": [{ "name": "Задача 1.2.1" },{ "name": "Задача 1.2.2" }]},{"name": "Список задач 1.3"}]},{"name": "Доска 2"}]';
    var dat = JSON.parse(mydata);


    var html = '<ul>';
    for (var k in dat) {
        html = html + '<li>' + dat[k].name + '</li>';

        if (dat[k].children != null) {
            html = html + "<ul>";
            for (i = 0; i < dat[k].children.length; i++) {
                html = html + "<li>" + dat[k].children[i].name + "</li>";
                if (dat[k].children[i].children !== null) {
                    html = html + "<ul>";   
                    for (m in dat[k].children[i].children) {
                        html = html + "<li>" + dat[k].children[i].children[m].name + "</li>";
                    }
                    html = html + "</ul>";
                }
            }
            html = html + "</ul>";
        }

        html = html + '</li>';
    }
    html = html + '</ul>';

    document.getElementById('out').innerHTML = html;
}
