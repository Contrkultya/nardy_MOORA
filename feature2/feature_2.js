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
    constructor(name, value, id) {
        this.name = name;
        this.value = value;
        this.id = id;
        this.parent;
        this.hasChildren;
        this.removed = false;
    }
    /*
            * Метод, производящий чтение этого файла.
        * @param {string} outism — хранит в себе информацию о ключах файла: name; value; id;
        * Причём, не считывает остальные методы;
        * Выводит информацию о всех 3 ключах в «index.html» (33 строка);
    */
    read() {
        var outism = "";
        outism += (this.name) + " ";
        outism += (this.value) + " ";
        outism += (this.id) + " ";
        document.getElementById('outInfo').value = outism;

    };
    // 3 метода ниже выводят информацию в «index.html» (33 строка);
    /*
        * Метод, отдельно выводящий имя;
    */
    readName() {
        document.getElementById('outInfo').value = this.name;
    };
    /*
        * Метод, отдельно выводящий значение;
    */
    readValue() {
        document.getElementById('outInfo').value = this.value;
    };
    /*
        * Метод, отдельно выводящий идентификатор;
    */
    readID() {
        document.getElementById('outInfo').value = this.id;
    };
    // Методы ниже считывают из поля <input type="text"> информацию по нажатию кнопки в «index.html» (43,45 строки);
    /*
        * Метод обновляющий @param {string} name;
    */
    updateName() {
        this.name = document.getElementById('chng_val').value;
    };
    /*
        * Метод обновляющий @param {string} value;
    */
    updateValue() {
        this.value = document.getElementById('chng_val').value;
    };
    /*
        * Метод обновляющий @param {string} id;
    */
    updateID() {
        this.id = document.getElementById('chng_val').value;
    };
}
/*
        * Глобальные переменные для вывода.
    @global {number} number — число элементов;
    @global {array} object — массив объектов;
*/
var number = 0;
var object = [];
/*
        * Функция, которая выводит полученные объекты. Также, используется для обновления списка объектов.
    * @param {string} output — хранит в себе итоговый вывод;
    * Этот вывод будет напечатан в «index.html» (17 строка);
*/
function printObj() {
    var output = "";
    for (i = 0; i < object.length; i++) {
        if (object[i].removed == false) output += ('№:' + (i + 1) + ": " + object[i].name + " <p></p>\n");
    }
    document.getElementById('createdObjects').innerHTML = output;
}
/*
        * Функция, которая строит объект.
    * Получает данные из <input type="text"> по нажатию кнопки в «index.html» (12-15 строки);
    * @param {string} setname — хранит в себе введённое имя;
    * @param {string} setvalue — хранит в себе введённое значение;
    * @param {string} setid — хранит в себе введённый идентификатор;
    * @global {number} number — переменная счётчик, увеличивается после нажатия кнопки;
*/
function objBuilder() {
    var setname = document.getElementById('name').value;
    var setvalue = document.getElementById('value').value;
    var setid = document.getElementById('ID').value;
    object[number] = new obj(setname, setvalue, setid);
    number++;
    // Вывод объекта.
    printObj();
}
/*
        * Функция, которая изменяет у объекта свойство «removed». Получает порядковый номер объекта от пользователя из «index.html» (22 строка).
    * @param {number} num — хранит порядковый номер объекта;
    * Вызывается пользователем из «index.html» по нажатию кнопки (21 строка);
    * Изменяет у объекта с таким порядковым номером свойство «removed» на «TRUE»;
    * Если порядкового номера, который ввёл пользователь, не существует, то обрабатывается исключение;
    * После этого вызывается функция printObj(), которая обновляет количество объектов;
*/
function removeKebab() {
    var num = (document.getElementById('del_number').value - 1);
    try {
        object[num].removed = true;
    }
    catch (e) {
        alert("Outta range");
    }
    // Обновление списка объектов.
    printObj();
}
/*
        * Функция, производящая чтение объекта. Получает порядковый номер объекта от пользователя из «index.html» (32 строка).
    * @param {number} num — хранит порядковый номер объекта;
    * Вызывается пользователем из «index.html» по нажатию кнопки (34 строка);
    * Получает информацию 4 типов:
        * Ключ-имя объекта, используя метод класса obj: readName();
        * Ключ-значение объекта, используя метод класса obj: readValue();
        * Ключ-идентификатор объекта, используя метод класса obj: readID();
        * Все вышеперечисленные ключи, используя метод класса obj: read();
    * Вывод полученной информации осуществляется в «index.html» (33 строка);
    * Если порядкового номера, который ввёл пользователь, не существует, то обрабатывается исключение;
*/
function read() {
    var num = (document.getElementById('info_number').value - 1);
    try {
        switch (document.objs.key.value) {
            case ("name"): { object[num].readName(); break; }
            case ("value"): { object[num].readValue(); break; }       
            case ("id"): { object[num].readID(); break; }
            case ("everything"): { object[num].read(); break; }
        }
    }
    catch (e) {
        alert("Outta range");
    }
}
/*
        * Функция, обновляющая значения ключей объекта, порядковый номер которого получает от пользователя из «index.html» (44 строка).
    * @param {number} num — хранит порядковый номер объекта;
    * Вызывается пользователем из «index.html» по нажатию кнопки (45 строка);
    * Перезаписывает информацию 3 типов:
        * Ключ-имя объекта, используя метод класса obj: updateName();
        * Ключ-значение объекта, используя метод класса obj: updateValue();
        * Ключ-идентификатор объекта, используя метод класса obj: udateID();
    * Если порядкового номера, который ввёл пользователь, не существует, то обрабатывается исключение;
*/
function upd() {
    var num = (document.getElementById('change_number').value - 1);
    try {
        switch (document.objs.change_key.value) {
            case ("name"): { object[num].updateName(); break; }
            case ("value"): { object[num].updateValue(); break; }
            case ("id"): { object[num].updateID(); break; }
        }
    }
    catch (e) {
        alert("Outta range");
    }
    // Обновление списка объектов.
    printObj();
}
