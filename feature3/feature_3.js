/*
        * Класс, включающий в себя конструктор создания объектов.
    * @constructor
    * Получает следующие данные введённые пользователем (в будущем полученные из JSON'а):
        * @param {string} name — ключ-имя элемента;
        * @param {string} value — ключ-значение элемента;
        * @param {string} id — ключ-идентификатор элемента;
    * @param {string} parent — ключ-идентификатор родителя этого элемента;
    * @param {bool} hasChildren — ключ-признак наличия дочерних элементов;
    * @param {bool} removed — ключ-признак удаления данного элемента;
*/
var keys = [ 'id', 'parent', 'name', 'hasChildren', 'remove'];
class obj {
    constructor(id, parent, name, hasChildren) {
        this.id = id;
        this.parent = parent;
        this.name = name;
        this.hasChildren = hasChildren;
        this.removed = false;
    }
    read() {
        var outism = "";
        if (this.removed == true)
            return undefined;
        else 
            return outism += this.name + ' ' + this.parent + ' ' + this.id + ' ' + this.hasChildren;

    }
    read(key) {
        for (let i = 0; i < keys.length; i++) {
            if (key == keys[i]) {
                if (this.keys[i] === undefined || this.keys[i] == ' ') {
                    return null;
                }
                else {
                    return this.keys[i];
                }
            }
        }
    }
    update(updObj){
        for (let i = 0; i < 5; i++) {
            this.keys[i] = updObj.keys[i];
        }
    }
    delete() {
        this.removed = true;
    }
}

var number = 0;
var object = [];
function objBuilder_file(data) {
    for (let i = 0; i < data.length; i++) {
        let setid = data[i].id;
        let setparent = data[i].parent;
        let setname = data[i].name;
        let hasChildren = data[i].hasChildren;
        let setremoved = data[i].removed;
        object[number] = new obj(setid, setparent, setname, hasChildren, setremoved);
        number++;
    }
}

var data = '[{ "id": 1,"name": "Доска 1","hasChildren": true},{"id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true},{ "id": 3,"parent": 2,"name": "Задача 1.1.1" },{ "id": 4,"parent": 2,"name": "Задача 1.1.2" },{"id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true},{ "id": 6,"parent": 5,"name": "Задача 1.2.1" },{ "id": 7,"parent": 5,"name": "Задача 1.2.2" },{"id": 8,"parent": 1,"name": "Список задач 1.3"},{"id": 9,"name": "Доска 2"}]';
data = JSON.parse(data);
var end="";
function getChildren(callback)
{
    setTimeout(function(){
        callback(id);   
    for(i = 0; i<mas.length;i++)
    { 
        document.getElementById(id).innerHTML+="<li id='"+(mas[i].id+"li")+"'>"+mas[i].name+" <button onClick=render('"+mas[i].id+"li"+"')>render</button>"+"</li>";
        if(mas[i].hasChildren == true)
        {
            
                document.getElementById(id).innerHTML+="<button onClick=res("+(mas[i].id-1)+")>load</button><ul><div id='"+(mas[i].id-1)+"'></ul>";
        }
    }
    },1000);
    
}
function loadChildren(id, callback)
{
    for(i=id;i<data.length;i++)
    {
        if(data[i].hasChildren==true)
        {
            modelBuilder(data[i].id);
        }
    }
}
function modelBuilder(id)
{
    mas=[];
    j=0;
    for(i = id; i<data.length;i++)
    {
        if(data[i].parent == id)
        {
            mas[j]=data[i];
            j++;
        }
    }
}
function load()
{
    document.getElementById("result").innerHTML +="<ul>";
    for(i=0;i<data.length; i++)
    {
        if(data[i].parent == undefined)
        {
            document.getElementById("result").innerHTML +="<li id='"+(data[i].id+"li")+"'>"+data[i].name+" <button onClick=render('"+(data[i].id+"li")+"')>render</button></li>";
        
            if(data[i].hasChildren==true)
            {
                document.getElementById("result").innerHTML+="<button onClick=res("+i+")>load</button><ul><div id='"+i+"'></ul>";
            }
        }
    }
}
 function res(m)
 {
     if(document.getElementById(m).innerHTML=="")
     {
     id=m;
    getChildren(loadChildren);
     }
     else if(document.getElementById(m).innerHTML!="")
     {
        document.getElementById(m).innerHTML="";
     }
 }
 function render(x)
 {
     stl=prompt("Вводите стиль:");
document.getElementById(x).style=end+stl;
 }
