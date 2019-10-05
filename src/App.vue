<template>
  <v-app>
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import NavBar from "@/components/global/NavBar.vue";
  import Footer from "@/components/global/Footer.vue";


  @Component({
    components: {
      NavBar,
      Footer,
    }
  })
  export default class App extends Vue {

  }
</script>

<style scoped lang="css">

</style>
