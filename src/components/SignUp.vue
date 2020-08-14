<template>
  <div>
    <ion-header>
      <ion-toolbar class="toolbar-style">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" text color="light"></ion-back-button>
        </ion-buttons>
        <ion-title>Sign up</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="register-page">
      <form onsubmit="processForm(event)" class="form-container">
        <ion-list lines="full">
          <ion-item class="form-line">
            <ion-label position="floating" class="form-label">
              Name
              <ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-input required type="text" v-on:ionInput="handleNameChange($event)"></ion-input>
          </ion-item>
          <ion-item class="form-line">
            <ion-label position="floating" class="form-label">
              Email
              <ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-input required type="email" v-on:ionInput="handleEmailChange($event)"></ion-input>
          </ion-item>

          <ion-item class="form-line">
            <ion-label position="floating" class="form-label">
              Password
              <ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-input required type="password" v-on:ionInput="handlePasswordChange($event)"></ion-input>
          </ion-item>
        </ion-list>

        <div class="ion-padding">
          <ion-button fill="clear" @click="createAccount()">Create account</ion-button>
        </div>
      </form>
    </ion-content>
    <ion-alert-controller></ion-alert-controller>
  </div>
</template>

<script>
export default {
  name: "sign-up",
  props: {},
  data: () => ({
    name: null,
    email: null,
    password: null,
  }),
  methods: {
    handleNameChange($event) {
      this.name = $event.target.value;
    },
    handleEmailChange($event) {
      this.email = $event.target.value;
    },
    handlePasswordChange($event) {
      this.password = $event.target.value;
    },
    createAccount() {
      this.$store.dispatch('signUp', {email: this.email, password: this.password, name: this.name})
    },
  },
};
</script>

<style scoped>
.register-page {
  --background: #170a3a;
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