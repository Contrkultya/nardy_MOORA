# narApi — изнутри
Данная документация дарует безграничную разработческую мощь.
## obj [Class](https://learn.javascript.ru/es-class)
Создаёт объекты по заданным ключам.
### Примеры
В следующем примере кода показано, как создать и инициализировать объект класса.
```javascript
var id = 0;
var parent;
var name = "Моор";
var hasChildren = true;
var removed = false;
var Moor = new obj(id, parent, name, hasChildren, removed);
```
### Конструкторы
|||
|:-|:-|
|constructor(number, number, string, bool, bool)|Инициализирует новый экземпляр класса, который содержит ключи-информацию об объекте.|
### Свойства
|||
|:-|:-|
| id | Получает идентификатор объекта.|
| parent | Получает идентификатор родительского объекта, если имеется родитель.|
| name | Получает имя объекта, в строковом виде.|
| hasChildren | Получает информацию о дочерних объектах. `true` — если имеются, `false` — если отсутствуют.|
| removed | Получает информацию, `true`, будет ли удалён объект в скором будущем, или нет, `false`.|
### Методы
|||
|:-|:-|
| read(key) | Производит чтение свойств объекта. Возвращает строку с информацией. *Если вызывать read() — то строкой возвращает все свойства объекта*.|
| update(updObj) | Обновляет объект, заменяя свойства на свойства полученного объекта.|
| delete() | Помечает объект на удаление.|
### Глобальные перменные и функции
* `number` — Переменная-счётчик, считает количество объектов.
* `object` — Массив, содержащий в себе объекты.
* `keys` — Массив ключей, упрощает взаимодействие с ключами объектов.
#### objBuilder_file(data) Function
Получает спарсированный [JSON](https://learn.javascript.ru/json) и создаёт объект.
```javascript
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
```
### Дополнительные материалы
* [Классы](https://learn.javascript.ru/es-class)
* [Методы объектов](https://learn.javascript.ru/object-methods)
* [setTimeout и setInterval](https://learn.javascript.ru/settimeout-setinterval)
* [Формат JSON, метод toJSON](https://learn.javascript.ru/json)
* [Перехват ошибок, "try..catch"](https://learn.javascript.ru/exception)
* [Поиск: getElement* и querySelector* и не только](https://learn.javascript.ru/searching-elements-dom)