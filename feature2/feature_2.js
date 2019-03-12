 class obj {
    constructor(name, value){
    this.removed=false;
    this.name=name;
    this.value=value;}
    read() {
        var outism;
        alert("cock");
        outism += (this.name) + " ";
        outism += (this.value) + " ";
        outism += (this.removed) + " ";
        document.getElementById('outInfo').value = outism;

    };
    readkey(key) {
        document.getElementById('outInfo').value = (this.key);
    };
    update(key) {
        updObj = document.getElementById('chng_val').value;
    }


}
var number = 0; //amount of elements
var object=[];


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
        if (object[i].removed == false) output += ('№:'+(i+1)+": " + object[i].name + " <p></p>\n");
    }
    document.getElementById('createdObjects').innerHTML = output;
}

function removeKebab() {
    var num = (document.getElementById('del_number').value-1);
    try{
        object[num].removed=true;
    }
    catch(e){
        alert("Outta range");
    }
    printObj();
}
function read() {
    var num = (document.getElementById('info_number').value-1);
    console.log(object[num]);
        switch (document.getElementsByName("key").value) {
            case ("name"): {object[num].readkey(name);break;}
            case ("value"):{object[num].readkey(value);break;}
            case ("everything"): {object[num].read(); break;}
        } 
    

    
}
function upd() {
    var num = (document.getElementById('change_number').value-1);
    
        switch (document.getElementsByName(change_key).value) {
        case ("name"): {object[num].update(name); break}
        case ("value"): {object[num].update(value); break;}
    }
    

    printObj();
}
