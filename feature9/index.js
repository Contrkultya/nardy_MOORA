
'use strict';


var _JSON$parse, _JSON$parse2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//Хранилище с огромным хуищем, обратиться можно, используя свойство "store"
const store = new Vuex.Store({
  state:{
       todos: [
       { "id": 1,"name": "Доска 1","hasChildren": true, "done": false, "removed": false},
       { "id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true, "done": false, "removed": false, "description": "Сделать removeKebab 2.0"},
       { "id": 3,"parent": 2,"name": "Задача 1.1.1", "done": false, "removed": false, "description": "Сделать removeAutism"},
       { "id": 4,"parent": 2,"name": "Задача 1.1.2", "done": true, "removed": false, "description": "Сделать vue"},
       { "id": 9,"parent": 2,"name": "Задача 1.1.3", "done": false, "removed": false, "description": "Заработать тут чекбох"},
       { "id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true, "done": false, "removed": false},
       { "id": 6,"parent": 5,"name": "Задача 1.2.1" , "done": false, "removed": false},
       { "id": 7,"parent": 5,"name": "Задача 1.2.2", "done": false, "removed": false },
       { "id": 8,"parent": 1,"name": "Список задач 1.3", "done": false, "removed": false, "description": "Радоваться жизни"},
       { "id": 10,"name": "Доска 2", "done": false, "removed": false}
       ],
       currentId: 0
      },
  getters: {
    getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id);
  },
   todosCount: state => {
    return state.todos.length;
  },
   currentId: state => {
            return state.currentId;
    },
        
      //прописать методы взаимодействия 
  },
  mutations: {
    setCurrentId(state, id){
        state.currentId = id;
      //прописать мутации и коммиты
    },
    newNote(state, note){
        state.todos.push(note);
    },
    delNote(state, id){
        state.todos.splice(state.todos.find(todo => todo.id === id), 1);
    }
  },
  actions: {
      //добавить асинхронности
  },
});
console.log(store.getters.getTodoById(0));
console.log(store.getters.todosCount);
console.log(store.getters.currentId);
store.commit('setCurrentId', 1);
console.log(store.getters.currentId);
/**store.getters.getTodoById(i)
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
var obj = function () {
    function obj(id, parent, name, hasChildren, removed, done, description) {
        _classCallCheck(this, obj);

        this._id = id;
        this._parent = parent;
        this._name = name;
        this._hasChildren = hasChildren;
        this._removed = removed;
        this._done = done;
        this._description = description;
    }

    _createClass(obj, [{
        key: 'read',

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
        value: function read(key) {
            if (this.checkRemove()) return undefined;else {
                if (key === undefined) {
                    return this._name + '; ' + this._parent + '; ' + this._id + '; ' + this._hasChildren + '; ' + this._done + '; \n' + this._description;
                } else if (key == 'id') {
                    return this._id;
                } else if (key == 'parent') {
                    return this._parent;
                } else if (key == 'name') {
                    return this._name;
                } else if (key == 'hasChildren') {
                    return this._hasChildren;
                } else if (key == 'removed') {
                    return this._removed;
                } else if (key == 'done') {
                    return this._done;
                } else if (key == 'description') {
                    return this._description;
                } else return null;
            }
        }
        /**
         * @method
         * @memberof obj
         * @name update
         * @description Получает обновлённый объект и изменяет ключи на ключи полученного объекта.
         * @param {object} updObj обновлённый объект;
         */

    }, {
        key: 'update',
        value: function update(updObj) {
            if (this.checkRemove()) {
                return undefined;
            } else Object.assign(this, updObj);
        }
        /**
         * @method
         * @memberof obj
         * @name delete
         * @description Помечает объект на удаление, после этого он выводиться в списках не будет.
         */

    }, {
        key: 'delete',
        value: function _delete() {
            this._removed = true;
        }
        /**
         * @method
         * @memberof obj
         * @name checkRemove
         * @description Метод, проверяющий помечен ли объект на удаление, или нет.
         * @return {bool};
         */

    }, {
        key: 'checkRemove',
        value: function checkRemove() {
            if (this._removed) return true;else return false;
        }
        /**
         * @method
         * @memberof obj
         * @name changeDone
         * @description Изменяет состояние завершённости объекта. (Завершён/Не завершён);
         */

    }, {
        key: 'changeDone',
        value: function changeDone() {
            if (this.checkRemove()) {
                return undefined;
            } else if (this._done) {
                this._done = false;
            } else this._done = true;
        }
    }, {
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(id) {
            this._id = id;
        }
    }, {
        key: 'parent',
        get: function get() {
            return this._parent;
        },
        set: function set(parentId) {
            this._parent = parentId;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(name) {
            this._name = name;
        }
    }, {
        key: 'hasChildren',
        get: function get() {
            return this._hasChildren;
        },
        set: function set(haveBool) {
            this._hasChildren = haveBool;
        }
    }, {
        key: 'removed',
        get: function get() {
            return this._removed;
        },
        set: function set(haveBool) {
            this._removed = haveBool;
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done;
        },
        set: function set(haveBool) {
            this._done = haveBool;
        }
    }, {
        key: 'description',
        get: function get() {
            return this._description;
        },
        set: function set(setDesc) {
            this._description = setDesc;
        }
    }]);

    return obj;
}();

function close(id){
    document.getElementById(id).innerHTML="";
}
var bankLogic = new Vue({
    data: {
        data: (_JSON$parse = JSON.parse('[{ "id": 1,"name": "Доска 1","hasChildren": true, "done": false, "removed": false},{"id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true, "done": false, "removed": false, "description": "Сделать removeKebab 2.0"},{ "id": 3,"parent": 2,"name": "Задача 1.1.1", "done": false, "removed": false, "description": "Сделать removeAutism"},{ "id": 4,"parent": 2,"name": "Задача 1.1.2", "done": true, "removed": false, "description": "Сделать vue"},{ "id": 9,"parent": 2,"name": "Задача 1.1.3", "done": false, "removed": false, "description": "Заработать тут чекбох"},{"id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true,"description":"Сыграть в нарды с Моором", "done": false, "removed": false},{ "id": 6,"parent": 5,"name": "Задача 1.2.1" , "done": false, "removed": false, "description":"Почему чванство?"},{ "id": 7,"parent": 5,"name": "Задача 1.2.2", "done": false, "removed": false, "description":"Помогите"},{"id": 8,"parent": 1,"name": "Список задач 1.3", "done": false, "removed": false, "description": "Радоваться жизни"},{"id": 10,"name": "Доска 2", "done": false, "removed": false}]'), _JSON$parse2 = _toArray(_JSON$parse), _JSON$parse),
        counter: 0,
        _currentId: 0,
    },
    methods: {
        counterUp: function counterUp() {
            return this.counter++;
        },
        counterReset: function counterReset() {
            this.counter = 0;
        },
        currentId: {
            get: function() {
                return this._currentId;
            },
            set: function(receivedId) {
                this._currentId = receivedId;
            }
        },
    },
})
var object;
/**
 * @function
 * @name objBuilder_file
 * @description Строит объект из полученного JSON'а.
 * @param {number} ind индекс объекта;
 * @param {json} data передаваемый в функцию JSON;
 * @param {number} setid хранит в себе введённый идентификатор;
 * @param {number} setparent хранит в себе введённое значение;
 * @param {string} setname хранит в себе введённое имя;
 * @param {bool} hasChildren хранит в себе информацию о наличии дочерних элементов;
 * @param {bool} setremoved хранит в себе информацию о наличии «удаления»;
 * @public
 */
function new_objBuilder_file(ind)
{
    object=[]
    var i = 1;
    var m = 1;
    for(i; i < store.getters.todosCount+1 ; i++)
    {
        if(store.getters.getTodoById(i).parent == ind)
        {
            var element=new Vue({
                data:{
                    setid: store.getters.getTodoById(i).id,
                    setparent: store.getters.getTodoById(i).parent,
                    setname: store.getters.getTodoById(i).name,
                    hasChildren: store.getters.getTodoById(i).hasChildren,
                    setremoved: store.getters.getTodoById(i).removed,
                    setdone: store.getters.getTodoById(i).done,
                    setDesc: store.getters.getTodoById(i).description,
                }
            });
            object[m]=element;
            m++
        }
    }
}
function add(ind)
{
    let newid=store.getters.todosCount+1;
    var style = prompt("Введите название нового элемента:");
        var element= [];
           let setid = newid;
            let setname= style;
            let setparent=ind;
            let hasChildren= 'false';
            let setremoved= 'false';
            let setdone='false';
            let setDesc= "New element";
            element= new obj(setid, setparent, setname, hasChildren, setremoved, setdone, setDesc);  
    store.commit('newNote', element);
    getChildren(new_objBuilder_file(ind));
}
/**
 * @function
 * @name load
 * @description «Функция-сразу» — выполняется, как только завершилась загрузка HTML-страницы.
 * Данная функция строит маркированный список из глобальной переменной data, добавляя кнопки удовлетворяющие различным условиям элементов;
 * Нажатия кнопок вызывают функции-цепочки, которые получают дальнейшие дочерние элементы, если они имеются;
 */
function load() {
    document.getElementById("boardList").innerHTML += "<ul>";
    var i = 1;
    console.log(store.getters.todosCount);
    console.log(store.getters.getTodoById(3))
    for (i; i < store.getters.todosCount+1; i++) {
        /** Выводит на страницу родительские элементы */
        if (store.getters.getTodoById(i).parent == undefined) {
            /** Добавляет кнопку изменения стиля */
            document.getElementById("boardList").innerHTML += "<div class='desks' style='height:auto;' id='" + store.getters.getTodoById(i).id + "d" + "'>" + store.getters.getTodoById(i).name + /** Списковый вывод имени */
            //Пока не трогать "<label><div class='greenCheck'><img src= 'content\\nar_yes.svg' onClick='doneChanger(" + bankLogic.data[i].id + ")'></div></label>" +/** Checkbox выполнения */
            //"<label><div class='redCheck'><img src= 'content\\nar_no.svg' onClick='deleteChanger(" + bankLogic.data[i].id + ")'></div></label>" + /** Checkbox удаления */
            "<button onClick='render(" + store.getters.getTodoById(i).id + ")'>Изменить стиль</button></div>"; /** Кнопка изменения стиля */
            /** Если иммеет дочерние элементы, добавляет кнопку получения элементов. */
            if (store.getters.getTodoById(i).hasChildren == true) {
                document.getElementById(store.getters.getTodoById(i).id + "d").innerHTML += "<button onClick='res(" + store.getters.getTodoById(i).id + ")'>Открыть</button><button onClick='closeList.close("+'"dot_' + store.getters.getTodoById(i).id +'"'+ ")'>Закрыть</button></button><div style='margin:0 auto;' id='" +"dot_"+ store.getters.getTodoById(i).id  + "'></div>";
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
function render(x) {
    var style = prompt("Введите стиль:");
    document.getElementById(x).setAttribute("style", style);
}
/**
 * Документация скоро будет~
 */
function res(id) {
    document.getElementById("dot_"+id).innerText = "Loading...";
    store.commit('setCurrentId', id);
    var ind = store.getters.currentId;
    if (store.getters.getTodoById(ind).parent == undefined) {
        if (document.getElementById(store.getters.currentId + "d").style.height == 'auto') {
            document.getElementById(store.getters.currentId + "d").style.height = 'auto';
            loadChildren(store.getters.currentId).then(getChildren);
        } else {
            document.getElementById(store.getters.currentId + "d").style.height = '0';
            document.getElementById("dot_"+store.getters.currentId).innerHTML = "";
            return;
        }
    } else {
        if (document.getElementById("p_" + store.getters.currentId).style.height == 'auto') {
            document.getElementById("p_" + store.getters.currentId).style.height = 'auto';
            loadChildren(store.getters.currentId).then(getChildren);
        } else {
            document.getElementById("p_" + store.getters.currentId).style.height = '0';
            document.getElementById("dot_"+store.getters.currentId).innerHTML = "";
            return;
        }
    }
}
function getChildren() {
    //document.getElementById("dot_"+object[0].setparent).innerHTML = "";
    setTimeout(function () {
        var meta = "dot_"+object[1].setparent;
        document.getElementById(meta).innerText = "";
        var i = 1;
        for (i; i < object.length; i++) {
            document.getElementById(meta).innerHTML += "<div class='tasks' id=" + "p_" +object[i].setid+ " style='height:auto;'>" + "<li id='" + object[i].setid + "'>" +
            "<span onClick='descriptionChanger(" + object[i].setid +")' >" + object[i].setname + "</span>" + /** Списковый вывод имени и щёлк*/
            "<label><div class='greenCheck'><img src='content\\nar_yes.svg' onClick='doneChanger(" + object[i].setid + ")'></div></label>" + /** Checkbox выполнения */
            "<label><div class='redCheck'><img src='content\\nar_no.svg' onClick='deleteChanger(" + object[i].setid + ")'></div></label>" + /** Checkbox удаления */
            "<button onClick='render(" + object[i].setid + ")'>Изменить стиль</button>" + "</li>" + /** Кнопка изменения стиля */
            "<div id='" + object[i].setid+ "description' class='descriptionLogic'ondblclick='descChanger.changeDescription("+object[i].setid+")' style='display: none;'>" + object[i].setDesc + "</div></div>"; /** Описание */
            var check=object[i].hasChildren;
            console.log(object[i].setid);
            if (check==true) {
                document.getElementById("p_" + object[i].setid).innerHTML += "<button onClick='res(" + object[i].setid + ")'>Открыть</button><button onClick='add("+object[i].setid+")'>Добавить</button><button onClick='closeList.close("+'"dot_' + object[i].setid +'"'+ ")'>Закрыть</button><div style='margin:0 auto;margin-bottom:30px;' id='" + ("dot_"+object[i].setid) + "'></div><hr>";
            }
        }
    }, 1000);
}
function loadChildren(id) {
    return new Promise(function (resolve, reject) {
        var i = id;
        for (i; i < store.getters.todosCount; i++) {
            if (store.getters.getTodoById(i).hasChildren == true) {
                resolve(new_objBuilder_file(store.getters.getTodoById(i).id));
                return;
            }
        }
    });
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
var colorChecker = new Vue({
    data: {
        counterArrays: 0,
        idArray: [],
        currentColor: [],
        colors: ["black", "green", "red"],
    },
    methods: {
        changerColor: function (id, whatColor) {
            var i = 0;
            for (i; i <= this.counterArrays; i++) {
                if (this.idArray[i] == id) {
                    if (this.currentColor[i] == whatColor) {
                        this.currentColor[i] = "black";
                        if (whatColor == "green") {
                            store.getters.getTodoById(id).done = false;
                        } else {
                            store.getters.getTodoById(id).removed = false;
                        }
                        return document.getElementById(id.toString()).setAttribute("style", "color:black");
                    } else if (this.currentColor[i] == "black") {
                        this.currentColor[i] = whatColor;
                        if (whatColor == "green") {
                            store.getters.getTodoById(id).done = true;
                        } else {
                           store.getters.getTodoById(id).removed = true;
                        }
                        return document.getElementById(id.toString()).setAttribute("style", "color: " + whatColor);
                    } else {
                        if (this.currentColor[i] == "green") {
                            store.getters.getTodoById(id).done = false;
                            store.getters.getTodoById(id).removed = true;
                            document.getElementById(id.toString()).setAttribute("style", "color: " + whatColor);
                        } else {
                            store.getters.getTodoById(id).done = true;
                            store.getters.getTodoById(id).removed = false;
                            document.getElementById(id.toString()).setAttribute("style", "color: " + whatColor);
                        }
                        return this.currentColor[i] = whatColor;
                    }
                } else if (i == this.counterArrays) {
                    this.idArray[this.counterArrays] = id;
                    this.currentColor[this.counterArrays] = whatColor;
                    this.counterArrays++;
                    if (whatColor == "green") {
                        store.getters.getTodoById(id).done = true;
                    } else {
                        store.getters.getTodoById(id).removed = true;
                    }
                    return document.getElementById(id.toString()).setAttribute("style", "color: " + whatColor);
                }
            }
        },
    },
})
/**
 * @function
 * @name doneChanger
 * @description Событие, когда кликаешь на зелёные чекбоксы.
 * @param {number} x Идентификатор объекта.
 */
function doneChanger(x) {
    colorChecker.changerColor(x, "green");
}

var closeList =new Vue({
    methods: {
        close:function(id){
            document.getElementById(id).innerHTML = "";
        }
    }
})

/**
 * @function
 * @name deleteChanger
 * @description Событие, когда кликаешь на красные чекбоксы.
 * @param {number} x Идентификатор объекта.
 */
function deleteChanger(x) {
    colorChecker.changerColor(x, "red");
}
var descChanger = {
    arrCounter: 0,
    openerArray: [],
    boolArray: [],
    descriptionLogic: function descriptionLogic(objectId) {
        let i = 0;
        while (i <= this.arrCounter) {
            if (this.openerArray[i] == objectId) {
                if (this.boolArray[i]) {
                    this.boolArray[i] = false;
                    return document.getElementById(objectId + 'description').style = "display: none";
                }
                else {
                    this.boolArray[i] = true;
                    return document.getElementById(objectId + 'description').style = "display: block";
                }
            }
            i++;
        }
        if (i > this.arrCounter) {
            this.openerArray[this.arrCounter] = objectId;
            this.boolArray[this.arrCounter] = true;
            this.arrCounter++;
            return document.getElementById(objectId + 'description').style = "display: block";
        }
    },
    changeDescription :function(id){
        var newDesc = prompt("Введите новое описание");
        store.getters.getTodoById(id).description = newDesc;
        var idDesc = id+"description";
        document.getElementById(idDesc).innerText = newDesc;
    }
};
function descriptionChanger(objectId){
    descChanger.descriptionLogic(objectId);
}
