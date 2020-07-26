<template>
  <div class="ion-page">
    <ion-tabs>
      <ion-tab tab="tab1" :routes="['tab1', 'tab1-details']" :to="{name:'tab1'}">
        <ion-vue-router name="tab1Route"></ion-vue-router>
      </ion-tab>
    </ion-tabs>
  </div>
</template>

<script>
import { map } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  "ios-map": map.ios,
  "md-map": map.md
});
export default {
  name: "TabRoot",
  props: {}
};
</script>