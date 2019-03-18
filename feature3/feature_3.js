/*
        * Класс obj — основная база для взаимодействия с объектами. Присутствует конструктор, методы чтения, обновления, удаления.
    * @constructor:
    * Создаёт объект из полученных данных:
        * @param {string|number} id — ключ-идентификатор элемента;
        * @param {string|number} parent — ключ-идентификатор родителя; 
        * @param {string} name — ключ-имя элемента;
        * @param {bool} hasChildren — ключ-признак на наличие дочерних элементов;
        * @param {bool} removed — ключ-признак удаления элемента;
*/
class obj {
    constructor(id, parent, name, hasChildren, removed) {
        this.id = id;
        this.parent = parent;
        this.name = name;
        this.hasChildren = hasChildren;
        this.removed = removed;
    }
    /*
            * Метод, производящий чтение элемента.
        * @param {string} outism — получает в себя ключи элемента, если он не удалён;
    */
    read() {
        var outism = "";
        if (this.removed == true)
            return undefined;
        else 
            return outism += this.name + ' ' + this.parent + ' ' + this.id + ' ' + this.hasChildren;

    }
    // * Метод, производящий чтение конкретно переданного ключа элемента.
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
    // * Метод, который получает обновлённый объект и изменяет ключи на ключи полученного объекта.
    update(updObj){
        for (let i = 0; i < 5; i++) {
            this.keys[i] = updObj.keys[i];
        }
    }
    // * Метод, который помечает на удаление(ниже будет использоваться — «удаляет») элемент. Выводиться в списках не будет.
    delete() {
        this.removed = true;
    }
}
/**
        * Глобальные переменные для вывода.
    * @global {number} number — число элементов;
    * @global {array} object — массив объектов;
    * @global {array} keys — массив ключей;
*/
var number = 0;
var object = [];
var keys = [ 'id', 'parent', 'name', 'hasChildren', 'remove' ];
/*
        * Функция, строящая объект.
    * @param {json} data — передаваемый в функцию JSON; 
    * @param {number|string} setid — хранит в себе введённый идентификатор;
    * @param {number|string} setparent — хранит в себе введённое значение;
    * @param {string} setname — хранит в себе введённое имя;
    * @param {bool} hasChildren — хранит в себе информацию о наличии дочерних элементов;
    * @param {bool} setremoved — хранит в себе информацию о наличии «удаления»;
    * @global {number} number — переменная-счётчик количества объектов;
*/
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
/*
        * Демо-данные
    * @global {string} -> {json} data — хранение данных;
*/
var data = '[{ "id": 1,"name": "Доска 1","hasChildren": true},{"id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true},{ "id": 3,"parent": 2,"name": "Задача 1.1.1" },{ "id": 4,"parent": 2,"name": "Задача 1.1.2" },{"id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true},{ "id": 6,"parent": 5,"name": "Задача 1.2.1" },{ "id": 7,"parent": 5,"name": "Задача 1.2.2" },{"id": 8,"parent": 1,"name": "Список задач 1.3"},{"id": 9,"name": "Доска 2"}]';
data = JSON.parse(data);
/*
        * «Функция-сразу» — выполняется, как только завершилась загрузка HTML-страницы.
    * Данная функция строит маркированный список из глобальной переменной data, добавляя кнопки удовлетворяющие различным условиям элементов;
    * Нажатия кнопок вызывают функции-цепочки, которые получают дальнейшие дочерние элементы, если они имеются;
*/
function load() {
    document.getElementById("result").innerHTML += "<ul>";
    for (i = 0; i < data.length; i++)
    {
        if (data[i].parent == undefined) {
            document.getElementById("result").innerHTML += "<li id='" + (data[i].id+"li") + "'>" + data[i].name + " <button onClick=render('" + (data[i].id+"li") + "')>Изменить стиль</button></li>";
            if (data[i].hasChildren == true) {
                document.getElementById("result").innerHTML += "<button onClick=res("+i+")>Открыть</button><ul><div id='"+i+"'></ul>";
            }
        }
    }
}
/*
        * Функция-рендер — выгружает результаты в html.
    * @param {number} m — хранит в себе идентификатор элемента, у которого была вызвана эта функция; 
    * Вызывается в функции load();
    * Начинает вызывать цепочку колбеков-загрузчиков дочерних элементов;
*/
 function res(m) {
    //Возможность разворачивания списка;
    if(document.getElementById(m).innerHTML == "") {
        document.getElementById(m).innerHTML = "Загрузка...";
        id = m;
        getChildren(loadChildren);
    }
    //Возможность сворачивания списка;
    else if(document.getElementById(m).innerHTML != "") {
        document.getElementById(m).innerHTML = "";
    }
}
/*
        * Функция-колбек — осуществляет подгрузку с «сервера» дальнейшего списка элементов;
    * С задержкой в секунду, ответ от сервера, получает в цикле дочерние элементы;
    * Также, есть возможность с помощью функции render() изменять стиль элемента;
*/
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
/*
    * Функция-колбек — если элемент имеет дочерние элементы, то вызывает функцию modelBuilder(), передавая в неё идентификатор текущего элемента в цикле;
*/
function loadChildren(id, callback) {
    for (i = id; i < data.length; i++) {
        if (data[i].hasChildren == true) {
            modelBuilder(data[i].id);
        }
    }
}
/*
        * Функция-строитель — получает идентификатор и выводит детей.
    * @param {array} mas — массив элементов;
    * @param {number} j — переменная-счётчик количества элементов в массиве(mas), по ней добавляются элементы в сам массив;
*/
function modelBuilder(id) {
    mas = [];
    j = 0;
    for (i = id; i < data.length; i++) {
        if (data[i].parent == id) {
            mas[j] = data[i];
            j++;
        }
    }
}
/*
        * Функция-управлятор — благодаря ей, пользователь может изменять стили определённого элемента в списке.
    * @param {string} stl — переменная изменяющая стиль;
*/
function render(x) {
    stl = prompt("Вводите стиль:");
    document.getElementById(x).style = stl;
}
