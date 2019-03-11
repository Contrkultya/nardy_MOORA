var number = 0;
var object = [];
var check;
var obj = {
    removed: false,
    name: "",
    value: "",
    delete: function () {
        this.removed = true;
    },
    read: function () {
        var outism;
        outism += (this.name) + " ";
        outism += (this.value) + " ";
        outism += (this.removed) + " ";
        document.getElementById('outInfo').value = outism;

    },
    readkey: function (key) {
        document.getElementById('outInfo').value = (this.key);
    },
    update: function (key) {
        updObj = document.getElementById('chng_val').value;
    }


}


function objBuilder() {
    object[number] = Object.create(obj);
    var setname = document.getElementById('name').value;
    var setvalue = document.getElementById('value').value;
    object[number].removed = false;
    object[number].name = setname;
    object[number].value = setvalue;
    number++;
    printObj();
}

function printObj() {
    var output = "";
    for (var i = 0; i < object.length; i++) {
        if (object[i].removed == false) output += ('<input type="checkbox" name="chck">' + object[i].name + " <p></p>\n");
    }
    document.getElementById('createdObjects').innerHTML = output;
    check=document.getElementsByName("chck");
    console.log(check);
}

function removeKebab() {
    for (var i = 0; i < check.length; i++) {
        if (document.check[i].checked) object[i].removed = true;
    }
}
function read() {
    var sel;
    for (var i = 0; i < object.length; i++) {
        if (document.check[i].checked) sel = i; break;
    }
    switch (document.getElementsByName("key").value) {
        case ("name"): object[sel].readkey(name);
        case ("value"): object[sel].readkey(value);
        case ("everything"): object[sel].read();
    }
}
function upd() {
    var sel;
    for (var i = 0; i < object.length; i++) {
        if (document.check[i].checked == true) sel = i; break;
    }
    switch (document.getElementsByName(change_key).value) {
        case ("name"): object[sel].update(name);
        case ("value"): object[sel].update(value);
    }

}
