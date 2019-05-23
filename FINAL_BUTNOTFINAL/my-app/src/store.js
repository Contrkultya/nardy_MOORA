import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
    { "id": 1,"name": "Доска 1", "parent": 0,"hasChildren": true, "done": false, "removed": false},
    { "id": 2,"parent": 1,"name": "Список задач 1.1","hasChildren": true,"color":'white', "done": false, "removed": false, "description": "Сделать removeKebab 2.0","selectTasks":false, "tasks":[{ "id": 3,"parent": 2,"name": "Задача 1.1.1", "done": false, "removed": false, "description": "Сделать removeAutism"},{ "id": 4,"parent": 2,"name": "Задача 1.1.2", "done": false, "removed": false, "description": "Сделать vue"},{ "id": 9,"parent": 2,"name": "Задача 1.1.3", "done": false, "removed": false, "description": "Заработать тут чекбох"},]},
    { "id": 5,"parent": 1,"name": "Список задач 1.2","hasChildren": true, "color":'white', "done": false, "removed": false, "selectTasks":false, "tasks":[ { "id": 6,"parent": 5,"name": "Задача 1.2.1" , "done": false, "removed": false},{ "id": 7,"parent": 5,"name": "Задача 1.2.2", "done": false, "removed": false }]},
    { "id": 8,"parent": 1,"name": "Список задач 1.3", "color":'white', "done": false, "removed": false, "selectTasks":false, "description": "Радоваться жизни"},
    { "id": 10,"parent": 0,"name": "Доска 2", "done": false, "removed": false}
    ],
    currentId: 0
  },
  getters: {
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    },
    todosCount: state => {
      return state.todos.length;
    },
    currentId: state => {
      return state.currentId;
    },
    todos: state => {
      return state.todos;
    },
    getdesk: state => {
      return state.todos.filter(todos=>todos.parent === 0)
    },
    getChildren: state => id=>{
      return state.todos.filter(todos=>todos.parent === id)
    }
    //прописать методы взаимодействия 
  },
  mutations: {
    setCurrentId(state, id) {
      state.currentId = id;
      //прописать мутации и коммиты
    },
    newNote(state, payload) {
      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
      var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
        var obj = function () {
    function obj(id, parent, name, hasChildren, removed, done, description) {
        _classCallCheck(this, obj);

        this._id = id;
        this._parent = parent;
        this._name = name;
        this._hasChildren = hasChildren;
        this._removed = removed;
        this._done = done;
        this._description = description;
    }

    _createClass(obj, [{
        key: 'read',

        /**
         * @method
         * @memberof obj
         * @name read
         * @description Производит чтение всех свойств элемента, если передан ключ, производит чтение определённого свойства объекта.
         * @param {undefined | string} key не содержит|содержит в себе имя ключа;
         * @returns {undefined | null | string} undefined — если объект помечен на удаление;
         * Если переданного ключа не существует, то возвращает null;
         * Если, передан без ключа, то строку, содержащую в себе ключи элемента;
        */
        value: function read(key) {
            if (this.checkRemove()) return undefined;else {
                if (key === undefined) {
                    return this._name + '; ' + this._parent + '; ' + this._id + '; ' + this._hasChildren + '; ' + this._done + '; \n' + this._description;
                } else if (key == 'id') {
                    return this._id;
                } else if (key == 'parent') {
                    return this._parent;
                } else if (key == 'name') {
                    return this._name;
                } else if (key == 'hasChildren') {
                    return this._hasChildren;
                } else if (key == 'removed') {
                    return this._removed;
                } else if (key == 'done') {
                    return this._done;
                } else if (key == 'description') {
                    return this._description;

                }else return null
                
            }
        }
        /**
         * @method
         * @memberof obj
         * @name update
         * @description Получает обновлённый объект и изменяет ключи на ключи полученного объекта.
         * @param {object} updObj обновлённый объект;
         */

    }, {
        key: 'update',
        value: function update(updObj) {
            if (this.checkRemove()) {
                return undefined;
            } else Object.assign(this, updObj);
        }
        /**
         * @method
         * @memberof obj
         * @name delete
         * @description Помечает объект на удаление, после этого он выводиться в списках не будет.
         */

    }, {
        key: 'delete',
        value: function _delete() {
            this._removed = true;
        }
        /**
         * @method
         * @memberof obj
         * @name checkRemove
         * @description Метод, проверяющий помечен ли объект на удаление, или нет.
         * @return {bool};
         */

    }, {
        key: 'checkRemove',
        value: function checkRemove() {
            if (this._removed) return true;else return false;
        }
        /**
         * @method
         * @memberof obj
         * @name changeDone
         * @description Изменяет состояние завершённости объекта. (Завершён/Не завершён);
         */

    }, {
        key: 'changeDone',
        value: function changeDone() {
            if (this.checkRemove()) {
                return undefined;
            } else if (this._done) {
                this._done = false;
            } else this._done = true;
        }
    }, {
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(id) {
            this._id = id;
        }
    }, {
        key: 'parent',
        get: function get() {
            return this._parent;
        },
        set: function set(parentId) {
            this._parent = parentId;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(name) {
            this._name = name;
        }
    }, {
        key: 'hasChildren',
        get: function get() {
            return this._hasChildren;
        },
        set: function set(haveBool) {
            this._hasChildren = haveBool;
        }
    }, {
        key: 'removed',
        get: function get() {
            return this._removed;
        },
        set: function set(haveBool) {
            this._removed = haveBool;
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done;
        },
        set: function set(haveBool) {
            this._done = haveBool;
        }
    }, {
        key: 'description',
        get: function get() {
            return this._description;
        },
        set: function set(setDesc) {
            this._description = setDesc;
        },
    }]);

    return obj;
}();
        let newid= store.getters.todosCount+1;
        var style = payload.name;
        var description = payload.description;
        var id = payload.id;
        var element= [];
           let setid = newid;
            let setname= style;
            let setparent=1;
            let hasChildren= 'false';
            let setremoved= 'false';
            let setdone='true';
            let setDesc= description;
            element= new obj(setid, setparent, setname, hasChildren, setremoved, setdone, setDesc); 
      state.todos.push(element);
    },
    newDesk(state, name) {
      state.todos.push({"id": 11,"name":name, "parent": 0,"hasChildren": false, "done": false, "removed": false});
    },
    delNote(state, id) {
      state.todos.splice(state.todos.findIndex(todo => todo.id === id), 1);
    }
  },
  actions: {
    del ({commit}, id) {
      commit('delNote', id)
    },    
    add ({commit},name, description) {
      commit('newNote',name, description)
    },
    addDesk ({commit}, payload) {
      commit('newDesk', payload.name)
    }
  },
})
