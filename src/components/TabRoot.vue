<template>
  <div class="ion-page">
    <ion-tabs>
      <ion-tab
        tab="tab1"
        :routes="['tab1', 'tab1-details']"
        :to="{ name: 'tab1' }"
      >
        <ion-vue-router name="tab1Route"></ion-vue-router>
      </ion-tab>
    </ion-tabs>
  </div>
</template>

<script>
import { addIcons } from "ionicons";
import { star, lockClosedOutline, addCircle , checkmark} from "ionicons/icons";

addIcons({
  "ios-star": star,
  "md-star": star,
  "ios-lock-closed": lockClosedOutline,
  "md-lock-closed": lockClosedOutline,
  "ios-add-circle": addCircle,
  "md-add-circle": addCircle,
  "ios-checkmark" : checkmark,
  "md-checkmark": checkmark
});
export default {
  name: "TabRoot",
  props: {},
};
</script>
