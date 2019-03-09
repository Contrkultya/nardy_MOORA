/*
Функция вывода JSON'а из textarea(в будущем TA) или из стандартного значения.
Проблемы: Максимальный уровень вложенности третий. Плюсы: не рекурсия;
Если TA пустая, то выводится стандартное значение.
*/
function checkMother() {
    var dat = '[{ "name": "Доска 1", "children": [{ "name": "Список задач 1.1","children": [{ "name": "Задача 1.1.1" },{ "name": "Задача 1.1.2" }]},{"name": "Список задач 1.2","children": [{ "name": "Задача 1.2.1" },{ "name": "Задача 1.2.2" }]},{"name": "Список задач 1.3"}]},{"name": "Доска 2"}]';
    if (document.getElementById('json_area').value != '')
        dat = document.getElementById('json_area').value;
    dat = JSON.parse(dat);
    var html = '<ul>';
    for (var k in dat) {
        html = html + '<li>' + dat[k].name + '</li>';
        modelBuilder(dat[k].name, dat[k].children);

        if (dat[k].children != null) {
            html = html + "<ul>";
            for (i = 0; i < dat[k].children.length; i++) {
                html = html + "<li>" + dat[k].children[i].name + "</li>";
                if (dat[k].children[i].children !== null) {
                    html = html + "<ul>";   
                    for (m in dat[k].children[i].children) {
                        html = html + "<li>" + dat[k].children[i].children[m].name + "</li>";
                    }
                    html = html + "</ul>";
                }
            }
            html = html + "</ul>";
        }

        html = html + '</li>';
    }
    html = html + '</ul>';
    document.getElementById('out').innerHTML = html;
}

/*
Сделать крутое пояснение функции
*/
function modelBuilder(keys, values){
    this.keys = keys;
    this.values = values;
    
    this.delete = function (obj){
        obj.removed = true;
    }
    this.update = function (updObj){
        this.keys = updObj.keys;
        this.values = updObj.values;
    }
    this.read = function () {
        
    }
    this.read = function (key) {
        
    }
    console.log(keys, values);
}
