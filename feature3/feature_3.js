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
class obj {
    constructor(id, parent, name, hasChildren, removed) {
        this.id = id;
        this.parent = parent;
        this.name = name;
        this.hasChildren = hasChildren;
        this.removed = removed;
    }
    read() {
        var outism = "";
        outism += (this.name) + " ";
        outism += (this.value) + " ";
        outism += (this.id) + " ";
        return outism;

    };
    readName() {
        return this.name;
    };
    readValue() {
        return this.value;
    };
    readID() {
        return this.id;
    };
    updateName(name) {
        this.name = name;
    };
    updateValue(value) {
        this.value = value;
    };
    updateID(id) {
        this.id = id;
    };
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

/*onLoad
function asyncDoska(null, callbackfunction) {
    
}
callbackfunction(Massiveobjects) {
    render()
    result -> html
}
clickOnDoska() {

}
mockFunck(idDoski, callbackfunction) {

}
clickZadacha(idZadacha, callbackfunction){
}

render(){
           var output="";
}*/
