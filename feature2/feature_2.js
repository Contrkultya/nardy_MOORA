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
        //this.value = value;
        this.id = id;
        if (parent === undefined)
            this.parent = false;
        else this.parent = parent;
        this.name = name;
        if (hasChildren === undefined)
            this.hasChildren = false;
        else this.hasChildren = true;
        if (removed === undefined)
            this.removed = false;
        else this.removed = true;
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
object[0] = new obj(-3, false, "Timoxa");
object[1] = new obj(-2, false, "Velikiy lider");
object[2] = new obj(-1, false, "Iiiiiiigor");
object[3] = new obj(0, false, "GitLer");
*/
function hi() {
    var data = '[{ "id": 1,"name": "Доска 1","hasChildren": true},{"id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true},{ "id": 3,"parent": 2,"name": "Задача 1.1.1" },{ "id": 4,"parent": 2,"name": "Задача 1.1.2" },{"id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true},{ "id": 6,"parent": 5,"name": "Задача 1.2.1" },{ "id": 7,"parent": 5,"name": "Задача 1.2.2" },{"id": 8,"parent": 1,"name": "Список задач 1.3"},{"id": 9,"name": "Доска 2"}]';
    data = JSON.parse(data);
    console.log(data);
    console.log(data.length);
    objBuilder_file(data);
    console.log(object[0].id)
}
function objBuilder_file(data) {
    for (let i = 0; i < data.length; i++) {
        let setid = data[i].id;
        let setparent = data[i].parent;
        let setname = data[i].name;
        let hasChildren = data[i].hasChildren;
        let setremoved = data[i].removed;
        object[number] = new obj(setid, setparent, setname, hasChildren, setremoved);
        console.log(object[number]);
        number++;
        printObj_file();
    }
}

var earlierHaveChild = false;
function printObj_file() {
    var output = 'nothing';
    for (let i = 0; i < object.length; i++) {
        if (object[i].removed == false) {
            if (object[i].parent == false && object[i].id == 1) // Вход первого элемента без родителей
                output += '<ul><li>';
            else if (object[i].parent == false) // Вход элемента, без родителей, если в центре списка
                output += '</li><ul><li>';
            else if (object[i].parent == false && hasChildren == false) //Вход если он последний
                output += '</li><li>' + '#' + (i+1) + ':' + object[i].name + '</li></ul>';
            else if (object[i].hasChildren == true) { //Вход элемента с родителем и детьми
                if (earlierHaveChild) { //Я уже раньше имел детей (чтобы отследить после первого вхождения с детьми, и закрыть их открытые теги)
                    earlierHaveChild = false;
                    output += '</ul></li><ul><li>' + '#' + (i+1) + ':' + object[i].name;
                }
                else { // А я не имел, это моё первое вхождение, понаоткрываю вам многа тегов
                    earlierHaveChild = true; 
                    output += '<ul><li>' + '#' + (i+1) + ':' + object[i].name + '<ul>';
                } 
            }
            else output += '<li>#' + (i+1) + ':' + object[i].name + '</li>'; // А я child
                    
        }
    }
    document.getElementById('cO_file').innerHTML = output;
}


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

