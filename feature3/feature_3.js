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

var data = '[{ "id": 1,"name": "Доска 1","hasChildren": true},{"id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true},{ "id": 3,"parent": 2,"name": "Задача 1.1.1" },{ "id": 4,"parent": 2,"name": "Задача 1.1.2" },{"id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true},{ "id": 6,"parent": 5,"name": "Задача 1.2.1" },{ "id": 7,"parent": 5,"name": "Задача 1.2.2" },{"id": 8,"parent": 1,"name": "Список задач 1.3"},{"id": 9,"name": "Доска 2"}]';
    