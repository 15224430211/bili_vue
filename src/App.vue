<template>
  <v-app>
    <Home/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Home
  },
  created() {

  },
  data () {
    return {
      //
    }
  }
}
</script>

