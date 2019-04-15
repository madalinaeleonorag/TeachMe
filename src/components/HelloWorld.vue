<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-progress-linear color="blue" height="20" :value="actualChapter.id *10"></v-progress-linear>
        <v-card color="white">
          <v-card-title class="blue--text font-weight-bold">{{actualChapter.title}}</v-card-title>
          <v-card-text class="black--text" v-html="breakIt(actualChapter.theory)"></v-card-text>
          <div v-if="actualChapter.id != '10' || actualChapter.id != '9' || actualChapter.id != '1'">
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
                    @change="setAnswerForQuestion(index, index2)"
                    v-for="(answer, index2) in question.answers"
                    :key="index2"
                  ></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-alert :value="true" type="error" v-if="error !== null">{{error}}</v-alert>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="nextQuestion()">Vezi raspunsuri</v-btn>
              </v-card-actions>
            </v-card-text>
          </div>
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
    questionNumber: 0,
    radios: null,
    answers: [],
    error: null
  }),
  created() {
    this.database = db.default.chapters;
    this.actualChapter = this.database[this.questionNumber];
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
      if (this.verifyAnswers()) {
        if (this.database.length === this.questionNumber + 1) {
          this.questionNumber = 0;
        } else {
          this.questionNumber = this.questionNumber + 1;
        }
        this.actualChapter = this.database[this.questionNumber];
        this.questionShow = false;
        this.radios = null;
        this.answers = [];
        this.error = null;
      } else {
        this.error = "Raspuns gresit! Mai incearca :)";
      }
    },
    setAnswerForQuestion(index, index2) {
      if (this.answers[index] != index2) {
        this.answers[index] = index2;
      }
    },
    verifyAnswers() {
      let x = [];
      this.answers.forEach((item, index) => {
        x[index] = this.actualChapter.questions[index].answers[item].correct;
      });
      return x.indexOf(false) === -1;
    }
  }
};
</script>

<style>
/* i {
  color: #2196F3;
} */
</style>
