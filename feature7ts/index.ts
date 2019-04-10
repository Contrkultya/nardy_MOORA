interface Iobj{
    id: number;
    parent:number;
    name:string;
    hasChildren:boolean;
    removed:boolean;
    done:boolean;
    description:string;
    label:object;
}

/**
 * @class
 * @name obj
 * @description Класс obj — основная база для взаимодействия с объектами. Присутствует конструктор, методы чтения, обновления, удаления.
 * @property {method} read
 * @property {method} update 
 * @property {method} delete
 * @property {method} checkRemove
 * @property {method} changeDone
 * @extends
 * @author narDy_MOORA
 * @public
*/
class obj implements obj{
    /**
     * @constructor
     * @name constructor
     * @description Создаёт объект из полученных данных.
     * @param {number} id ключ-идентификатор элемента;
     * @param {number} parent ключ-идентификатор родителя; 
     * @param {string} name ключ-имя элемента;
     * @param {bool} hasChildren ключ-признак на наличие дочерних элементов;
     * @param {bool} removed ключ-признак удаления элемента;
     * @param {bool} done ключ-признак, указывает, выполнена ли задача или нет;
     * @param {string} description ключ-признак, хранит в себе описание задачи;
     */
    private _id:number;
    private _parent:number;
    private _name:string;
    private _hasChildren:boolean;
    private _removed:boolean;
    private _done:boolean;
    private _description:string;
    constructor(id:number, parent:number, name:string, hasChildren:boolean, removed:boolean, done:boolean, description:string) {
        this.id = id;
        this.parent = parent;
        this.name = name;
        this.hasChildren = hasChildren;
        this.removed = removed;
        this.done = done;
        this.description = description;
    } 
    get id():number {
        return this._id;
    }
    set id(id:number) {
        this.id = id;
    }

    get parent() {
        return this.parent;
    }
    set parent(parentId:number) {
        this.parent = parentId;
    }

    get name() {
        return this.name;
    }
    set name(name:string) {
        this.name = name;
    }

    get hasChildren() {
        return this.hasChildren;
    }
    set hasChildren(haveBool:boolean) {
        this.hasChildren = haveBool;
    }

    get removed() {
        return this.removed;
    }
    set removed(haveBool:boolean) {
        this.removed = haveBool;
    }

    get done() {
        return this.done;
    }
    set done(haveBool:boolean) {
        this.done = haveBool;
    }

    get description() {
        return this.description;
    }
    set description(setDesc:string) {
        this.description = setDesc;
    }
    /** 
     * @method 
     * @memberof obj
     * @name read
     * @description Производит чтение всех свойств элемента, если передан ключ, производит чтение определённого свойства объекта.
     * @param {undefined | string} key не содержит|содержит в себе имя ключа;
     * @returns {undefined | null | string} undefined — если объект помечен на удаление;
     * Если переданного ключа не существует, то возвращает null;
     * Если, передан без ключа, то строку, содержащую в себе ключи элемента;
    */
    read(key:string) {
        if (this.checkRemove())
            return undefined;
        else {
            if (key === undefined) {
                return `${this._name}; ${this._parent}; ${this._id}; ${this._hasChildren}; ${this._done}; \n${this._description}`;
            }
            else if (key == 'id') {
                return this._id;
            }
            else if (key == 'parent') {
                return this._parent;
            }
            else if (key == 'name') {
                return this._name;
            }
            else if (key == 'hasChildren') {
                return this._hasChildren;
            }
            else if(key == 'removed') {
                return this._removed;
            }
            else if(key == 'done') {
                return this._done;
            }
            else if(key == 'description') {
                return this._description;
            }
            else return null;
        }
    }
    /**
     * @method 
     * @memberof obj
     * @name update
     * @description Получает обновлённый объект и изменяет ключи на ключи полученного объекта.
     * @param {object} updObj обновлённый объект;
     */
    update(updObj:object):undefined {
        if (this.checkRemove()) {
            return undefined;
        }
        else Object.assign(this, updObj);
    }
    /**
     * @method 
     * @memberof obj
     * @name delete
     * @description Помечает объект на удаление, после этого он выводиться в списках не будет.
     */
    delete() {
        this._removed = true;
    }
    /**
     * @method 
     * @memberof obj
     * @name checkRemove
     * @description Метод, проверяющий помечен ли объект на удаление, или нет.
     * @return {bool};
     */
    checkRemove() {
        if (this._removed)
            return true;
        else return false;
    }
    /**
     * @method
     * @memberof obj
     * @name changeDone
     * @description Изменяет состояние завершённости объекта. (Завершён/Не завершён);
     */
    changeDone():boolean {
        if (this.checkRemove()) {
            return undefined;
        }
        else if (this._done)
        {
            this._done = false;
        }
        else this._done = true;
    }
}

/* NOTE: Открыть, когда ящик пандоры будет решён.
var bank = {
    objects: [],
    numberObjects() {
        var counter = 0;
        return function() {
            return ++counter;
        }
    },
    getLength() {
        return counter;
    },
    keys: [ 'id', 'parent', 'name', 'hasChildren', 'remove' ],
}
*/


/* 
 * @function
 * @name objBuilder_file
 * @description Строит объект из полученного JSON'а.
 * @param {json} data передаваемый в функцию JSON; 
 * @param {number} setid хранит в себе введённый идентификатор;
 * @param {number} setparent хранит в себе введённое значение;
 * @param {string} setname хранит в себе введённое имя;
 * @param {bool} hasChildren хранит в себе информацию о наличии дочерних элементов;
 * @param {bool} setremoved хранит в себе информацию о наличии «удаления»;
 * @public
 */
var object:object [];
function objBuilder_file(ind:number):any
{ 
    var m =0; 
    let i=0;
    for (i;i<Object.keys(data).length; i++) 
    { 
         if(data[i].parent==ind)
        {
            let setid = data[i].id;
            let setparent = data[i].parent;
            let setname = data[i].name;
            let hasChildren = data[i].hasChildren;
            let setremoved = data[i].removed;
            let setdone = data[i].done;
            let setDesc = data[i].description;
            object[m] = new obj(setid, setparent, setname, hasChildren, setremoved, setdone, setDesc);
            m++
        }
    }
}
/**
 * Демо-данные
 * @param {string} -> {json} data — хранение данных;
 */
var data:Iobj[] = JSON.parse('[{ "id": 1,"name": "Доска 1","hasChildren": true, "done": false, "removed": false},{"id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true, "done": false, "removed": false},{ "id": 3,"parent": 2,"name": "Задача 1.1.1", "done": false, "removed": false },{ "id": 4,"parent": 2,"name": "Задача 1.1.2", "done": false, "removed": false },{ "id": 10,"parent": 2,"name": "Задача 1.1.3", "done": false, "removed": false},{"id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true, "done": false, "removed": false},{ "id": 6,"parent": 5,"name": "Задача 1.2.1" , "done": false, "removed": false},{ "id": 7,"parent": 5,"name": "Задача 1.2.2", "done": false, "removed": false },{"id": 8,"parent": 1,"name": "Список задач 1.3", "done": false, "removed": false},{"id": 9,"name": "Доска 2", "done": false, "removed": false}]');
/**
 * @function
 * @name load
 * @description «Функция-сразу» — выполняется, как только завершилась загрузка HTML-страницы. 
 * Данная функция строит маркированный список из глобальной переменной data, добавляя кнопки удовлетворяющие различным условиям элементов;
 * Нажатия кнопок вызывают функции-цепочки, которые получают дальнейшие дочерние элементы, если они имеются;
 */
function load() {
    document.getElementById("boardList").innerHTML += "<ul>";
  
    for (let i=0;i < Object.keys(data).length; i++)
    {
        /** Выводит на страницу родительские элементы */
        if (data[i].parent == undefined) {
            /** Добавляет кнопку изменения стиля */
            document.getElementById("boardList").innerHTML += "<div class='desks' style='height:auto;' id='" + data[i].id+"d" + "'>" + data[i].name + /** Списковый вывод имени */
            "<label><div class='greenCheck'><input type='checkbox' onClick='doneChanger(" + data[i].id + ")'></div></label>" +/** Checkbox выполнения */
            "<label><div class='redCheck'><input type='checkbox' onClick='deleteChanger(" + data[i].id + ")'></div></label>" + /** Checkbox удаления */
            "<button onClick='render(" + data[i].id + ")'>Изменить стиль</button></div>"; /** Кнопка изменения стиля */
            /** Если иммеет дочерние элементы, добавляет кнопку получения элементов. */
            if (data[i].hasChildren == true) {
                document.getElementById(data[i].id+"d").innerHTML += "<button onClick='res("+data[i].id+")'>Открыть</button><div style='margin:0 auto;' id='"+data[i].id+"_p_"+"'></div>";
            }
        }
    }
}
/**
 * @function
 * @name render
 * @description Функция-управлятор — благодаря ей, пользователь может изменять стили определённого элемента в списке.
 * @param {number} x идентификатор эемента;
 */
function render(x:string) {
    let style:string;
    style = prompt("Введите стиль:");
    document.getElementById(x).setAttribute("style", style);
}

/**
 * Документация скоро будет~
 */   
 var id = 0;
function res(m:number) 
{
    id = m;
    let height=600;
    let ind =id-1;
    if(data[ind].parent==undefined) {
        if(document.getElementById(id+"d").style.height=='auto') {
            document.getElementById(id+"d").style.height ='auto';
            document.getElementById(id+"_p_").innerHTML = "Загрузка...";
            loadChildren(id).then(getChildren); 
        }
        else {
            document.getElementById(id+"d").style.height ='auto';
            document.getElementById(id+"_p_").innerHTML = "";
            return;
        }
    } 
    else {
        if(document.getElementById("p_"+m).style.height=='auto') {
            document.getElementById("p_"+m).style.height ='auto';
            document.getElementById(id+"_p_").innerHTML = "Загрузка...";
            loadChildren(id).then(getChildren);
        }
        else {
            document.getElementById("p_"+m).style.height ='auto';
            document.getElementById(id+"_p_").innerHTML = "";
            return;
        }
    }

}
function getChildren() {
    setTimeout(function(){
        document.getElementById(id+"_p_").innerHTML = "";
        let meta = id+"_p_";
        let i = 0;
        for(; i < data.length; i++) {
            document.getElementById(meta).innerHTML += "<div class='tasks' id="+"p_"+data[i].id+"style='height:auto;'>"+"<li id='" + (data[i].id) + "'>" +data[i].name+ /** Списковый вывод имени */
            "<label><div class='greenCheck'><input type='checkbox' onClick='doneChanger(" + data[i].id + ")'></div></label>" +/** Checkbox выполнения */
            "<label><div class='redCheck'><input type='checkbox' onClick='deleteChanger(" + data[i].id + ")'></div></label>" + /** Checkbox удаления */
            "<button onClick='render(" + data[i].id + ")'>Изменить стиль</button>" + "</li>"+"</div><hr>"; /** Кнопка изменения стиля */
            if(data[i].hasChildren == true) {
                document.getElementById("p_"+data[i].id).innerHTML+="<button onClick='res("+data[i].id+")'>Открыть</button><div style='margin:0 auto;margin-bottom:30px;' id='"+(data[i].id+"_p_")+"'></div>";
            }
        }
    }, 1000);
}
function loadChildren(id:number) {
    return new Promise(function(resolve, reject){
        let i = id - 1;
        for (i; i < Object.keys(data).length; i++) 
        {
            if (data[i].hasChildren == true) 
            {
                resolve(objBuilder_file(data[i].id)); 
                return;
            }
        }
    })
}
/**
 * @param {object} colorChecker
 * @description Надзиратель за цветом.
 * @param {number} counterArrays Счётчик массивов, связующее звено между массивом идентификаторов и массивом цветов.
 * @param {Array} idArray Числовой массив, хранит в себе идентификаторы.
 * @param {Array} currentColor Строковый массив, хранит в себе текущий цвет элемента, чей идентификатор находится на той же позиции в idArray.
 * @param {Array} colors Массив возможных цветов.
 * @property {method} masFinder
 * @property {method} changerColor
 * @protected
 * @public
 */
var colorChecker = {
    counterArrays: 0,
    idArray:[String],
    currentColor: [String],
    colors: [ "black", "green", "red"],
    /**
     * @method 
     * @memberof colorChecker
     * @name masFinder
     * @description Осуществляет поиск в массиве объектов. Возвращает номер объекта с совпадающим идентификатором;
     * @param {number} id Идентификатор элемента;
     * @returns {number} 
     */
    masFinder(id:string) {
        let i = 0;
        for (; i < Object.keys(data).length; i++) {
            if (data[i].id == parseInt(id)) {
                return i;
            }
        } 

    },
    /**
     * @method
     * @memberof colorChecker
     * @name changerColor
     * @description Основная логика надзирателя за цветом тут.
     * Проверяет на наличие в массивах переданный идентификатор.
     * Проверяет на совпадение с переданным цветом.
     * Проблема: тыкать сразу на два чекбокса в одном элементе — плохо.
     * @param {number} id Идентификатор элемента, у которого проверяется цвет . 
     * @param {string} whatColor Цвет из какого чекбокса был вызван.
     * @returns {string} Строку с применением определённого стиля.
     */
    changerColor(id:string, whatColor:string) {
        let i = 0, findedI = this.masFinder(id);
        for (; i <= this.counterArrays; i++) {
            if (this.idArray[i] == id) {
                if (this.currentColor[i] == whatColor) {
                    this.currentColor[i] = "white";
                    if (whatColor == "green") {
                        data[findedI].done = false;
                    }
                    else {
                        data[findedI].removed = false;
                    }
                    return document.getElementById(id).setAttribute("style", "color:white");
                }
                else {
                    this.currentColor[i] = whatColor;
                    if (whatColor == "green") {
                        data[findedI].done = true;
                    }
                    else {
                        data[findedI].removed = true;
                    }
                    return document.getElementById(id).setAttribute("style ","color:white") + whatColor;
                }
            }
            else if (i == this.counterArrays) {
                this.idArray[this.counterArrays] = id;
                this.currentColor[this.counterArrays] = whatColor;
                this.counterArrays++;
                if (whatColor == "green") {
                    data[findedI].done = true;
                }
                else {
                    data[findedI].removed = true;
                }
                return document.getElementById(id).setAttribute("color:","") + whatColor; //whatafuk????????????????????????????????????????????
            }
        }
    },
}
/**
 * @function
 * @name doneChanger
 * @description Событие, когда кликаешь на зелёные чекбоксы.
 * @param {number} x Идентификатор объекта.
 */
function doneChanger(x:string) {
    colorChecker.changerColor(x, "green");
}
/**
 * @function
 * @name deleteChanger
 * @description Событие, когда кликаешь на красные чекбоксы.
 * @param {number} x Идентификатор объекта.
 */
function deleteChanger(x:string) {
    colorChecker.changerColor(x, "red");
}