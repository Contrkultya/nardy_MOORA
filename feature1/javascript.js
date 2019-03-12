/*
    * Функция, обрабатывающая JSON.
  * Проверяет, из «index.html», textarea (12 строка) на наличие ввода и обрабатывает полученный JSON;
  * @param {bool} inputArea — передаёт был ли ввод в textarea;
  * @param {string} data — хранит в себе исходный текст, потом в итоге спарсированный JSON;
  * @param {string} html — хранит в себе вывод на html-страницу;
*/
function checkMother() {
  var inputArea = false;
  var data = '[{ "name": "Доска 1", "children": [{ "name": "Список задач 1.1","children": [{ "name": "Задача 1.1.1" },{ "name": "Задача 1.1.2" }]},{"name": "Список задач 1.2","children": [{ "name": "Задача 1.2.1" },{ "name": "Задача 1.2.2" }]},{"name": "Список задач 1.3"}]},{"name": "Доска 2"}]';
  if (document.getElementById('jsonArea').value != ''){
    data = document.getElementById('jsonArea').value;
    inputArea = true;
  }
  data = JSON.parse(data);
  var html = "";
  /*
      * Рекурсивная функция.
    * Получает спарсированный JSON;
    * @return {string} Строка содержащая HTML разметку;
  */
  function rec(data) {
    html += "<ul>";
    data.forEach(element => {
      html += "<li>";
      if (inputArea)
        html += element;
      else html += element.name;
      if (element.children)
        rec(element.children);
      html += "</li>"
    });
    html += "</ul>";
    return html;
  }
  document.getElementById('out').innerHTML = rec(data);
  document.getElementById('out').style.display = "block";
}