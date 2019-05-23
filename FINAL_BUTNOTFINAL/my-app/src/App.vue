<template>
  <v-app>
    <v-toolbar app style="background-color: #03a9f4;z-index:1">
      <v-toolbar-title class="headline text-uppercase" style="color: white">
        <span class="font-weight-bold">NARDY MOORA </span>
        <span class="font-weight-light"> MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog1" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn
            color="#ef5350"
            dark
            big7
            absolute
            bottom
            right
            fab
            v-on="on">
            <v-icon>add</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Новая задача</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>

                <v-flex xs12 sm6>
                  <v-text-field v-model="name" label="Название задачи*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="description" label="Описание задачи"></v-text-field>
                </v-flex>

              </v-layout>
            </v-container>
            <small>*поля, отмеченные звездочкой, обязательны для заполнения</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog1 = false">Закрыть</v-btn>
            <v-btn color="blue darken-1" flat @click="dialog1 = false, add({name, description}), selectTodo(1)">Сохранить</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-toolbar >

    <v-content id="boardlist">
      <v-layout style="height:100%;">
        <v-navigation-drawer style="z-index:0;">
            <v-toolbar flat>
              <v-list>
                <v-list-tile>
                  <v-list-tile-title class="title">
                    Список досок
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-toolbar>

          <v-divider></v-divider>
  
          <v-list dense class="pt-0">
            <v-list-tile
              v-for="(todo, id) in desks"
              :key="id"
              @click="selectTodo(id+1)"
              >
              <v-list-tile-action>
                <v-icon
                v-for="icon in items"
                :key="icon.icon"
                >{{icon.icon}}</v-icon>
              </v-list-tile-action>
      
              <v-list-tile-content>
                <v-list-tile-title>{{ todo.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            
            <v-dialog v-model="dialog2" persistent max-width="600px">
              <template v-slot:activator="{ on }">
              <v-btn flat color="purple" dark v-on="on">Добавить</v-btn>
              </template>
            <v-card>
          <v-card-title>
            <span class="headline">Создать доску</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field v-model="nameDesk" label="Доска*" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog2 = false">Закрыть</v-btn>
            <v-btn color="blue darken-1" flat  @click=" addDesk, dialog2 = false">Добавить</v-btn>
          </v-card-actions>
        </v-card> 
            </v-dialog>
          </v-list>
        </v-navigation-drawer>

        <v-flex v-if="doneTodo" style="align-start justify-right row">
          <v-card
            v-for="(obj, id) in childrens"
            :class=obj.color
            :key="id"
           
            style="margin-top:10px; width:300px;margin-left:10px"
            >
            
            <v-card-title primary-title>
              <div>
                <div class="headline" >{{obj.name}}</div>
                <span class="grey--text"></span>
              </div>

              <div class="text-xs-center" v-if="child_Show == false">
              </div>
               <v-btn outline fab small absolute right color="blue" @click="showTasks(obj.id)">
        <v-icon>list</v-icon>
      </v-btn>
            </v-card-title>

            <v-slide-y-transition>
              <v-card-text  style="margin-top: -22px;">
                {{obj.description}}
              </v-card-text>
            </v-slide-y-transition>
            
            <v-hover v-if="obj.selectTasks"
             v-for="(object,name) in obj.tasks" :key="name"
            >
              <v-card 
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
                width="269"
                style="margin-bottom: 8px;"
                >
                <v-card-title>
                  <div>
                    <span style="font-size: 10pt;">{{object.name}}</span>
                  </div>
                  <v-spacer></v-spacer>
                </v-card-title>
              </v-card>
            </v-hover>
            

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outline fab small color="green"
              @click="changeColor(obj.id)"><v-icon medium>done</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn outline fab small color="red"
              @click="del(obj.id)"><v-icon medium>delete</v-icon></v-btn>
              <v-spacer></v-spacer>
              
            </v-card-actions>
          </v-card>
          
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>
<script>

  export default {
    data() {
      return {
        items: [
          { icon: 'dashboard' }
        ],
        description: "",
        name:"",
        current_Id: 1,
        status: "",
        show: false,
         dialog1: false,
         dialog2: false,
        child_Show: false,
        right: null
      }
    },
    computed: {
      menuItems(){
        return[
          {
            route:'/form',
          }
        ]
      },
      doneTodo() {
            return this.$store.state.todos.find(todo => todo.done);
        },
      desks() {
        return this.$store.getters.getdesk;
      },
      childrens() {
        return this.$store.state.todos.filter(todo=>todo.done===true);
      },
      childrens_childrens() {
        return this.$store.getters.getChildren(this.current_Id);
      },
      object() {
        return this.$store.getters.todos;
      },
      count() {
        return this.$store.getters.todosCount;
      }
    },
    methods: {
      del:function(id) {
        this.$store.dispatch('del',id);
      },
      changeColor:function(index)
      {
        this.$store.state.todos.forEach(todo => {
              if(todo.id===index)
              {
                if(todo.color=='white')
                {
                 todo.color = 'green lighten-4';
                }
                else if(todo.color=='green lighten-4')
                {
                  todo.color = 'white';
                }
              }
            });
      },
      showTasks:function(index){
         this.$store.state.todos.forEach(todo => {
              if(todo.id=== index&&todo.selectTasks == false)
              {
                 todo.selectTasks = true;
              }
              else if(todo.id=== index&&todo.selectTasks == true)
               {
                 todo.selectTasks = false;
              }
            });
      },
      add:function(name, description) {
        this.$store.dispatch('add',name, description);
      },
      addDesk: function(){
        this.$store.dispatch('addDesk', {name: $this.nameDesk})
      },
      toForm:function()
      {
        this.$router.push('/form');
      },
       disableAllTodos() {
            this.$store.state.todos.forEach(todo => todo.done = false);
        },
      selectTodo(groupIndex) {
            this.disableAllTodos();
            //this.selectedTask = null;
            this.$store.state.todos.forEach(todo => {
              if(todo.parent===groupIndex)
              {
                 todo.done = true;
              }
            });
            
        },
    }
  }


</script>

<style>
  .white {
   background-color: white;
}

</style>









