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
    newNote(state, note) {
      state.todos.push(note);
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
    add ({commit}, id) {
      commit('newNote', id)
    },
    addDesk ({commit}, payload) {
      commit('newDesk', payload.name)
    }
  },
})
