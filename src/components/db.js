var text = {
  chapters: [
    {
      id: "Chapter 1",
      title: "Title",
      theory: "teorie",
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        },
        {
          question: "question 2 text",
          type: "select",
          id: "2",
          answers: [{
            answer: "answer 1",
            correct: true
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: false
          }]
        }
      ]
    },
    {
      id: "Chapter 2",
      title: "Title",
      theory: "teorie",
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    }
  ]
}

export default text;