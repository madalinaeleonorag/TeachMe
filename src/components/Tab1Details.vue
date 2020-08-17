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
        <ion-title class="course-title"
          >{{ this.courseDetails.name }}
        </ion-title>
      </ion-toolbar>
      <ion-progress-bar
        class="progress-bar"
        color="secondary"
        :value="actualChapter.id / courseDetails.chapters.length"
      ></ion-progress-bar>
    </ion-header>
    <ion-content padding class="dark-color-background">
      <v-flex xs12 sm12 class="content">
        <div>
          <!-- chapter text -->
          <div class="chapter-title" v-if="showQuiz === false">
            {{ actualChapter.title }} ({{ actualChapter.id }}/{{
              courseDetails.chapters.length
            }})
          </div>
          <div
            class="theory-text"
            v-if="showQuiz === false"
            v-html="breakIt(actualChapter.theory)"
          ></div>

          <!-- quiz text -->
          <div v-if="showQuiz === true && seeResults === false">
            <div
              v-for="(question, index) in courseDetails.questions"
              :key="index"
            >
              <label>{{ question.question }}</label>
              <v-radio-group column :mandatory="true" v-model="answers[index]">
                <v-radio
                  color="#fff"
                  :label="answer.answer"
                  :value="index2"
                  v-for="(answer, index2) in question.answers"
                  :key="index2"
                >
                </v-radio>
              </v-radio-group>
            </div>
          </div>

          <!-- results -->

          <!-- progress donut to be implemented -->
          <div v-if="seeResults === true">
            <div class="header-results">
              <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :value="resultPercentage"
                color="teal"
              >
                {{ resultPercentage }}
              </v-progress-circular>
              Correct questions: {{ correctQuestions }}
            </div>
            <div>
              <div v-for="(question, index3) in wrongQuestions" :key="index3">
                <div class="question">
                  {{ courseDetails.questions[question[0]].question }}
                </div>
                <div class="error-color">
                  <ion-icon name="close" class="error-color"></ion-icon>
                  {{
                    courseDetails.questions[question[0]].answers[question[1]]
                      .answer
                  }}
                </div>
                <div class="success-color">
                  <ion-icon name="checkmark" class="success-color"></ion-icon>
                  {{ getCorrectAnswerForQuestion(question[0]) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
    </ion-content>

    <ion-tab-bar class="actions-bar" slot="bottom">
      <ion-tab-button v-if="showSpaceButton"> </ion-tab-button>
      <ion-tab-button
        class="back-button"
        @click="backChapter()"
        v-if="showBackButton"
      >
        &#60;
      </ion-tab-button>
      <ion-tab-button
        class="next-button"
        @click="nextChapter()"
        v-if="showNextButton"
      >
        >
      </ion-tab-button>
      <ion-tab-button
        class="quiz-button"
        @click="startQuiz()"
        v-if="showQuizButton"
      >
        Start quiz
      </ion-tab-button>
      <ion-tab-button
        class="see-results-button"
        @click="calculateResults()"
        v-if="showCalculateResultsButton"
      >
        See result
      </ion-tab-button>
      <ion-tab-button
        class="go-back-button"
        @click="goToHome()"
        v-if="showGoBackToCategoriesButton"
      >
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
    correctQuestions: 0,
    answers: [],
    wrongQuestions: [],
    resultPercentage: 0,
  }),
  created() {
    this.courseDetails = this.$route.params.course;
    this.actualChapter = this.courseDetails.chapters[this.chapterNumber];
  },
  computed: {
    showQuizButton() {
      return (
        this.actualChapter.id === this.courseDetails.chapters.length &&
        this.showQuiz === false
      );
    },
    showBackButton() {
      return (
        this.actualChapter.id <= this.courseDetails.chapters.length &&
        this.showQuiz === false &&
        this.actualChapter.id != 1
      );
    },
    showNextButton() {
      return (
        this.actualChapter.id < this.courseDetails.chapters.length &&
        this.showQuiz === false &&
        this.seeResults === false
      );
    },
    showSpaceButton() {
      return (
        this.actualChapter.id == 1 ||
        this.showQuiz === true ||
        this.seeResults === true
      );
    },
    showCalculateResultsButton() {
      return this.showQuiz === true && this.seeResults === false;
    },
    showGoBackToCategoriesButton() {
      return this.seeResults === true;
    },
  },
  methods: {
    getCorrectAnswerForQuestion(questionNumber) {
      return this.courseDetails.questions[questionNumber].answers.filter(
        (answer) => answer.correct === true
      )[0].answer;
    },
    calculateResults() {
      let correct = 0;
      let wrong = [];
      this.answers.forEach((answer, indexQuestion) => {
        if (
          this.courseDetails.questions[indexQuestion].answers[answer]
            .correct === true
        ) {
          correct = correct + 1;
        } else {
          wrong.push([indexQuestion, answer]);
        }
      });
      this.correctQuestions = correct;
      this.wrongQuestions = wrong;
      this.seeResults = true;
      this.resultPercentage = Math.round(
        (correct / this.courseDetails.questions.length) * 100
      );
      this.$store.dispatch("addQuizResult", {
        id: this.courseDetails.id,
        points: this.resultPercentage,
      });
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
        .join('<i style="color:#57b3ed;">');
      let subtitleCheckForBr2 = subtitleCheck.split("</i>").join("</i><br>");
      let brCheck = subtitleCheckForBr2.split(".").join(".<br>");
      return brCheck;
    },
    goToHome() {
      this.$router.push({ name: "tab1-details" });
    },
  },
};
</script>

<style>
.question {
  margin-top: 10px;
}
.actions-bar {
  --background: #170a3a;
  --color: #57b3ed;
}
.chapter-title {
  color: #57b3ed;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  padding-left: 10px;
  padding-top: 10px;
  background-color: #241b52;
  font-size: initial;
}
.header-results {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px 0;
}
.v-progress-circular {
  margin-bottom: 15px;
}
.theory-text {
  word-spacing: 1px;
  white-space: pre-line;
}
.next-chapter {
  background-color: #170a3a;
}
.show-questions {
  background-color: #170a3a;
}
*/ .progress-bar {
  height: 5px;
}
.next-button,
.back-button,
.see-results-buttons,
.quiz-button,
.go-back-button {
  font-size: 16px;
}
.v-label {
  color: white !important;
  font-size: 14px;
}
.course-title {
  text-align: start;
}
.div {
  border: none;
  background-color: #170a3a;
  box-shadow: none;
}
.theme--light.v-sheet {
  background-color: transparent;
}
.content {
  margin: 20px;
}
</style>
