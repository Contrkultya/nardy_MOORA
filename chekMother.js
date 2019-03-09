// working function

function checkMother() {
    var dat = '[{ "name": "Доска 1", "children": [{ "name": "Список задач 1.1","children": [{ "name": "Задача 1.1.1" },{ "name": "Задача 1.1.2" }]},{"name": "Список задач 1.2","children": [{ "name": "Задача 1.2.1" },{ "name": "Задача 1.2.2" }]},{"name": "Список задач 1.3"}]},{"name": "Доска 2"}]';
    if (document.getElementById('json_area').value != '')
        dat = document.getElementById('json_area').value;
    dat = JSON.parse(dat);
    var html = '<ul>';
    for (var k in dat) {
        html = html + '<li>' + dat[k].name + '</li>';

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
