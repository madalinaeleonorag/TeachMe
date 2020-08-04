<template>
  <div>
    <ion-header>
      <ion-toolbar class="toolbar-style">
        <ion-buttons slot="start">
           <ion-back-button default-href="/" text="" color='light'></ion-back-button>
        </ion-buttons>
        <ion-title>{{this.courseDetails.name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding class="hp-style">
      <v-flex xs12 sm12>
        <v-progress-linear color="blue" height="20" :value="(chapterNumber * 100) / 10"></v-progress-linear>
        <v-card>
          <div class="text-xs-center" v-if="actualChapter.id === '12'">
            <v-card-text class="text-xs-center">
              {{
              (correctQuestions * 100) / allQuestions >= 80
              ? "Felicitari!"
              : "Mai incearca!"
              }}
            </v-card-text>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="(correctQuestions * 100) / allQuestions"
              :color="
                (correctQuestions * 100) / allQuestions >= 80
                  ? 'green'
                  : (correctQuestions * 100) / allQuestions < 80 ||
                    (correctQuestions * 100) / allQuestions >= 50
                  ? 'orange'
                  : 'red'
              "
            >
              {{
              Math.round(((correctQuestions * 100) / allQuestions) * 100) /
              100
              }}
            </v-progress-circular>
            <v-card-text>
              <v-btn flat color="blue" @click="tryAgain()">Incearca din nou</v-btn>
            </v-card-text>
          </div>
          <v-card-title class="chapter-title">
            {{
            actualChapter.title
            }}
          </v-card-title>
          <v-card-text class="theory-text" v-html="breakIt(actualChapter.theory)"></v-card-text>
          <div v-if="actualChapter.questions">
            <v-card-text v-if="!questionShow" class='show-questions'>
               <ion-button color='light' fill='clear' @click="questionShow = !questionShow">Arata intrebarile!</ion-button>
            </v-card-text>
            <v-card-text v-if="questionShow" class='see-answears'>
              <v-card-text v-for="(question, index) in actualChapter.questions" :key="index">
                <label class="chapter-title">{{ question.question }}</label>
                <v-radio-group column>
                  <v-radio
                    :label="answer.answer"
                    :value="index + '-' + index2"
                    :color="setShowResponses(index, index2)"
                    :readonly="disabledSelect"
                    @change="verifyIfCorrect(index, index2)"
                    v-for="(answer, index2) in question.answers"
                    :key="index2"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-card-actions class='see-answears'>
                <v-spacer></v-spacer>
                 <ion-button color='light' fill='clear' 
                 @click="seeAnswers()"
                  v-if="seeAnswersVar === false && answersSeen === false"
                 >Vezi raspunsuri</ion-button>
              </v-card-actions>
            </v-card-text>
          </div>
          <v-card-actions class='next-chapter'
             v-if="
              (!actualChapter.questions && actualChapter.id != '12') ||
                answersSeen === true
            "
          >
            <v-spacer></v-spacer>
            <ion-button color='light' fill='clear' @click="nextChapter()">Urmatoarea lectie</ion-button>
          </v-card-actions>
        </v-card>
      </v-flex>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "tab1Details",
  data: () => ({
    courseDetails: null,
    questionShow: false,
    actualChapter: null,
    chapterNumber: 0,
    radios: null,
    disabledSelect: false,
    answers: [],
    seeAnswersVar: false,
    answersSeen: false,
    allQuestions: 0,
    correctQuestions: 0,
  }),
  created() {
    this.courseDetails = this.$route.params.course;
    this.actualChapter = this.courseDetails.chapters[this.chapterNumber];
  },
  methods: {
    showQuestions(index) {
      this.questionShow = index;
    },
    breakIt(value) {
      if (this.actualChapter.id === "12") {
        return value;
      } else {
        let subtitleCheckForBr1 = value.split("<i>").join("<br><i>");
        let subtitleCheck = subtitleCheckForBr1
          .split("<i>")
          .join('<i style="color:#2196F3;">');
        let subtitleCheckForBr2 = subtitleCheck.split("</i>").join("</i><br>");
        let brCheck = subtitleCheckForBr2.split(".").join(".<br>");
        return brCheck;
      }
    },
    tryAgain() {
      this.chapterNumber = 0;
      this.actualChapter = this.courseDetails.chapters[this.chapterNumber];
    },
    nextChapter() {
      if (this.actualChapter.questions) {
        this.allQuestions =
          this.allQuestions + this.actualChapter.questions.length;
      }
      this.chapterNumber = this.chapterNumber + 1;
      this.actualChapter = this.courseDetails.chapters[this.chapterNumber];
      this.questionShow = false;
      this.radios = null;
      this.answers = [];
      this.seeAnswersVar = false;
      this.disabledSelect = false;
      this.answersSeen = false;
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
    /*
    index = index intrebare
    index2 = index raspuns
    */
    verifiedAnswersColors(index, index2) {
      return this.verifyAnswers(index, index2) ? "green" : "red";
    },
    seeAnswers() {
      this.seeAnswersVar = true;
      this.disabledSelect = true;
      this.answersSeen = true;
    },
    setShowResponses(index, index2) {
      return this.seeAnswersVar === true
        ? this.verifiedAnswersColors(index, index2)
        : "primary";
    },
  },
  onCreate() {},
};
</script>

<style>
.v-progress-circular {
  margin: 1rem;
}
.toolbar-style {
  --background: rgb(45, 65, 89);
  color: white;
}
.hp-style {
  --background: rgb(36, 43, 62);
}
.chapter-title{
  color: white;
  background-color: rgb(36, 43, 62);
}
.theory-text {
  color: white;
  background-color: rgb(36, 43, 62);
}
.next-chapter {
  color: white;
  background-color: rgb(36, 43, 62);
}
.show-questions {
  color: white;
  background-color: rgb(36, 43, 62);

}
.see-answears {
    color: white;
  background-color: rgb(36, 43, 62);
}
</style>
