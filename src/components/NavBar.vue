<template>
  <nav>
      <v-toolbar app style="background:linear-gradient(to right, gray , black)">
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
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/DashBoard' },
           { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'Quiz', icon: 'mdi-view-question', path: '/Quiz' },
           { title: 'Axios', icon: 'mdi-view-dashboard', path: '/Axios' },
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

.chkchnnl:hover {
  color: #373e98;
}

.menudiv:hover {
  background: #373e98;
}
</style>