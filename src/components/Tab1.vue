<template>
  <ion-content class="hp-style">
    <ion-toolbar class="toolbar-style">
      <ion-title>Teach me secure</ion-title>
    </ion-toolbar>
    <ion-card v-for="category in categories" :key="category.id" class="card-style" @click="showAllCourses(category)">
      <ion-item lines="none" class="category-title">
        <ion-icon :name="category.icon" class="icon-style"></ion-icon>
        <ion-label >{{category.name}}</ion-label>
          <ion-chip outline class="chip-style">
          <ion-label>{{category.courses.length}} courses</ion-label>
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
  methods: {
    viewCourse(course) {
      this.$router.push({ name: "tab1-details", params: { course } });
    },
    showAllCourses(category) {
      this.selectedCategory = category.name;
    },
  },

  updated() {
    let category = this.$refs.categories;
    this.$nextTick(() => {
      category.options = this.slideOpts;
    });
  },
  onCreate() {},
};
</script>

<style>
.category-title {
  font-size: 14px;
  --background: rgb(48, 70, 90);
  color: white;
}

.slider-container {
  width: 300px;
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
  background: #ccc;
  margin: 10px 5px;
  font-size: 12px;
  color: white;
  background-color: rgb(232, 129, 52);
  border-radius: 3px;
}
.chip-style {
  padding-left: 7px;
  padding-right: 7px;
  color: white;
  font-size: 10px;
}
.hp-style {
  --background: rgb(36, 43, 62);
}
.toolbar-style {
  --background: rgb(45, 65, 89);
  color: white;
}
.card-style {
  border-radius: 5px;
  --background: rgb(48, 70, 90);
  padding-top:10px;
  padding-bottom: 10px;
}
.icon-style{
color: rgb(232, 129, 52);
font-size: large;

}
</style>
