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
        </ion-buttons>
        <ion-title>{{ this.courseDetails.name }}
        </ion-title>
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
            {{ actualChapter.title }} ({{ actualChapter.id }}/{{ courseDetails.chapters.length }})
          </v-card-title>
          <v-card-text
            class="theory-text"
            v-if="showQuiz === false"
            v-html="breakIt(actualChapter.theory)"
          ></v-card-text>

          <!-- quiz text -->
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
            v-if="showQuiz === true && seeResults === true">
            Results
          </v-card-title>
          <v-card-text v-if="showQuiz === true && seeResults === true">
            <v-card-text
              v-for="(question, index) in courseDetails.questions"
              :key="index">
              <label class="chapter-title">{{ question.question }}</label>
              <v-radio-group column>
                <v-radio
                  :label="answer.answer"
                  :color="setShowResponses(index, index2)"
                  :value="index + '-' + index2"
                  @change="verifyIfCorrect(index, index2)"
                  v-for="(answer, index2) in question.answers"
                  :key="index2"
                  readonly=true
                ></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card-text>

        </v-card>

      </v-flex>
    </ion-content>

    <ion-tab-bar class="actions-bar" slot="bottom">
      <ion-tab-button
        v-if="showSpaceButton">
      </ion-tab-button>
      <ion-tab-button
        class="back-button"
        @click="backChapter()"
        v-if="showBackButton">
        &#60;
      </ion-tab-button>
      <ion-tab-button
        class="next-button"
        @click="nextChapter()"
        v-if="showNextButton">
        >
      </ion-tab-button>
      <ion-tab-button
        class="quiz-button"
        @click="startQuiz()"
        v-if="showQuizButton">
        Start quiz
      </ion-tab-button>
      <ion-tab-button
        class="see-results-button"
        @click="calculateResults()"
        v-if="showCalculateResultsButton">
        See result
      </ion-tab-button>
      <ion-tab-button
        class="go-back-button"
        @click="goToHome()"
        v-if="showGoBackToCategoriesButton">
        Go back to categories
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
    correctQuestions: 0
  }),
  created() {
    this.courseDetails = this.$route.params.course;
    this.actualChapter = this.courseDetails.chapters[this.chapterNumber];
  },
  computed: {
    showQuizButton() {
      return this.actualChapter.id === this.courseDetails.chapters.length && this.showQuiz === false;
    },
    showBackButton() {
      return this.actualChapter.id <= this.courseDetails.chapters.length && this.showQuiz === false && this.actualChapter.id != 1;
    },
    showNextButton() {
      return this.actualChapter.id < this.courseDetails.chapters.length && this.showQuiz === false && this.seeResults === false;
    },
    showSpaceButton() {
      return this.actualChapter.id == 1 || this.showQuiz === true || this.seeResults === true;
    },
    showCalculateResultsButton() {
      return this.showQuiz === true && this.seeResults === false;
    },
    showGoBackToCategoriesButton() {
      return this.seeResults === true;
    }
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
    goToHome() {
      // 
    },
    verifyIfCorrect(index, index2) {
      if (
        this.actualChapter.questions[index].answers[index2].correct === true
      ) {
        this.correctQuestions = this.correctQuestions + 1;
      }
    },
    verifyAnswers(index, index2) {
      if (
        this.actualChapter.questions[index].answers[index2].correct === true
      ) {
        return true;
      } else {
        return false;
      }
    },
    setShowResponses(index, index2) {
      return this.seeAnswersVar === true
        ? this.verifiedAnswersColors(index, index2)
        : "primary";
    }
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
.see-results-buttons {
  font-size: 1.5rem;
}
.quiz-button,
.go-back-button {
  font-size: 1rem;
}
</style>
