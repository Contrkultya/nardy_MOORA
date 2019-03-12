# checkMother() Function
## Определение
Обрабатывает полученный [JSON](https://learn.javascript.ru/json).
## Внутренняя функция rec(data)
Получает спарсированный [JSON](https://learn.javascript.ru/json) и возвращает [строку](https://learn.javascript.ru/es-string) с элементами [HTML](http://htmlbook.ru/html)
```javascript
function rec(data) {
    html += "<ul>";
    data.forEach(element => {
        html += "<li>" + element;
        if (element.children) {
            rec(element.children);
        }
        html += "</li>"
    });
    html += "</ul>";
    return html;
}
```
Где `children` — это имя вложенного объекта в текущий элемент рекурсии.
## Дополнительные материалы
- [Формат JSON](https://learn.javascript.ru/json)
- [Рекурсия, стек](https://learn.javascript.ru/recursion)
