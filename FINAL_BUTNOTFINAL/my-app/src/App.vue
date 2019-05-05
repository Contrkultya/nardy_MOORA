<template>
  <v-app>
    <v-toolbar app style="background-color: #03a9f4;z-index:1">
      <v-toolbar-title class="headline text-uppercase" style="color: white">
        <span class="font-weight-bold">NARDY MOORA </span>
        <span class="font-weight-light"> MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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
              v-for="obj in desks"
              :key="obj.id"
              @click="show=true"
              >
              <v-list-tile-action>
                <v-icon
                v-for="icon in items"
                :key="icon.icon"
                @click=""
                >{{icon.icon}}</v-icon>
              </v-list-tile-action>
      
              <v-list-tile-content>
                <v-list-tile-title>{{ obj.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-btn flat color="purple">Добавить</v-btn> 
          </v-list>
        </v-navigation-drawer>

        <v-flex v-if="show==true" style="align-center justify-right row/">
          <v-card
            v-for="(obj, id) in childrens"
            :key="id"
            @click=""
            :style=""
            style="margin-top:10px; width:300px;margin-left:10px"
            >
            
            <v-card-title primary-title>
              <div>
                <div class="headline">{{obj.name}}</div>
                <span class="grey--text"></span>
              </div>
            </v-card-title>

            <v-slide-y-transition>
              <v-card-text>
                {{obj.description}}
              </v-card-text>
            </v-slide-y-transition>

            <v-card-actions>
              <v-btn flat color="green"
              @click="status=!status">Завершить</v-btn>
              <v-btn flat color="red" 
              @click="del(obj.id)">Удалить</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
          <v-btn
            color="#ef5350"
            dark
            big7
            absolute
            top
            right
            fab
            @click=""
            >
            <v-icon>add</v-icon>
          </v-btn>
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
        status:false,
        show: false,
        right: null
      }
    },
    computed:{
      desks() {
        return this.$store.getters.getdesk;
      },
      childrens() {
        return this.$store.getters.getChildren;
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
      add:function(id) {
        this.$store.dispatch('add',id);
      },
    }
  }


</script>

<style>
  .strike {
    background-color:red;
  }
</style>









