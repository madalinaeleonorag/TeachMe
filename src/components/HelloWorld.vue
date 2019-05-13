<template>
  <v-container fluid >
    <v-layout row wrap>
      <v-layout align-center justify-center column fill-height v-if="!showTitle">
        <v-flex xs12 sm12 class="text-xs-center">
          <v-img src="https://static1.squarespace.com/static/55d1e076e4b0be96a30dc726/t/56d97e0204426228b2ce15aa/1496844618749/computerworld_security_icon" 
          max-height="300px" contain></v-img>
          <div class="display-4 text-uppercase">
            <span class="blue--text">TeachMe</span>
            <span class="font-weight-light grey--text">SECURE</span>
          </div> 
          <div class="display-2">
            este o  aplicatie ce ajuta la insusirea informatiilor despre securitatea arhitecturii client-server
          </div>
          <v-btn color="info" @click="showTitle = !showTitle">START</v-btn>
        </v-flex>
      </v-layout>
      <v-flex xs12 sm12 v-if="showTitle">
        <v-progress-linear color="blue" height="20" :value="(chapterNumber *100)/10"></v-progress-linear>
        <v-card color="white">
          <div class="text-xs-center" v-if="actualChapter.id === '11'">
            <v-card-text
              class="text-xs-center"
            >{{ ((correctQuestions * 100)/allQuestions) >= 80 ? 'Felicitari!' : 'Mai incearca!'}}</v-card-text>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="(correctQuestions * 100)/allQuestions"
              :color="(correctQuestions * 100)/allQuestions >= 80 ? 'green' : (correctQuestions * 100)/allQuestions < 80 || (correctQuestions * 100)/allQuestions >= 50 ? 'orange' : 'red'"
            >{{ Math.round(((correctQuestions * 100)/allQuestions) * 100) / 100 }}</v-progress-circular>
            <v-card-text>
            <v-btn flat color="blue" @click="tryAgain()">Incearca din nou</v-btn>
            </v-card-text>
          </div>
          <v-card-title class="blue--text font-weight-bold">{{actualChapter.title}}</v-card-title>
          <v-card-text class="black--text" v-html="breakIt(actualChapter.theory)"></v-card-text>
          <div v-if="actualChapter.questions">
            <v-card-text v-if="!questionShow">
              <v-btn @click="questionShow = !questionShow">Arata intrebarile!</v-btn>
            </v-card-text>
            <v-card-text v-if="questionShow">
              <v-card-text v-for="(question, index) in actualChapter.questions" :key="index">
                <label class="blue--text">{{question.question}}</label>
                <v-radio-group column>
                  <v-radio
                    :label="answer.answer"
                    :value="index+'-'+index2"
                    :color="setShowResponses(index, index2)"
                    :readonly="disabledSelect"
                    @change="verifyIfCorrect(index, index2)"
                    v-for="(answer, index2) in question.answers"
                    :key="index2"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  @click="seeAnswers()"
                  v-if="seeAnswersVar === false && answersSeen === false"
                >Vezi raspunsuri</v-btn>
              </v-card-actions>
            </v-card-text>
          </div>
          <v-card-actions
            v-if="(!actualChapter.questions && (actualChapter.id != '11'))  || (answersSeen === true)"
          >
            <v-spacer></v-spacer>
            <v-btn @click="nextChapter()">Urmatoarea lectie</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as db from "@/components/db";
export default {
  name: "HelloWorld",
  data: () => ({
    database: null,
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
    showTitle: null
  }),
  created() {
    this.database = db.default.chapters;
    this.actualChapter = this.database[this.chapterNumber];
  },
  methods: {
    showQuestions(index) {
      this.questionShow = index;
    },
    breakIt(value) {
      if (this.actualChapter.id === "11") {
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
      this.chapterNumber = 0
      this.actualChapter = this.database[this.chapterNumber];
    },
    nextChapter() {
      if (this.actualChapter.questions) {
        this.allQuestions =
          this.allQuestions + this.actualChapter.questions.length;
      }
      this.chapterNumber = this.chapterNumber + 1;
      this.actualChapter = this.database[this.chapterNumber];
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
    }
  }
};
</script>

<style>
.v-progress-circular {
  margin: 1rem;
}
</style>
