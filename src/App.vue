<template>
  <v-app>
    <v-toolbar app color="black">
      <v-toolbar-title class="headline text-uppercase">
        <span class="blue--text">TeachMe</span>
        <span class="font-weight-light white--text">SECURE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
