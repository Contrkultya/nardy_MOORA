# API
## obj Class
### Определение
Создаёт объекты со своими методами из вводимых элементов
### Конструктор
|||
|-|-|
| constructor(name, value, id) | инициализирует новый объект класса obj, передавая ему ключи: имя, значение, идентификатор элемента. |
### Методы
|Методы| Описание|
|-|-|
| read() | Выводит информацию объекта о всех 3 ключах (name, value, id). |
| readName() | Выводит ключ-имя объекта. |
| readValue() | Выводит ключ-значение объекта. |
| readID() | Выводит ключ-идентификатор объекта. |
| updateName() | Заменяет ключ-имя объекта. |
| updateValue() | Заменяет ключ-значение объекта. |
| updateID() | Заменяет ключ-идентификатор. |
### *Перменная number*
`number` - порядковый номер объекта, глобальная переменная-счётчик. Считает количество объектов в API.
## Функции API
### **printObj()**
Вовзращает обновлённый список объектов в виде строки.
> [Замечание]
> Учтите, что выводить строку следует в контейнер на HTML-странице.
```javascript
function printObj() {
    var output = "";
    for (i = 0; i < object.length; i++) {
        if (object[i].removed == false) output += ('№:' + (i + 1) + ": " + object[i].name + " <p></p>\n");
    }
    return output;
```
`output` — строковая переменная, вывод списка объектов.
### **objBuilder()**
Строит объект из полученных ключей.
`setname` - ключ-имя объекта.
`setvalue` - ключ-значение объекта.
`setid` - ключ-идентификатор объекта.
```javascript
function objBuilder(setname, setvalue, setid) {
    object[number] = new obj(setname, setvalue, setid);
}
```
### **removeKebab()**
Если объект с данным порядковым номером существует, то изменяет свойство объекта `removed` на `TRUE`, иначе отрабатывает исключение.
```javascript
function removeKebab(number) {
    try {
        object[number].removed = true;
    }
    catch (e) {
        alert("Outta range");
}
```
### **read()**
Если объект с данным порядковым номером существует, то считывает ключи этого объекта, иначе отрабатывает исключение.
*Также, подразумевается выбор возможности для считывания пользователем.*
```javascript
function read(number) {
    try {
        switch (document.objs.key.value) {
            case ("name"): { object[number].readName(); break; }
            case ("value"): { object[number].readValue(); break; }       
            case ("id"): { object[number].readID(); break; }
            case ("everything"): { object[number].read(); break; }
        }
    }
    catch (e) {
        alert("Outta range");
    }
}
```
### **upd()**
Обновляет данные объекта. *Также может отработать исключение, если переданный порядковый номер от пользователя выходит за количество существующих объектов. И аналогично подразумевается, что пользователь выбирает какой именно объект обновить.*
```javascript
function upd(number) {
    try {
        switch (document.objs.change_key.value) {
            case ("name"): { object[number].updateName(); break; }
            case ("value"): { object[number].updateValue(); break; }
            case ("id"): { object[number].updateID(); break; }
        }
    }
    catch (e) {
        alert("Outta range");
    }
}
```
## Дополнительные материалы
* [Классы](https://learn.javascript.ru/es-class)
* [Методы объектов](https://learn.javascript.ru/object-methods)
* [Поиск: getElement* и querySelector* и не только](https://learn.javascript.ru/searching-elements-dom)
