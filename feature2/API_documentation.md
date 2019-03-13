# API

## obj Class

### Определение
Создаёт объекты со своими методами из вводимых элементов
### Конструктор
|||
|-|-|
| constructor(name, value, id) | инициализирует новый объект [класса](https://learn.javascript.ru/es-class) obj, передавая ему ключи: имя, значение и идентификатор элемента. |
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

## Глобальные переменные
* `number` - порядковый номер объекта, переменная-счётчик. Считает количество объектов в API.
* `object` - массив объектов.

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
* `output` — строковая переменная, вывод списка объектов.
### **objBuilder()**
Создаёт объект из полученных ключей и добавляет его в массив объектов.
```javascript
function objBuilder(setname, setvalue, setid) {
    object[number] = new obj(setname, setvalue, setid);
    number++;
}
```
* `setname` - ключ-имя объекта.
* `setvalue` - ключ-значение объекта.
* `setid` - ключ-идентификатор объекта.
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
Если объект с данным порядковым номером существует, то считывает ключи этого объекта, иначе отрабатывает исключение. Также, подразумевается выбор возможности для считывания пользователем.
#### Пример кода
```javascript
function read() {
    let number = (document.getElementById('info_number').value - 1);
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
#####  Пример разметки
```html
<form name="objs">
    <select name="key">
        <option value="name">Получить имя</option>
        <option value="value">Получить значение</option>
        <option value="id">Получить идентификатор</option>
        <option value="everything">Прочитать всё</option>
    </select> 
    <input type="number" id="info_number" min="1"><p></p>
    <input type="text" readonly id="outInfo"><p></p>
    <input type="button" value="Получить информацию" onclick="read()">
</form>
```
### **upd()**
Обновляет данные объекта. Также может отработать исключение, если переданный порядковый номер от пользователя выходит за количественные рамки существующих объектов. И, аналогично, подразумевается, что пользователь выбирает какой именно объект обновить.
#### Пример кода
```javascript
function upd() {
    let number = (document.getElementById('change_number').value - 1);
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
##### Пример разметки
```html
<form name="objs">  
    Изменить значение:
    <select name="change_key">
        <option value="name">Ключа-имени</option>
        <option value="value">Ключа-значения</option>
        <option value="id">Ключа-идентификатора</option>
    </select><p></p>
    <input type="text" id="chng_val"><p></p>
    <input type="number" id="change_number" min="1">
    <input type="button" onclick="upd()" value="Изменить">
</form>
```
## Дополнительные материалы
* [Классы](https://learn.javascript.ru/es-class)
* [Методы объектов](https://learn.javascript.ru/object-methods)
* [Поиск: getElement* и querySelector* и не только](https://learn.javascript.ru/searching-elements-dom)
* [Перехват ошибок, "try..catch"](https://learn.javascript.ru/exception)
