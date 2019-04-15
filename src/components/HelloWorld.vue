<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-progress-linear color="blue" height="20" :value="actualChapter.id *10"></v-progress-linear>
        <v-card color="white">
          <v-card-title class="blue--text font-weight-bold">{{actualChapter.title}}</v-card-title>
          <v-card-text class="black--text" v-html="breakIt(actualChapter.theory)"></v-card-text>
          <div
            v-if="(actualChapter.id != '10') && (actualChapter.id != '9') && (actualChapter.id != '1')"
          >
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
                    v-for="(answer, index2) in question.answers"
                    :key="index2"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="seeAnswers()" v-if="seeAnswersVar === false && answersSeen === false">Vezi raspunsuri</v-btn>
              </v-card-actions>
            </v-card-text>
          </div>
          <v-card-actions
            v-if="(actualChapter.id === '10') || (actualChapter.id === '9') || (actualChapter.id === '1') || (answersSeen === true)"
          >
          <v-spacer></v-spacer>
              <v-btn @click="nextQuestion()">Urmatoarea lectie</v-btn>
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
    answersSeen: false
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
      if (this.actualChapter.id === "10") {
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
    nextQuestion() {
      if (this.database.length === this.chapterNumber + 1) {
        this.chapterNumber = 0;
      } else {
        this.chapterNumber = this.chapterNumber + 1;
      }
      this.actualChapter = this.database[this.chapterNumber];
      this.questionShow = false;
      this.radios = null;
      this.answers = [];
      this.seeAnswersVar = false;
      this.disabledSelect = false;
      this.answersSeen = false;
    },
    /*
    index = index intrebare
    index2 = index raspuns
    */
    verifyAnswer(index, index2) {
      return this.actualChapter.questions[index].answers[index2].correct === true
        ? "green"
        : "red";
    },
    seeAnswers() {
      this.seeAnswersVar = true
      this.disabledSelect = true
      this.answersSeen = true
      console.log('ceva')
    },
    setShowResponses(index, index2) {
      return  this.seeAnswersVar === true ? this.verifyAnswer(index, index2) : 'primary' 
    }
  }
};
</script>

<style>
/* i {
  color: #2196F3;
} */
</style>
