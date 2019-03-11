var number=0;
var object=[];
var obj = {
    removed : false,
    name:"",
    value:"",
    delete:function(){
        this.removed=true;
    },
    read:function(){
        console.log(this.name);
        console.log(this.value);
        console.log(this.removed);

    },
    readkey:function(key){
        console.log(this.key);
    },
    update:function(updObj){
        console.log ("Введите новое значение для " +updObj);
        updObj=document.getElementById('smth_will_be_here_later').value;
    }


}


function objBuilder(){
    object[number] = Object.create(obj);
    var setname = document.getElementById('name').value;
    var setvalue = document.getElementById('value').value;
    object[number].removed=false;
    object[number].name=setname;
    object[number].value=setvalue;
    number++;
    printObj();
}

function printObj (){ 
    var output="";
    for (i=0; i<object.length;i++)
    {   
        if(object[i].removed==false) output+=('<input type="checkbox" id="chck'+i+'"'+object[i].name+ "\n");
    }
    document.getElementById('createdObjects').innerHTML=output;
}

function removeKebab(){
    for(i=0; i<object.length;i++){
    if(document.getElementById(chck+"i").checked==true) object[i].removed=true;}
}
function read(){
    var sel;
    for(i=0; i<object.length;i++)
    {
    if(document.getElementById(chck+"i").checked==true) sel=i;
    }
    switch(document.getElementsByName("key").value){
        case("name"): object[sel].readkey(name);
        case("value"): object[sel].readkey(value);
        case("everything"): object[sel].read();
    }
}
