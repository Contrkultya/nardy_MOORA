'use strict';

var _JSON$parse, _JSON$parse2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var bankLogic = {
    data: (_JSON$parse = JSON.parse('[{ "id": 1,"name": "Доска 1","hasChildren": true, "done": false, "removed": false},{"id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true, "done": false, "removed": false},{ "id": 3,"parent": 2,"name": "Задача 1.1.1", "done": false, "removed": false },{ "id": 4,"parent": 2,"name": "Задача 1.1.2", "done": false, "removed": false },{ "id": 10,"parent": 2,"name": "Задача 1.1.3", "done": false, "removed": false},{"id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true, "done": false, "removed": false},{ "id": 6,"parent": 5,"name": "Задача 1.2.1" , "done": false, "removed": false},{ "id": 7,"parent": 5,"name": "Задача 1.2.2", "done": false, "removed": false },{"id": 8,"parent": 1,"name": "Список задач 1.3", "done": false, "removed": false},{"id": 9,"name": "Доска 2", "done": false, "removed": false}]'), _JSON$parse2 = _toArray(_JSON$parse), _JSON$parse),
    counter: 0,
    _currentId: 0,
    counterUp: function counterUp() {
        return this.counter++;
    },
    counterReset: function counterReset() {
        this.counter = 0;
    },

    get currentId() {
        return this._currentId;
    },
    set currentId(receivedId) {
        this._currentId = receivedId;
    }
};
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
function objBuilder_file(ind) {
    bankLogic.counterReset();
    object = [];
    var i = 0;
    for (i; i < bankLogic.data.length; i++) {
        if (bankLogic.data[i].parent == ind) {
            var setid = bankLogic.data[i].id;
            var setparent = bankLogic.data[i].parent;
            var setname = bankLogic.data[i].name;
            var hasChildren = bankLogic.data[i].hasChildren;
            var setremoved = bankLogic.data[i].removed;
            var setdone = bankLogic.data[i].done;
            var setDesc = bankLogic.data[i].description;
            object[bankLogic.counterUp()] = new obj(setid, setparent, setname, hasChildren, setremoved, setdone, setDesc);
        }
    }
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
    var i = 0;
    for (i; i < bankLogic.data.length; i++) {
        /** Выводит на страницу родительские элементы */
        if (bankLogic.data[i].parent == undefined) {
            /** Добавляет кнопку изменения стиля */
            document.getElementById("boardList").innerHTML += "<div class='desks' style='height:auto;' id='" + bankLogic.data[i].id + "d" + "'>" + bankLogic.data[i].name + /** Списковый вывод имени */
            //Пока не трогать "<label><div class='greenCheck'><img src= 'content\\nar_yes.svg' onClick='doneChanger(" + bankLogic.data[i].id + ")'></div></label>" +/** Checkbox выполнения */
            //"<label><div class='redCheck'><img src= 'content\\nar_no.svg' onClick='deleteChanger(" + bankLogic.data[i].id + ")'></div></label>" + /** Checkbox удаления */
            "<button onClick='render(" + bankLogic.data[i].id + ")'>Изменить стиль</button></div>"; /** Кнопка изменения стиля */
            /** Если иммеет дочерние элементы, добавляет кнопку получения элементов. */
            if (bankLogic.data[i].hasChildren == true) {
                document.getElementById(bankLogic.data[i].id + "d").innerHTML += "<button onClick='res(" + bankLogic.data[i].id + ")'>Открыть</button><div style='margin:0 auto;' id='" + bankLogic.data[i].id + "_p_" + "'></div>";
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
    bankLogic.currentId = id;
    var ind = bankLogic.currentId - 1;
    if (bankLogic.data[ind].parent == undefined) {
        if (document.getElementById(bankLogic.currentId + "d").style.height == 'auto') {
            document.getElementById(bankLogic.currentId + "d").style.height = 'auto';
            document.getElementById(bankLogic.currentId + "_p_").innerHTML = "Загрузка...";
            loadChildren(bankLogic.currentId).then(getChildren);
        } else {
            document.getElementById(bankLogic.currentId + "d").style.height = '0';
            document.getElementById(bankLogic.currentId + "_p_").innerHTML = "";
            return;
        }
    } else {
        if (document.getElementById("p_" + bankLogic.currentId).style.height == 'auto') {
            document.getElementById("p_" + bankLogic.currentId).style.height = 'auto';
            document.getElementById(bankLogic.currentId + "_p_").innerHTML = "Загрузка...";
            loadChildren(bankLogic.currentId).then(getChildren);
        } else {
            document.getElementById("p_" + bankLogic.currentId).style.height = '0';
            document.getElementById(bankLogic.currentId + "_p_").innerHTML = "";
            return;
        }
    }
}
function getChildren() {
    setTimeout(function () {
        document.getElementById(bankLogic.currentId + "_p_").innerHTML = "";
        var meta = bankLogic.currentId + "_p_";
        var i = 0;
        for (i; i < object.length; i++) {
            document.getElementById(meta).innerHTML += "<div class='tasks' id=" + "p_" + object[i].id + " style='height:auto;'>" + "<li id='" + object[i].id + "'>" + "<span onClick='descChanger.descriptionLogic(" + meta + "," + object[i].id + ")'>" + object[i].name + "</span>" + /** Списковый вывод имени и щёлк*/
            "<label><div class='greenCheck'><img src='content\\nar_yes.svg' onClick='doneChanger(" + object[i].id + ")'></div></label>" + /** Checkbox выполнения */
            "<label><div class='redCheck'><img src='content\\nar_no.svg' onClick='deleteChanger(" + object[i].id + ")'></div></label>" + /** Checkbox удаления */
            "<button onClick='render(" + object[i].id + ")'>Изменить стиль</button>" + "</li>" + "</div>"; /** Кнопка изменения стиля */
            if (object[i].hasChildren == true) {
                document.getElementById("p_" + object[i].id).innerHTML += "<button onClick='res(" + object[i].id + ")'>Открыть</button><div style='margin:0 auto;margin-bottom:30px;' id='" + (object[i].id + "_p_") + "'></div><hr>";
            }
        }
    }, 1000);
}
function loadChildren(id) {
    return new Promise(function (resolve, reject) {
        var i = id - 1;
        for (i; i < bankLogic.data.length; i++) {
            if (bankLogic.data[i].hasChildren == true) {
                resolve(objBuilder_file(bankLogic.data[i].id));
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
var colorChecker = {
    counterArrays: 0,
    idArray: [String],
    currentColor: [String],
    colors: ["black", "green", "red"],
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
    changerColor: function changerColor(id, whatColor) {
        var i = 0;
        for (i; i <= this.counterArrays; i++) {
            if (this.idArray[i] == id) {
                if (this.currentColor[i] == whatColor) {
                    this.currentColor[i] = "black";
                    if (whatColor == "green") {
                        bankLogic.data[id].done = false;
                    } else {
                        bankLogic.data[id].removed = false;
                    }
                    return document.getElementById(id.toString()).setAttribute("style", "color:black");
                } else if (this.currentColor[i] == "black") {
                    this.currentColor[i] = whatColor;
                    if (whatColor == "green") {
                        bankLogic.data[id].done = true;
                    } else {
                        bankLogic.data[id].removed = true;
                    }
                    return document.getElementById(id.toString()).setAttribute("style", "color: " + whatColor);
                } else {
                    if (this.currentColor[i] == "green") {
                        bankLogic.data[id].done = false;
                        bankLogic.data[id].removed = true;
                        document.getElementById(id.toString()).setAttribute("style", "color: " + whatColor);
                    } else {
                        bankLogic.data[id].done = true;
                        bankLogic.data[id].removed = false;
                        document.getElementById(id.toString()).setAttribute("style", "color: " + whatColor);
                    }
                    return this.currentColor[i] = whatColor;
                }
            } else if (i == this.counterArrays) {
                this.idArray[this.counterArrays] = id;
                this.currentColor[this.counterArrays] = whatColor;
                this.counterArrays++;
                if (whatColor == "green") {
                    bankLogic.data[id].done = true;
                } else {
                    bankLogic.data[id].removed = true;
                }
                return document.getElementById(id.toString()).setAttribute("style", "color: " + whatColor);
            }
        }
    }
};
/**
 * @function
 * @name doneChanger
 * @description Событие, когда кликаешь на зелёные чекбоксы.
 * @param {number} x Идентификатор объекта.
 */
function doneChanger(x) {
    colorChecker.changerColor(x, "green");
}
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
    openerArray: [Boolean],
    descriptionLogic: function descriptionLogic(htmlId, objectId) {
        var docBlock = document.getElementById(htmlId).innerHTML;
    }
};