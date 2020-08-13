<template>
  <div>
    <ion-header>
      <ion-toolbar class="toolbar-style">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" text color="light"></ion-back-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="register-page">
      <form onsubmit="processForm(event)" class="form-container">
        <ion-list lines="full">
          <ion-item class="form-line">
            <ion-label position="floating" class="form-label">
              Email
            </ion-label>
            <ion-input required type="email" v-on:ionInput="handleEmailChange($event)"></ion-input>
          </ion-item>

          <ion-item class="form-line">
            <ion-label position="floating" class="form-label">
              Password
            </ion-label>
            <ion-input required type="password" v-on:ionInput="handlePasswordChange($event)"></ion-input>
          </ion-item>
        </ion-list>

        <div class="ion-padding">
          <ion-button @click="login()">Login</ion-button>
          <ion-button @click="goToSignUp" fill="clear">Don't have an account? Sign up</ion-button>
        </div>
      </form>
    </ion-content>
    <ion-alert-controller></ion-alert-controller>
  </div>
</template>

<script>
import firebase from "../firebase/firebase";
export default {
  name: "sign-up",
  props: {},
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    handleEmailChange($event) {
      this.email = $event.target.value;
    },
    handlePasswordChange($event) {
      this.password = $event.target.value;
    },
    goToSignUp() {
      this.$router.push({ name: "sign-up" });
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push({ path: "/" }))
        .catch(() => {
          return this.$ionic.alertController
            .create({
              header: "Login failed",
              message: "Invalid username or password, please try again",
              buttons: ["OK"],
            })
            .then((a) => a.present());
        });
    },
  },
};
</script>

<style scoped>
.register-page {
  --background: #141E30;
}
.form-container {
  margin-top: 30%;
  margin-left: 20px;
  margin-right: 20px;
}
/* .form-line {
  --background: white;
} */
.form-label {
  font-size: 12px;
  /* color: black; */
}
</style>