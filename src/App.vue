<template >
  <div id="app" >
    <ion-app >
      <ion-vue-router main></ion-vue-router>
    </ion-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
ion-navbar.toolbar.toolbar-ios.statusbar-padding,
ion-navbar.toolbar-ios ion-title.title-ios,
ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
ion-toolbar.toolbar-ios ion-title.title-ios {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
.close-icon {
  color: #b45171;
}
.check-icon {
  color: #0cfbc1;
}
a {
  color: #57b3ed !important;
}
.hp-style {
  --background: #170a3a;
  --color: white;
}
.toolbar-style {
  --background: #57b3ed;
  color: white;
  text-align: center;
}
.card-style {
  border-radius: 5px;
}
.icon-style {
  color: #304582;
  font-size: large;
}
</style>