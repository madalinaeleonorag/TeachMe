<template>
  <ion-content>
    <h1>Teach me secure</h1>
    <div v-for="category in categories" :key="category.id">
      <ion-card>
        <ion-card-header>
          <ion-item lines="none" class="category-title">{{category.name}}</ion-item>
        </ion-card-header>
        <ion-item lines="none" class="category-description" @click="showAllCourses(category)">
          <ion-label>Click to see our courses</ion-label>
          <ion-chip outline class="chip-style">
            <ion-label>{{category.courses.length}} courses</ion-label>
          </ion-chip>
        </ion-item>
      </ion-card>
      <div v-show="selectedCategory === category.name">
        <ion-slides ref="categories" pager="false" scrollbar="false" class="slider-container">
          <ion-slide class="slider" v-for="course in category.courses" :key="course.id">
            <div class="slide-content" @click="viewCourse(course)">{{ course.name }}</div>
          </ion-slide>
        </ion-slides>
      </div>
    </div>
  </ion-content>
</template>

<script>
import categories from '../db'

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
      // console.log(course)
      this.$router.push({ name: "tab1-details", params: {course}});
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
  font-size: 16px;
  font-weight: 700;
  margin-left: 5%;
  margin-bottom: 1%;
}
.category-description {
  font-size: 12px;
  color: #c2c2c2;
  margin-left: 5%;
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
  margin: 0px 5px;
  font-size: 12px;
  color: white;
  background-color: rgb(0, 0, 74);
  border-radius: 3px;
}
.chip-style {
  padding-left: 7px;
  padding-right: 7px;
  color: rgb(0, 0, 74);
  font-size: 12px;
}
</style>
