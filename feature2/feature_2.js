class obj {
    constructor(name, value, id) {
        this.removed = false;
        this.name = name;
        this.value = value;
        this.id = id;
        this.parent;
        this.hasChildren;
    }
    read() {
        var outism="";
        outism += (this.name) + " ";
        outism += (this.value) + " ";
        outism += (this.removed) + " ";
        document.getElementById('outInfo').value = outism;

    };
    readName() {
        document.getElementById('outInfo').value = this.name;
    };
    readValue(){
        document.getElementById('outInfo').value = this.value;
    }
    readID(){
        document.getElementById('outinfo').value = this.id;
    }
    updateName() {
        this.name = document.getElementById('chng_val').value;
    }
    updateValue(){
        this.value = document.getElementById('chng_val').value;
    }
    updateID(){
        this.id = document.getElementById('chng_val').value;
    }


}
var number = 0; //amount of elements
var object = []; // array of objects


function objBuilder() {
    var setname = document.getElementById('name').value;
    var setvalue = document.getElementById('value').value;
    object[number] = new obj(setname, setvalue);
    number++;
    printObj();
}

function printObj() {
    var output = "";
    for (i = 0; i < object.length; i++) {
        if (object[i].removed == false) output += ('№:' + (i + 1) + ": " + object[i].name + " <p></p>\n");
    }
    document.getElementById('createdObjects').innerHTML = output;
}

function removeKebab() {
    var num = (document.getElementById('del_number').value - 1);
    try {
        object[num].removed = true;
    }
    catch (e) {
        alert("Outta range");
    }
    printObj();
}
function read() {
    var num = (document.getElementById('info_number').value - 1);
    console.log(object[num]);
    try{
    switch (document.objs.key.value) {
        case ("name"): { object[num].readName(); break; }
        case ("value"): { object[num].readValue(); break; }
        case ("everything"): { object[num].read(); break; }
        case("ID"): {object[num].readID();break}
    }}
    catch(e){
        alert("Outta range");
    }



}
function upd() {
    var num = (document.getElementById('change_number').value - 1);
    try{
    switch (document.objs.change_key.value) {
        case ("name"): { object[num].updateName(); break }
        case ("value"): { object[num].updateValue(); break; }
        case ("ID"): {object[num].updateValue();break;}
    }}
    catch(e){
        alert("Outta range");
    }


    printObj();
}
