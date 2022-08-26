import React, { useState } from "react";
import "./feedback.scss";
import Rating from "@mui/material/Rating";
export default function Feedback() {
  const questions = [
    {
      text: " In my study environment, it is most important to me..",
      options: [
        {
          id: 0,
          text: " To help friends and to be in a peaceful environment.  . ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "To feel that my friends admire me and to be free from rigid rules",
          isCorrect: false,
        },
        {
          id: 2,
          text: "To know exactly what is expected of me and to finish one task before moving to another",
          isCorrect: false,
        },
        {
          id: 3,
          text: "To get things done and to see results. ",
          isCorrect: true,
        },
      ],
    },
    {
      text: "In my study environment, it is least important to me... ",
      options: [
        {
          id: 0,
          text: "To help friends and to be in a peaceful environment",
          isCorrect: true,
        },
        {
          id: 1,
          text: "To feel that my friends admire me and to be free from rigid rules",
          isCorrect: false,
        },
        {
          id: 2,
          text: "To know exactly what is expected of me and to finish one task before moving to another. ",
          isCorrect: false,
        },
        {
          id: 3,
          text: " To get things done and to see results. ",
          isCorrect: false,
        },
      ],
    },
    {
      text: "When someone offers an opinion or conclusion and I disagree, I am most likely to...",
      options: [
        { id: 0, text: "Tell them that I disagree", isCorrect: true },
        { id: 1, text: "Say something humorous.", isCorrect: false },
        { id: 2, text: "Ask for more informationn", isCorrect: false },
        { id: 3, text: "Nod and say nothing.", isCorrect: false },
      ],
    },
    {
      text: " When someone offers an opinion or conclusion and I disagree, I am least likely to... ",
      options: [
        { id: 0, text: "Tell them that I disagree. ", isCorrect: false },
        { id: 1, text: "Say something humorous", isCorrect: true },
        { id: 2, text: "Ask for more information. ", isCorrect: false },
        { id: 3, text: "Nod and say nothing. ", isCorrect: false },
      ],
    },
    {
      text: "When I am working on a team and we encounter a difficulty of some kind, I am most likely to say...",
      options: [
        {
          id: 0,
          text: "Lighten up! Just go with the flow! ",
          isCorrect: false,
        },
        { id: 1, text: "Let's make a decision! ", isCorrect: true },
        {
          id: 2,
          text: "How do you feel? I'd like to make sure that everyone is comfortable. ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Let's consider this more carefully? Do we have all of the data we need? ",
          isCorrect: false,
        },
      ],
    },
    {
      text: " When I am working on a team and we encounter a difficulty of some kind, I am least likely to say...",
      options: [
        {
          id: 0,
          text: "Lighten up! Just go with the flow! ",
          isCorrect: false,
        },
        { id: 1, text: "Let's make a decision! ", isCorrect: true },
        {
          id: 2,
          text: "How do you feel? I'd like to make sure that everyone is comfortable. ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Let's consider this more carefully? Do we have all of the data we need? ",
          isCorrect: false,
        },
      ],
    },
    {
      text: "My attitude towards detail work — like research and data analysis — is most often... ",
      options: [
        {
          id: 0,
          text: "Great. I enjoy research and analysis. ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "If it will get better and faster results, I'll do it.  ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "If it will make others think more highly of me, I'll do it. . ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "If it will help other people or make things easier, I'll do it. ",
          isCorrect: false,
        },
      ],
    },
    {
      text: " My attitude towards detail work — like research and data analysis — is least often...  ",
      options: [
        {
          id: 0,
          text: "Great. I enjoy research and analysis. ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "If it will get better and faster results, I'll do it.  ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "If it will make others think more highly of me, I'll do it. . ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "If it will help other people or make things easier, I'll do it. ",
          isCorrect: false,
        },
      ],
    },
    {
      text: " When I am at an event with many people I have not yet met present, I am most likely to...   ",
      options: [
        {
          id: 0,
          text: "Find a small group of people with whom I am already comfortable and speak with them in quiet conversation.  ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Seek a good vantage point to observe the event and sit quietly unless someone speaks to me. .  ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Meet and talk with as many people as possible before the event is over.  ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Go to the people I need to speak with to fulfill my purpose for attending. . ",
          isCorrect: false,
        },
      ],
    },

    {
      text: " When I am at an event with many people I have not yet met present, I am least likely to...   ",
      options: [
        {
          id: 0,
          text: "Find a small group of people with whom I am already comfortable and speak with them in quiet conversation.  ",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Seek a good vantage point to observe the event and sit quietly unless someone speaks to me. .  ",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Meet and talk with as many people as possible before the event is over.  ",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Go to the people I need to speak with to fulfill my purpose for attending. . ",
          isCorrect: false,
        },
      ],
    },
  ];
  const [assessmentTaken, setAssessmentTaken] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [value, setValue] = React.useState(2);

  const optionClicked = (isCorrect, value) => {
    console.log(value);
 

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  return (
    <div className="assessment">
      {
        showResults? <div className="final-results">
       
        <h4>Thanks for Giving Your Valuable Feedback</h4>
        <button
          onClick={() => {
            setAssessmentTaken(true);
            // setData(...data,array);
          }}
        >
          go Back 
        </button>
      </div>:<div className="question-card">
        <h1 className="head">Feedback Form</h1>

       
        <h3 className="question-text" style={{marginTop:'5rem'}}>{questions[currentQuestion].text}</h3>

    
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                value={option.id}
                onClick={(e) => {
                  e.preventDefault();
                  optionClicked(option.isCorrect, option);
                }}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
      }
     
      
    </div>
  );
}
