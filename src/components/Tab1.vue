<template>
  <div class="ion-page" id="tab1">
    <ion-content padding>
      <v-container fluid>
        <v-layout row wrap>
          <v-layout
            align-center
            justify-center
            column
            fill-height
          >
            <v-flex xs12 sm12 class="text-xs-center">
              <v-img
                src="https://static1.squarespace.com/static/55d1e076e4b0be96a30dc726/t/56d97e0204426228b2ce15aa/1496844618749/computerworld_security_icon"
                max-height="300px"
                contain
              ></v-img>
              <div class="display-4 text-uppercase">
                <span class="blue--text">TeachMe</span>
                <span class="font-weight-light grey--text">SECURE</span>
              </div>
              <div class="display-2">
                este o aplicatie ce ajuta la insusirea informatiilor despre
                securitatea arhitecturii client-server
              </div>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
      <ion-button @click="nextPage()">START</ion-button>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "tab1",
  methods: {
    nextPage() {
      this.$router.push({ name: "tab1-details" });
    },
  },
  onCreate() {},
};
</script>

<style></style>
