<template>
  <div>
    <ion-header>
      <ion-toolbar class="toolbar-style">
        <ion-buttons slot="start">
          <ion-back-button
            default-href="/"
            text=""
            color="light"
          ></ion-back-button>
          {{ courseDetails.chapters.length }}
        </ion-buttons>
        <ion-title>{{ this.courseDetails.name }}</ion-title>
      </ion-toolbar>
      <ion-progress-bar
        class="progress-bar"
        :value="chapterNumber / courseDetails.chapters.length"
      ></ion-progress-bar>
    </ion-header>
    <ion-content padding class="hp-style">
      <v-flex xs12 sm12>
        <v-card>
          <!-- chapter text -->
          <v-card-title class="chapter-title" v-if="showQuiz === false">
            {{ actualChapter.title }}
          </v-card-title>
          <v-card-text
            class="theory-text"
            v-if="showQuiz === false"
            v-html="breakIt(actualChapter.theory)"
          ></v-card-text>
          <!-- quiz text -->
          <v-card-title class="chapter-title" v-if="showQuiz === true">
            QUIZ
          </v-card-title>
          <v-card-text v-if="showQuiz === true">
            <v-card-text
              v-for="(question, index) in courseDetails.questions"
              :key="index"
            >
              <label class="chapter-title">{{ question.question }}</label>
              <v-radio-group column>
                <v-radio
                  :label="answer.answer"
                  :value="index + '-' + index2"
                  v-for="(answer, index2) in question.answers"
                  :key="index2"
                ></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card-text>
          <!-- results -->
          <v-card-title
            class="chapter-title"
            v-if="showQuiz === true && seeResults === true"
          >
            Results
          </v-card-title>
          <v-card-text v-if="showQuiz === true && seeResults === true">
            <v-card-text
              v-for="(question, index) in courseDetails.questions"
              :key="index"
            >
              <label class="chapter-title">{{ question.question }}</label>
              <v-radio-group column>
                <v-radio
                  :label="answer.answer"
                  :value="index + '-' + index2"
                  v-for="(answer, index2) in question.answers"
                  :key="index2"
                ></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-flex>
    </ion-content>
    <ion-tab-bar class="actions-bar" slot="bottom">
      <v-spacer
        v-if="
          actualChapter.id === courseDetails.chapters.length && showQuiz === false ||
            actualChapter.id == 1
        "
      ></v-spacer>
      <ion-tab-button
        class="back-button"
        @click="backChapter()"
        v-if="
          actualChapter.id == courseDetails.chapters.length && showQuiz === false ||
            actualChapter.id != 1
        "
      >
        {{ "<" }}
      </ion-tab-button>
      <ion-tab-button
        class="next-button"
        @click="nextChapter()"
        v-if="actualChapter.id < courseDetails.chapters.length"
      >
        >
      </ion-tab-button>
      <ion-tab-button
        class="quiz-button"
        @click="startQuiz()"
        v-if="actualChapter.id == courseDetails.chapters.length && showQuiz === false"
      >
        Start quiz
      </ion-tab-button>
      <ion-tab-button
        class="see-results-button"
        @click="calculateResults()"
        v-if="showQuiz === true && seeResults === false"
      >
        See result
      </ion-tab-button>
    </ion-tab-bar>
  </div>
</template>

<script>
export default {
  name: "tab1Details",
  data: () => ({
    courseDetails: null,
    actualChapter: null,
    seeResults: false,
    chapterNumber: 0,
    showQuiz: false,
  }),
  created() {
    this.courseDetails = this.$route.params.course;
    this.actualChapter = this.courseDetails.chapters[this.chapterNumber];
  },
  methods: {
    calculateResults() {
      this.seeResults = true;
    },
    nextChapter() {
      this.chapterNumber = this.chapterNumber + 1;
      this.actualChapter = this.courseDetails.chapters[this.chapterNumber];
    },
    backChapter() {
      this.chapterNumber = this.chapterNumber - 1;
      this.actualChapter = this.courseDetails.chapters[this.chapterNumber];
    },
    startQuiz() {
      this.showQuiz = true;
    },
    breakIt(value) {
      let subtitleCheckForBr1 = value.split("<i>").join("<br><i>");
      let subtitleCheck = subtitleCheckForBr1
        .split("<i>")
        .join('<i style="color:#2196F3;">');
      let subtitleCheckForBr2 = subtitleCheck.split("</i>").join("</i><br>");
      let brCheck = subtitleCheckForBr2.split(".").join(".<br>");
      return brCheck;
    },
  },
};
</script>

<style>
.actions-bar {
  --background: black;
  --color: white;
}
.v-progress-circular {
  margin: 1rem;
}
.toolbar-style {
  --background: rgb(45, 65, 89);
  color: white;
}
.hp-style {
  --background: black;
}
.chapter-title {
  color: white;
  background-color: black;
}
.theory-text {
  color: white;
  background-color: black;
}
.next-chapter {
  color: white;
  background-color: black;
}
.show-questions {
  color: white;
  background-color: black;
}
.progress-bar {
  --background: black;
  --progress-background: white;
  height: 5px;
}
.next-button,
.back-button,
.see-results-button {
  font-size: 1.5rem;
}
.quiz-button {
  font-size: 1rem;
}
</style>
