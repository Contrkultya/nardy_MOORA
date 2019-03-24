/**
 * @class
 * @name obj
 * @description Класс obj — основная база для взаимодействия с объектами. Присутствует конструктор, методы чтения, обновления, удаления.
 * @property {method} read
 * @property {method} update 
 * @property {method} delete
 * @extends
 * @author narDy_MOORA
 * @public
*/
class obj {
    /**
     * @constructor
     * @name constructor
     * @description Создаёт объект из полученных данных.
     * @param {number} id — ключ-идентификатор элемента;
     * @param {number} parent — ключ-идентификатор родителя; 
     * @param {string} name — ключ-имя элемента;
     * @param {bool} hasChildren — ключ-признак на наличие дочерних элементов;
     * @param {bool} removed — ключ-признак удаления элемента;
     * @param {bool} done — ключ-признак, указывает, выполнена ли задача или нет;
     * @param {string} description — ключ-признак, хранит в себе описание задачи;
     */
    constructor(id, parent, name, hasChildren, removed, done, description) {
        this._id = id;
        this._parent = parent;
        this._name = name;
        this._hasChildren = hasChildren;
        this._removed = removed;
        this._done = done;
        this._description = description;
    }
    
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get parent() {
        return this._parent;
    }
    set parent(parentId) {
        this._parent = parentId;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get hasChildren() {
        return this._hasChildren;
    }
    set hasChildren(haveBool) {
        this._hasChildren = haveBool;
    }

    get removed() {
        return this._removed;
    }
    set removed(haveBool) {
        this._removed = haveBool;
    }

    get done() {
        return this._done;
    }
    set done(haveBool) {
        this._done = haveBool;
    }

    get description() {
        return this._description;
    }
    set description(setDesc) {
        this._description = setDesc;
    }
    /** 
     * @method 
     * @memberof obj
     * @name read
     * @description Производит чтение всех свойств элемента, если передан ключ, производит чтение определённого свойства объекта.
     * @param {undefined | string} key — не содержит|содержит в себе имя ключа;
     * @returns {undefined | null | string} undefined — если объект помечен на удаление;
     * Если переданного ключа не существует, то возвращает null;
     * Если, передан без ключа, то строку, содержащую в себе ключи элемента;
    */
    read(key) {
        if (this.checkRemove())
            return undefined;
        else {
            if (key === undefined) {
                return `${this._name}; ${this._parent}; ${this._id}; ${this._hasChildren};`;
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
     * @param {object} updObj — обновлённый объект;
     */
    update(updObj) {
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
    changeDone() {
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
/**
 * @description Глобальные переменные для вывода.
 * @param {array} object — массив объектов;
 * @param {array} keys — массив ключей;
 * @public
 */
var object = [];
var numberObjects = 0;
var keys = [ 'id', 'parent', 'name', 'hasChildren', 'remove' ];

/* NOTE: Открыть, когда ящик пандоры будет решён.
var bank = {
    objects: [],
    numberObjects() {
        var counter = 0;
        return function() {
            return ++counter;
        }
    },
    getLenght() {
        return counter;
    },
    keys: [ 'id', 'parent', 'name', 'hasChildren', 'remove' ],
}
*/


/**
 * @function
 * @name objBuilder_file
 * @description Строит объект из полученного JSON'а.
 * @param {json} data — передаваемый в функцию JSON; 
 * @param {number} setid — хранит в себе введённый идентификатор;
 * @param {number} setparent — хранит в себе введённое значение;
 * @param {string} setname — хранит в себе введённое имя;
 * @param {bool} hasChildren — хранит в себе информацию о наличии дочерних элементов;
 * @param {bool} setremoved — хранит в себе информацию о наличии «удаления»;
 * @public
 */
function objBuilder_file(data) {
    let i = 0;
    for (;i < data.length; i++) {
        let setid = data[i].id;
        let setparent = data[i].parent;
        let setname = data[i].name;
        let hasChildren = data[i].hasChildren;
        let setremoved = data[i].removed;
        object[numberObjects] = new obj(setid, setparent, setname, hasChildren, setremoved);
        numberObjects++;
    }
}
/**
 * Демо-данные
 * @param {string} -> {json} data — хранение данных;
 */
var data = '[{ "id": 1,"name": "Доска 1","hasChildren": true},{"id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true},{ "id": 3,"parent": 2,"name": "Задача 1.1.1" },{ "id": 4,"parent": 2,"name": "Задача 1.1.2" },{"id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true},{ "id": 6,"parent": 5,"name": "Задача 1.2.1" },{ "id": 7,"parent": 5,"name": "Задача 1.2.2" },{"id": 8,"parent": 1,"name": "Список задач 1.3"},{"id": 9,"name": "Доска 2"}]';
data = JSON.parse(data);
/**
 * @function
 * @name load
 * @description «Функция-сразу» — выполняется, как только завершилась загрузка HTML-страницы. 
 * Данная функция строит маркированный список из глобальной переменной data, добавляя кнопки удовлетворяющие различным условиям элементов;
 * Нажатия кнопок вызывают функции-цепочки, которые получают дальнейшие дочерние элементы, если они имеются;
 */
function load() {
    document.getElementById("result").innerHTML += "<ul>";
    let i = 0;
    for (;i < data.length; i++)
    {
        /** Выводит на страницу родительские элементы */
        if (data[i].parent == undefined) {
            /** Добавляет кнопку изменения стиля */
            document.getElementById("result").innerHTML += "<li id='" + (data[i].id+"li") + "'>" + data[i].name + " <button onClick=render('" + (data[i].id+"li") + "')>Изменить стиль</button></li>";
            /** Если иммеет дочерние элементы, добавляет кнопку получения элементов. */
            if (data[i].hasChildren == true) {
                document.getElementById("result").innerHTML += "<button onClick=res("+i+")>Открыть</button><ul><div id='"+i+"'></ul>";
            }
        }
    }
}

//Закомменчено, тк "реализованы" promis'ы, но мы не показывали вам callback'и.
/**
 * @function 
 * @name res
 * @description Функция-рендер — выгружает результаты в html.
 * Вызывается в функции load(); Начинает вызывать цепочку колбеков-загрузчиков дочерних элементов;
 * @param {number} m — хранит в себе идентификатор элемента, у которого была вызвана эта функция; 
 *
 function res(m) {
    /** Возможность разворачивания списка; *
    if(document.getElementById(m).innerHTML == "") {
        document.getElementById(m).innerHTML = "Загрузка...";
        id = m;
        getChildren(loadChildren);
    }
    /** Возможность сворачивания списка; *
    else if(document.getElementById(m).innerHTML != "") {
        document.getElementById(m).innerHTML = "";
    }
}
/**
 * @function
 * @name getChildren
 * @description Функция-колбек — осуществляет подгрузку с «сервера» дальнейшего списка элементов;
 * С задержкой в секунду, ответ от сервера, получает в цикле дочерние элементы;
 * Также, есть возможность с помощью функции render() изменять стиль элемента;
 *
function getChildren(callback) {
    setTimeout(function(){
        callback(id);   
        document.getElementById(id).innerHTML = "";
        for(i = 0; i < mas.length; i++)
        { 
            document.getElementById(id).innerHTML += "<li id='" + (mas[i].id+"li") + "'>" + mas[i].name + " <button onClick=render('" + mas[i].id + "li" + "')>Изменить стиль</button>" + "</li>";
            if(mas[i].hasChildren == true)
            {
                document.getElementById(id).innerHTML+="<button onClick=res("+(mas[i].id-1)+")>Открыть</button><ul><div id='"+(mas[i].id-1)+"'></ul>";
            }
        }
    }, 1000);
    
}
/**
 * @function
 * @name loadChildren
 * @description Функция-колбек — если элемент имеет дочерние элементы, то вызывает функцию modelBuilder(), передавая в неё идентификатор текущего элемента в цикле;
 * @param {*} id — идентификатор объекта;
 *
function loadChildren(id) {
    for (i = id; i < data.length; i++) {
        if (data[i].hasChildren == true) {
            modelBuilder(data[i].id);
        }
    }
}



/**
 * @function
 * @name modelBuilder
 * @description Функция-строитель — получает идентификатор и выводит детей (погулять;).
 * @param {number} id — полученный идентификатор объекта; 
 * @param {array} mas — массив элементов;
 * @param {number} j — переменная-счётчик количества элементов в массиве(mas), по ней добавляются элементы в сам массив;
 */
function modelBuilder(id) {
    mas = [];
    j = 0;
    i = id;
    for (; i < data.length; i++) {
        if (data[i].parent == id) {
            mas[j] = data[i];
            j++;
        }
    }
}
/**
 * @function
 * @name render
 * @description Функция-управлятор — благодаря ей, пользователь может изменять стили определённого элемента в списке.
 * @param {number} x — идентификатор элемента;
 * @param {string} stl — переменная изменяющая стиль;
 */
function render(x) {
    stl = prompt("Введите стиль:");
    document.getElementById(x).style = stl;
}

/**
 * Документация скоро будет~
 */

function res(m) {
    if(document.getElementById(m).innerHTML == "") {
        document.getElementById(m).innerHTML = "Загрузка...";
        id = m;
        loadChildren(id).then(getChildren);
    }
    else if(document.getElementById(m).innerHTML != "") {
        document.getElementById(m).innerHTML = "";
    }
}
function getChildren() {
    setTimeout(function(){
        document.getElementById(id).innerHTML = "";
        i = 0;
        for(; i < mas.length; i++)
        { 
            document.getElementById(id).innerHTML += "<li id='" + (mas[i].id+"li") + "'>" + mas[i].name + " <button onClick=render('" + mas[i].id + "li" + "')>Изменить стиль</button>" + "</li>";
            if(mas[i].hasChildren == true)
            {
                document.getElementById(id).innerHTML+="<button onClick=res("+(mas[i].id-1)+")>Открыть</button><ul><div id='"+(mas[i].id-1)+"'></ul>";
            }
        }
    }, 1000);
    
}
function loadChildren(id) {
    return new Promise(function(resolve, reject){
        i = id;
        for (; i < data.length; i++) {
            if (data[i].hasChildren == true) {
                resolve(modelBuilder(data[i].id));
            }
        }
    })
}