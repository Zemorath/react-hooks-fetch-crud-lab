import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"
import { v4 as uuid } from 'uuid'

function QuestionList({ questions, setQuestions }) {

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  function handleQuestionUpdate(updatedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    })

    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem question={question} key={question.id} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleQuestionUpdate}/>
        ))}  
      </ul>
    </section>
  );
}

export default QuestionList;
