<template>
  <v-app>
    <v-toolbar app style="background-color: indigo">
      <v-toolbar-title class="headline text-uppercase" style="color: white">
        <span>NARDY MOORA </span>
        <span class="font-weight-light"> MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar >

    <v-content id="boardlist">
    <v-layout style="height:100%;">
       <v-navigation-drawer>
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
          @click=""
          
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
      </v-list>
    </v-navigation-drawer>

    <v-flex xs12 sm6 offset-sm3>
      <v-card
       v-for="obj in childrens"
          :key="obj.id"
          @click=""
          style="margin-top:10px;"
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
          <v-btn flat color="purple">Завершить</v-btn>
          <v-btn flat color="blue">Удалить</v-btn>
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
  data(){
       return {
      items: [
        { icon: 'dashboard' }
      ],
      right: null
    }
  },
  computed:{
    desks(){
      return this.$store.getters.getdesk;
    },
    childrens(){
      return this.$store.getters.getChildren;
    }
  }

}

</script>

<style>

</style>









