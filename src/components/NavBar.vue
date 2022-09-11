<template>
  <nav>
      <v-toolbar app style="background:linear-gradient(to right, #de813e , #360312)">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light"><img class="img" src="https://i.ibb.co/1Zg9W7q/RustAuto.png" width="60" height="60"> </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          class="menudiv"
          color="white"
          v-bind="props"
        >
          Menu
        </v-btn>
      </template>

      

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <a  id="TIP" href="https://www.tip.edu.ph/">TIP Website</a>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-alphabetical', path: '/stringApp'},
           { title: 'Quiz App', icon: 'mdi-comment-question-outline', path: '/Quiz' },
           { title: 'Research About Vue', icon: 'mdi-vuetify', path: '/AboutVue' },
           { title: 'About Me', icon: 'mdi-account-box', path: '/AboutMe' },
           { title: 'About the Application', icon: 'mdi-application', path: '/AboutApp' },
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

function doChannel () {
     
}
 
</script>

<style scoped>
.img {
  margin-top: 3%;
}

a:hover {
  background: #de813e;
}

.menudiv:hover {
  background: #373e98;
}

#TIP {
  text-decoration: none;
  padding-left: 10px;
  margin-right: 20px;
  color:white;
  padding-right:10px;
}
</style>