function checkMother() {
  if (document.getElementById('jsonArea').value == '') {
    var date = '[{ "name": "Доска 1", "children": [{ "name": "Список задач 1.1","children": [{ "name": "Задача 1.1.1" },{ "name": "Задача 1.1.2" }]},{"name": "Список задач 1.2","children": [{ "name": "Задача 1.2.1" },{ "name": "Задача 1.2.2" }]},{"name": "Список задач 1.3"}]},{"name": "Доска 2"}]';
    dat = JSON.parse(date);
    var html = "";
    function rec(data) {
      html += "<ul>";
      data.forEach(element => {
        html += "<li>";
        html += element.name;
        if (element.children) {
          rec(element.children);
        }
        html += "</li>";
      });
      html += "</ul>";
      return html;
    }
    cool = rec(dat);
    document.getElementById('out').innerHTML = cool;
  }
  else {
    var date = document.getElementById('jsonArea').value;
    dat = JSON.parse(date);
    var html = "";
    function rec(data) {
      html += "<ul>";
      data.forEach(element => {
        html += "<li>";
        html += element;
        if (element.children) {
          rec(element.children);
        }
        html += "</li>";
      });
      html += "</ul>";
      return html;
    }
    cool = rec(dat);
    document.getElementById('out').innerHTML = cool;
  }
  document.getElementById("out").style.display = "block";
}
