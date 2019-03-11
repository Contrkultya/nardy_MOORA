var amount=0;
var object;
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
    object[amount] = new obj;
    object[amount].name=document.getElementById('name').value;
    object[amount].value= document.getElementById('value').value;
    amount++;
}
