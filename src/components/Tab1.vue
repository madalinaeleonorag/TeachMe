<template>
  <ion-content class="hp-style">
    <ion-toolbar class="toolbar-style">
      <ion-title>Teach me secure</ion-title>
    </ion-toolbar>
    <ion-text v-if="userDetails" color="primary">
      Welcome back, {{userDetails.name}}
    </ion-text>
    <ion-card class="statistic-card" v-if="userDetails" >
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-item lines='none' class="statistic-item">{{userDetails.courses.length}} courses finished </ion-item>

          </ion-col>
          <ion-col>
           <ion-item lines='none' class="statistic-item">{{userDetails.points}} points </ion-item>

          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card>
    <ion-card
      v-for="category in categories"
      :key="category.id"
      class="card-style"
      @click="showAllCourses(category)"
    >
      <ion-item lines="none" class="category-title">
        <ion-icon :name="category.icon" class="icon-style"></ion-icon>
        <ion-label>&nbsp; {{category.name}}</ion-label>
        <ion-chip outline class="chip-style">
          <ion-label>{{category.courses.length}}</ion-label>
        </ion-chip>
      </ion-item>

      <div v-show="selectedCategory === category.name">
        <ion-slides ref="categories" pager="false" scrollbar="false" class="slider-container">
          <ion-slide class="slider" v-for="course in category.courses" :key="course.id">
            <div class="slide-content" @click="viewCourse(course)">{{ course.name }}</div>
          </ion-slide>
        </ion-slides>
      </div>
    </ion-card>
    <ion-button fill="clear" color="light" v-if="user" @click="signOut">Log out</ion-button>
  </ion-content>
</template>

<script>
import categories from "../db";

export default {
  name: "tab1",
  data() {
    return {
      categories: categories,
      selectedCategory: null,
      slideOpts: {
        spaceBetween: 0,
        slidesPerView: 3,
        freeMode: true,
      },
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userDetails() {
      return this.$store.getters.userDetails;
    },
  },
  methods: {
    viewCourse(course) {
      if (this.user) {
        this.$router.push({ name: "tab1-details", params: { course } });
      } else {
        this.goToLogin();
      }
    },
    showAllCourses(category) {
      this.selectedCategory = category.name;
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    signOut() {
      this.$store.dispatch("logout");
    },
  },
  updated() {
    let category = this.$refs.categories;
    this.$nextTick(() => {
      category.options = this.slideOpts;
    });
  },
};
</script>

<style>
.category-title {
  font-size: 14px;
  /* --background: rgb(48, 70, 90);
  color: white; */
}

.slider-container {
  background-color: #241b52;
}
.slider {
  width: 30%;
}
.slide-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  margin: 10px 5px;
  font-size: 12px;
  color: white;
  background-color: #304582;
  border-radius: 3px;
}
.chip-style {
  padding-left: 7px;
  padding-right: 7px;
  color: #304582;
  font-size: 10px;
  width: 31px;
  justify-content: center;
  display: flex;
  height: 30px;
}
.hp-style {
  --background: #170a3a;
}
.toolbar-style {
  --background: #57b3ed;
  color: white;
}
.card-style {
  border-radius: 5px;
}
.icon-style {
  color: #304582;
  font-size: large;
}

.statistic-card {
  border-radius: 5px;
  --background: rgb(232, 129, 52);
  padding-top: 10px;
  padding-bottom: 10px;
}
.statistic-item {
  --background: rgb(232, 129, 52);
  color:white;
}
</style>
