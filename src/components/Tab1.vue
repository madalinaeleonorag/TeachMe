<template>
  <ion-content class="dark-color-background">
    <ion-title class="wrapper-title">
      <div class="cover-title">TeachMe</div>
      <div class="cover-subtitle">Selflearning App</div>
    </ion-title>
    <ion-text v-if="userDetails">
      <div class="user-infos">
        Welcome back, {{ userDetails.name }}.
        <a href="#" v-if="user" @click="signOut">Log out</a>
      </div>
    </ion-text>
    <ion-card class="statistic-card" v-if="userDetails">
      <ion-grid>
        <ion-row class="statistics">
          <ion-item lines="none" class="statistic-item"
            >{{ userDetails.courses.length }} courses finished
          </ion-item>
          <div class="statistic-item">&#62;</div>
          <ion-item lines="none" class="statistic-item"
            >{{ getUserTotalPoints }} points
          </ion-item>
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
        <ion-label>&nbsp; {{ category.name }}</ion-label>
        <ion-chip outline class="chip-style">
          <ion-label>{{ category.courses.length }}</ion-label>
        </ion-chip>
      </ion-item>

      <div v-show="selectedCategory === category.name">
        <ion-slides
          ref="categories"
          pager="false"
          scrollbar="false"
          class="slider-container"
        >
          <ion-slide
            class="slider"
            v-for="course in category.courses"
            :key="course.id"
          >
            <div class="slide-content" @click="viewCourse(course)">
              <div class="slider-title">
                {{ course.name }}
              </div>
              <div class="slider-language">
                <img
                  v-if="course.language"
                  :src="require('../assets/flags/' + course.language + '.png')"
                  class="flag-png"
                />
                {{ course.language }}
              </div>
              <div class="slider-chapters" v-if="course && course.chapters">
                Chapters: {{ course.chapters.length }}
              </div>
            </div>
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
  created() {
    if (this.user) {
      console.log("user is logged in");
    } else {
      this.goToLogin();
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userDetails() {
      return this.$store.getters.userDetails;
    },
    getUserTotalPoints() {
      if (this.userDetails && this.userDetails.courses) {
        return this.userDetails.courses.reduce((acc, currVal) => acc + currVal);
      } else {
        return 0;
      }
    },
  },
  methods: {
    viewCourse(course) {
      this.$router.push({ name: "tab1-details", params: { course } });
    },
    showAllCourses(category) {
      this.selectedCategory = category.name;
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    signOut() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "login" });
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
}
.slider-container {
  background-color: #241b52;
}
.slider {
  width: 30%;
}
.cover-title {
  font-family: fantasy;
  font-size: 36px;
  color: #57b3ed;
}
.statistics {
  align-items: center;
  justify-content: space-around;
}
.cover-subtitle {
  font-family: monospace;
  text-transform: uppercase;
}
.wrapper-title {
  padding: 40px 0px;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(87, 179, 237, 1) 0%,
    rgba(23, 10, 58, 1) 100%
  );
}
.slide-content {
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 10px;
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
  width: 30px;
  justify-content: center;
  display: flex;
  height: 30px;
}
.slider-language {
  display: flex;
  align-items: center;
}
.flag-png {
  height: 10px !important;
  padding-right: 3px;
}
.user-infos {
  margin: 16px;
  color: white;
}
.slider-title {
  height: 100%;
  display: flex;
  text-align: left;
  word-break: break-word;
  text-align: left;
  font-weight: 500;
  font-size: 1rem;
  padding-bottom: 5px;
}
.slider-chapters {
  text-transform: uppercase;
  font-size: 9px;
  padding-top: 3px;
  opacity: 0.7;
  align-self: start;
}
.statistic-card {
  border-radius: 5px;
  --background: #06a37d;
}
.statistic-item {
  --background: #06a37d;
  color: white;
  font-weight: 500;
}
</style>
