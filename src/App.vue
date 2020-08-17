<template>
  <div id="app">
    <ion-app>
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
    };
  },
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
.error-color {
  color: #b45171;
}
.success-color {
  color: #0cfbc1;
}
a {
  color: #57b3ed !important;
}
.dark-color-background {
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
.text-button {
  font-size: 10px;
  color: #57b3ed;
  padding-top: 20px;
}
.flat-button {
  font-weight: 400;
  margin-top: 10px;
  --background: #57b3ed;
}
.form-container {
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-top: -10%;
}
.list-md-lines-full .item {
  --border-width: 0px;
}
.fields-inputs {
  border-radius: 5px;
}
.buttons {
  display: flex;
  flex-flow: column;
}
</style>
